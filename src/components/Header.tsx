import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { Option, User } from '../utils/types';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import Select from 'react-select';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const nevigate = useNavigate()
  const user: User | null = useSelector((store: RootState) => store.user)
  const gptSatus = useSelector((store: RootState) => store.gpt.showGptSearch)
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

  const handleGptSearch = () => {
    dispacth(toggleGptSearchView())
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  const handleSelect = (selected: Option | null) => {
    // console.log(selected)
    dispacth(changeLanguage(selected?.value))

  }
  return (
    <div className='absolute w-screen px-2 md:px-4 py-2  z-10 flex flex-col md:flex-row justify-between '>
      <img src={LOGO} alt="logo" className='w-40 m-auto md:m-0 ' />

      {user && <div className='p-4 sm-p-2 flex gap-3 sm:gap-2 sm:align-middle justify-between'>
        {gptSatus && <Select options={SUPPORTED_LANGUAGE} defaultValue={SUPPORTED_LANGUAGE[0]} onChange={handleSelect} className='px-2' />}
        <button className='bg-violet-600 text-white px-1 md:px-4 rounded-lg' onClick={handleGptSearch}>{gptSatus ? "Home Page" : "GPT SEARCH"}</button>
        <img src={(user as { photoURL: string }).photoURL} alt="str" className=' hidden md:block md:w-10 md:h-10 rounded-full' />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
