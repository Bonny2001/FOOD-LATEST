import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { cartContext } from './cartContext'
import { useContext } from 'react'

const ProfileUpdate = ({ myname, setName , updateName, setUpdateName }) => {
    // useState
    const [myid, setId] = useState("")
    // const [myname, setName] = useState("")
    const [myemail, setEmail] = useState("")
    const [mypassword, setmypassword] = useState("")
    // useParams 
    const { id } = useParams()
    console.log(id);
    const navigate = useNavigate()
    // useCOntext 
    // const { myname, setName} = useContext(cartContext)


    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/updateDATA/" + id, {
            id: myid,
            name: myname,
            email: myemail,
            password: mypassword,
            // contact: myContact
        }).then((res) => {
            console.log(res);
            setUpdateName(myname)
        }).catch((err) => {
            console.log(err);
        })
        navigate("/")
    }
    useEffect(() => {
        axios.get("http://localhost:3000/get_profile/" + id)
            .then((response) => {
                setId(response.data._id);
                setName(response.data.name);
                setEmail(response.data.email);
                setmypassword(response.data.password);
                // Debugging log    
                console.log("response:", response.data);
            })
            .catch((error) => {
                console.error("Error fetching profile data:", error);
            })

    }, [])

    console.log(updateName);
    

    const updateNewName = () => {
        setUpdateName(myname)
    }
    return (
        <div className='container max-w-150  pt-25'>
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Profile </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">

                            {/* <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
                              &nbsp;  Sign up here
                            </a> */}
                        </p>
                    </div>

                    <div className="mt-5">


                        {/* <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div> */}

                        {/* <!-- Form --> */}
                        <form
                            onSubmit={HandleSubmit}
                        >
                            <div className="grid gap-y-4">
                                {/* <!-- Form Group --> */}
                                <div>
                                    <label type="name" className="block text-sm mb-2 dark:text-white">Name</label>
                                    <div className="relative ">
                                        <input value={myname} onChange={(e) => setName(e.target.value)} type="name" id="name" name="name" className="bg-blue-100/50 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="name-error" />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>
                                <div>
                                    <label type="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                    <div className="relative ">
                                        <input value={myemail} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="bg-blue-100/50 py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="email-error" />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>
                                {/* <!-- End Form Group --> */}

                                {/* <!-- Form Group --> */}
                                <div>
                                    <div className="flex flex-wrap justify-between items-center gap-2">
                                        <label type="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                        {/* <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../examples/html/recover-account.html">Forgot password?</a> */}
                                    </div>
                                    <div className="relative">
                                        <input value={mypassword} onChange={(e) => setmypassword(e.target.value)} type="password" id="password" name="password" className=" bg-blue-100/50   py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="password-error" />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                </div>
                                {/* <!-- End Form Group --> */}

                                {/* <!-- Checkbox --> */}
                                <div className="flex items-center">
                                    {/* <div className="flex">
                                        <input id="remember-me" name="remember-me" type="checkbox" 
                                        className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 
                                        dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                    </div> */}
                                    {/* <div className="ms-3">
                                        <label type="remember-me" className="text-sm dark:text-white">Remember me</label>
                                    </div> */}
                                </div>
                                {/* <!-- End Checkbox --> */}

                                <button type="submit" onClick={updateNewName} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium
                                 rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden 
                                 focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">Update</button>
                            </div>
                        </form>
                        {/* <!-- End Form --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate
