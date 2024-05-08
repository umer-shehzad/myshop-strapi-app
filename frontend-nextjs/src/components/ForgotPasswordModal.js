"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { UsersData } from '@/users/UsersData';

const ForgotPasswordModal = ({ isOpen, onClose, onSubmit }) => {
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [newPasswordIsFocused, setNewPasswordIsFocused] = useState(false);
    const [confirmPasswordIsFocused, setConfirmPasswordIsFocused] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [newPasswordValue, setNewPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showComponent, setShowComponent] = useState(false);

    const handleEmailFocus = () => {
        setEmailIsFocused(true);
    };

    const handleEmailBlur = () => {
        if (emailValue) {
            setEmailIsFocused(false);
        }
    };

    const handleNewPasswordFocus = () => {
        setNewPasswordIsFocused(true);
    };

    const handleNewPasswordBlur = () => {
        if (newPasswordValue) {
            setNewPasswordIsFocused(false);
        }
    };

    const handleConfirmPasswordFocus = () => {
        setConfirmPasswordIsFocused(true);
    };

    const handleConfirmPasswordBlur = () => {
        if (confirmPasswordValue) {
            setConfirmPasswordIsFocused(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPasswordValue(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordValue(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailSubmit = () => {
        if (emailValue) {
            const findEmail = UsersData.find((element) => {
                return element.email === emailValue
            })
            if(findEmail){
                setShowComponent(true);
            } else {
                toast.error('Please Enter Correct Email')    
            }
        } else {
            toast.error('Please Enter Email')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed from the parent component
        onSubmit({ emailValue, newPasswordValue, confirmPasswordValue });
        setShowComponent(false);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content rounded-3xl max-w-3xl">
                <span className="close text-3xl text-primary cursor-pointer flex justify-center float-end items-center content-center mr-5 bg-slate-200 border rounded-2xl w-8 h-8" onClick={onClose}>&times;</span>
                <p className='text-4xl text-center font-medium mb-8 mt-0'>Update Password</p>
                <div className='container h-full flex flex-col items-center'>
                    {/* email input */}
                    <div className="relative mb-6 w-1/2">
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
                            className={`absolute left-3 top-0.5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${emailIsFocused ? 'peer-focus:-translate-y-[1.15rem] peer-focus:pt-[0.19rem] peer-focus:scale-[0.8] bg-white px-2' : ''}  ${emailValue ? emailIsFocused ? '' : '-translate-y-[1.15rem] pt-[0.19rem] scale-[0.8] bg-white px-2' : ''}`}
                        >
                            Email address
                        </label>
                    </div>

                    {/* submit email */}
                    {showComponent === false && (
                        <button
                            type="button"
                            className="inline-block mb-4 w-1/2 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            onClick={handleEmailSubmit}
                        >
                            Submit Email
                        </button>
                    )}

                    {showComponent && (
                        <>
                            {/* new password */}
                            <div className="relative mb-6 w-1/2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([])]:placeholder:opacity-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none active:outline-none"
                                    id="new-password"
                                    value={newPasswordValue}
                                    onFocus={handleNewPasswordFocus}
                                    onBlur={handleNewPasswordBlur}
                                    onChange={handleNewPasswordChange}
                                    placeholder="New Password"
                                    required
                                    minLength={6}
                                />
                                <label
                                    htmlFor="new-password"
                                    className={`absolute left-3 top-0.5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${newPasswordIsFocused ? 'peer-focus:-translate-y-[1.15rem] peer-focus:pt-[0.19rem] peer-focus:scale-[0.8] bg-white px-2' : ''}  ${newPasswordValue ? newPasswordIsFocused ? '' : '-translate-y-[1.15rem] pt-[0.19rem] scale-[0.8] bg-white px-2' : ''}`}
                                >New Password
                                </label>
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none text-xl"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className=' text-rose-500 ' /> : <FaEye className=' text-primary ' />}
                                </button>
                            </div>

                            {/* confirm password */}
                            <div className="relative mb-6 w-1/2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([])]:placeholder:opacity-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none active:outline-none"
                                    id="confirm-password"
                                    value={confirmPasswordValue}
                                    onFocus={handleConfirmPasswordFocus}
                                    onBlur={handleConfirmPasswordBlur}
                                    onChange={handleConfirmPasswordChange}
                                    placeholder="Confirm Password"
                                    required
                                    minLength={6}
                                />
                                <label
                                    htmlFor="confirm-password"
                                    className={`absolute left-3 top-0.5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${confirmPasswordIsFocused ? 'peer-focus:-translate-y-[1.15rem] peer-focus:pt-[0.19rem] peer-focus:scale-[0.8] bg-white px-2' : ''}  ${confirmPasswordValue ? confirmPasswordIsFocused ? '' : '-translate-y-[1.15rem] pt-[0.19rem] scale-[0.8] bg-white px-2' : ''}`}
                                >Confirm Password
                                </label>
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none text-xl"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className=' text-rose-500 ' /> : <FaEye className=' text-primary ' />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="inline-block mb-4 w-1/2 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                onClick={handleSubmit}
                            >
                                Reset Password
                            </button>
                        </>

                    )}
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordModal
