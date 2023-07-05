'use client'

import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';
import axios from 'axios';

export default function Signup() {
    function signUP(): void {
        console.log(user);
    }

    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    })

    return (
        <div>
            <h2>Sign Up</h2>
            <div className="container w-50 justify-content-center">
                <label htmlFor="">Username</label>
                <input onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username} className='form-control' type="text" placeholder='name' />
                <label htmlFor="">Email</label>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} className='form-control' type="text" placeholder='Email' />
                <label htmlFor="">Password</label>
                <input className='form-control' onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder='Password' />
                <input type="submit" className='btn btn-outline-primary mt-1' onClick={signUP} />
                <div className="row text-center">
                    <p>Already have account ? <Link className='' href="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}