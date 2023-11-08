import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { User } from '../utils/types';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const nevigate = useNavigate()
  const user: User | null = useSelector((store: RootState) => store.user)
  const dispacth = useDispatch()
  // console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispacth(addUser({ uid: uid, emai: email, displayName: displayName, photoURL: photoURL }))
        nevigate('/browser')
        // ...
      } else {
        // User is signed out
        dispacth(removeUser())
        nevigate('/')

      }
    });

    return () => unsubscribe();
  }, [])


  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img src={LOGO} alt="logo" className='w-40' />

      {user && <div className='p-4 flex gap-3'>
        <img src={(user as { photoURL: string }).photoURL} alt="str" className='w-10 h-10 rounded-full' />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
