import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';

export default function Login() {

    const [user, setUser] = React.useState({
        username: "",
        password: "",
    });

    function LogIn() {
        console.log(user);
    }

    return (
        <div>
            <h3>Login</h3>
            <div className="container w-50">
                <label htmlFor="">Username</label>
                <input onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" className='form-control' value={user.username} />
                <label htmlFor="">Password</label>
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" className='form-control' value={user.password} />
                <button className='btn btn-primary mt-1' onClick={LogIn}>Submit</button>

                <div className="row text-center">
                    <p>forget password ? <Link className='' href="/signup">SignUP</Link></p>
                </div>

            </div>
        </div>
    )
}