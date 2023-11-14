import React, {  useState } from 'react'
import Header from './Header'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { FormValues } from '../utils/types';
import {BG_URL, USER_AVATAR  } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    // const {resetForm} = useFormikContext()
    const [errorMessage, setErrorMessage] = useState('')
    const dispacth = useDispatch()

    const { validationSchema } = checkValidateData(isSignInForm)

    const getInitialValue = (isSignInForm: boolean): FormValues => {
        if (isSignInForm) {
            return {
                email: '',
                password: ''
            }
        } else {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }

    }

    const initialValues: FormValues = getInitialValue(isSignInForm)

    const toggleSignInForm = (values: any) => {

        values.email = '';
        values.password = '';
        if (!isSignInForm) {
            values.confirmPassword = ''
        }
        setIsSignInForm(!isSignInForm)
    }

    const handleSignUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                updateProfile(user, {
                    displayName: "Mrianl", photoURL  : USER_AVATAR 
                }).then(() => {
                    if (auth) {
                        let authUser = auth.currentUser
                        dispacth(addUser({ email: authUser?.email, uid: authUser?.uid, diplayName: authUser?.displayName, photoURL: authUser?.photoURL }))
                    }
                    // ...
                }).catch((error) => {
                    setErrorMessage(error)
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                setErrorMessage(errorCode + " " + errorMessage)
            })

    }

    const handleSignIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                setErrorMessage(errorCode + " " + errorMessage)
            });
    }
    const hadleSubmit = (values: FormValues) => {
        // console.log(values)

        if (isSignInForm) {
            handleSignIn(values.email, values.password)
        } else {
            handleSignUp(values.email, values.password)
        }
    }


    return (
        <div className=''>
            <Header />
            <div className='absolute w-full h-screen'>
                <img src={BG_URL} alt="logo" className='h-screen w-full' />
            </div>

            <div className='absolute bg-black p-12 w-3/4 h-2/3 md:w-3/12 my-auto top-0 bottom-0   mx-auto left-0 right-0 text-white rounded-md bg-opacity-80'>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={hadleSubmit}

                >
                    {({ values }) =>
                    (<Form>
                        <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                        <div className='py-2 my-4'>
                            <Field type='email' name='email' placeholder='Email Adress' className='bg-gray-700 w-full p-2 rounded-sm' />
                            <ErrorMessage name="email" component="div" className='text-red-500 text-lg font-bold' />
                        </div>
                        <div className='py-2 my-4 '>
                            <Field type='password' name='password' placeholder='Password' className='bg-gray-700 w-full p-2 rounded-sm' />
                            <ErrorMessage name='password' component='div' className='text-red-500 text-lg font-bold' />
                        </div>
                        {
                            isSignInForm || <div>
                                <Field type='text' name='confirmPassword' placeholder='Confirm Password' className='bg-gray-700 w-full p-2 rounded-sm' />
                                <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-lg font-bold' />

                            </div>
                        }

                        {
                            errorMessage && <p>{errorMessage}</p>
                        }

                        <button type='submit' className='p-2 w-full my-6 bg-red-700 rounded-sm'>Submit</button>


                        <p className='text-gray-500'>

                            {isSignInForm ? "New on Netflix?" : "Already registered?"}
                            <span className='font-bold text-white ml-3 cursor-pointer' onClick={() => toggleSignInForm(values)}>
                                {
                                    isSignInForm ? "Sign Up Now" : "Sign In Now"
                                }

                            </span>
                        </p>
                    </Form>)
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Login
