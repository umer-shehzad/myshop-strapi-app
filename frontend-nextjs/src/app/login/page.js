"use client"
import React, { useRef } from 'react'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const page = () => {
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [rememberValue, setRememberValue] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleEmailFocus = () => {
        setEmailIsFocused(true);
    };

    const handleEmailBlur = () => {
        if (emailValue) {
            setEmailIsFocused(false);
        }
    };

    const handlePasswordFocus = () => {
        setPasswordIsFocused(true);
    };

    const handlePasswordBlur = () => {
        if (passwordValue) {
            setPasswordIsFocused(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleRememberChange = (e) => {
        setRememberValue(e.target.checked);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (emailValue && passwordValue) {
            console.log('User', emailValue, passwordValue, rememberValue);
        }
        // turn remember value false after submittion
        if (rememberValue) {
            const userData = { email: emailValue, password: passwordValue };
            const userDataString = JSON.stringify(userData);
            localStorage.setItem('userData', userDataString);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <section className="min-h-screen">
                <div className="container h-full px-6">
                    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* <!-- Left column container with background--> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>

                        {/* <!-- Right column container with form --> */}
                        <div className="md:w-8/12 lg:ms-6 lg:w-5/12">

                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Welcome Back!
                                </h2>
                                <p className="mt-2 mb-6 text-sm text-gray-500">Please sign in to your account</p>
                            </div>
                            <div className="flex flex-row justify-center items-center space-x-6 mb-6">
                                <a href=""
                                    className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-slate-200 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                    <img className="w-12 h-12"
                                        src="facebook.png" />
                                </a>
                                <a href=""
                                    className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-slate-200 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                    <img className="w-8 h-8"
                                        src="google.png" />
                                </a>
                            </div>

                            {/* <!-- Divider --> */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold text-gray-500">
                                    or continue with
                                </p>
                            </div>

                            <form onSubmit={handleLoginSubmit}>
                                {/* <!-- Email input --> */}
                                <div className="relative mb-6">
                                    <input
                                        type="email"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([])]:placeholder:opacity-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none active:outline-none"
                                        id="email"
                                        placeholder="Email address"
                                        value={emailValue}
                                        onFocus={handleEmailFocus}
                                        onBlur={handleEmailBlur}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${emailIsFocused ? 'peer-focus:-translate-y-[1.15rem] peer-focus:pt-[0.19rem] peer-focus:scale-[0.8] bg-white px-2' : ''}  ${emailValue ? emailIsFocused ? '' : '-translate-y-[1.15rem] pt-[0.19rem] scale-[0.8] bg-white px-2' : ''}`}
                                    >
                                        Email address
                                    </label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="relative mb-6">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([])]:placeholder:opacity-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none active:outline-none"
                                        id="password"
                                        value={passwordValue}
                                        onFocus={handlePasswordFocus}
                                        onBlur={handlePasswordBlur}
                                        onChange={handlePasswordChange}
                                        placeholder="Password"
                                        required
                                        minLength={6}
                                    // pattern=".*[A-Z].*"
                                    />
                                    <label
                                        htmlFor="password"
                                        className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${passwordIsFocused ? 'peer-focus:-translate-y-[1.15rem] peer-focus:pt-[0.19rem] peer-focus:scale-[0.8] bg-white px-2' : ''}  ${passwordValue ? passwordIsFocused ? '' : '-translate-y-[1.15rem] pt-[0.19rem] scale-[0.8] bg-white px-2' : ''}`}
                                    >Password
                                    </label>
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none text-xl"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash className=' text-rose-500 ' /> : <FaEye className=' text-primary ' />}
                                    </button>
                                </div>

                                {/* <!-- Remember me checkbox --> */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                                        <input
                                            className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                                            type="checkbox"
                                            checked={rememberValue}
                                            onChange={handleRememberChange}
                                            id="remember-me" />
                                        <label
                                            className="inline-block ps-[0.15rem] hover:cursor-pointer text-gray-700"
                                            htmlFor="remember-me">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* <!-- Forgot password link --> */}
                                    <a
                                        href="#!"
                                        className="text-primary focus:outline-none"
                                    >Forgot password?</a
                                    >
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                // onClick={handleLoginClick}
                                >
                                    Sign in
                                </button>

                                <div>
                                    <p className="flex flex-row items-center justify-center gap-3 mt-10 text-center text-md text-gray-500">
                                        <span className='text-gray-700'>Don't have an account?</span>
                                        <a href="#"
                                            className="text-primary no-underline cursor-pointer">Sign
                                            up</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
