import React, { useState } from 'react'
import Header from './Header'
import { ErrorMessage, Field, Form, Formik } from 'formik'

type FormValues = {
    email: string
    password: string
    confirmPassword?: string
}

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)



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
    // const initialValues = useCallback(() => {
    //     getInitialValue(isSignInForm)
    // }, [isSignInForm])

    console.log(isSignInForm)
    console.log(initialValues)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    const hadleSubmit = () => {

    }
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src="
                https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg
                " alt="logo" />
            </div>
            <div className='absolute bg-black p-12 w-3/12 h-2/3 my-auto top-0 bottom-0   mx-auto left-0 right-0 text-white rounded-md bg-opacity-80'>

                <Formik
                    initialValues={initialValues}
                    onSubmit={hadleSubmit}

                >
                    <Form>
                        <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                        <div className='py-2 my-4'>
                            <Field type='email' name='email' placeholder='Email Adress' className='bg-gray-700 w-full p-2 rounded-sm' />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className='py-2 my-4 '>
                            <Field type='password' name='password' placeholder='Password' className='bg-gray-700 w-full p-2 rounded-sm' />
                            <ErrorMessage name='password' component='div' />
                        </div>
                        {
                            isSignInForm || <div>
                                <Field type='text' name='confirmPassword' placeholder='Confirm Password' className='bg-gray-700 w-full p-2 rounded-sm' />
                                <ErrorMessage name='confirmPassword' component='div' />

                            </div>
                        }

                        <button type='submit' className='p-2 w-full my-6 bg-red-700 rounded-sm'>Submit</button>


                        <p className='text-gray-500'>

                            {isSignInForm ? "New on Netflix?" : "Already registered?"}
                            <span className='font-bold text-white ml-3 cursor-pointer' onClick={toggleSignInForm}>
                                {
                                    isSignInForm ? "Sign Up Now" : "Sign In Now"
                                }

                            </span>
                        </p>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login
