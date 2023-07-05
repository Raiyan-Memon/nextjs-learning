'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/home" ? ' text-black' : '')} aria-current="page" href="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/about" ? ' text-black' : '')} href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/contact" ? ' text-black' : '')} href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/pricing" ? ' text-black' : '')} href="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/service" ? ' text-black' : '')} href="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/login" ? ' text-black' : '')} href="/login">LogIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + (pathname == "/signup" ? ' text-black' : '')} href="/signup">SignUp</Link>
                        </li>
                    
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" id="" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}