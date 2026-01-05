"use client"

import { InstagramIcon, Menu, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className='flex items-center justify-between p-4 w-19/20 md:w-10/12 mx-auto z-50'>
            <nav className='flex items-center justify-between w-full mx-auto'>
                <div>
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className='rounded-full'
                        onClick={() => router.push('/')}
                    />
                </div>

                <div className=" gap-8 text-lg font-normal pl-16 hidden md:flex text-gray-600 ">
                    <Link className={`hover:text-black  ${pathname === '/' ? 'active' : ''}`} href="/" >Home
                    </Link>
                    <Link className={`hover:text-black  ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                    <Link className={`hover:text-black  ${pathname === '/collaboration' ? 'active' : ''}`} href="/collaboration">Collaborate</Link>
                    <Link className={`hover:text-black  ${pathname === '/gallery' ? 'active' : ''}`} href="/gallery">Gallery</Link>
                    <Link className={`hover:text-black  ${pathname === '/connect' ? 'active' : ''}`} href="/connect">Connect</Link>
                </div>

                <Link
                    className="hidden md:flex items-center gap-2"
                    href="https://www.instagram.com/kalaa_bliss"
                    target="_blank">
                    <InstagramIcon /><span>@kalaabliss</span></Link>


                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className=" rounded-md transition-colors duration-300
                    block md:hidden z-50 transition-smooth">
                    {isMenuOpen ? <XIcon size={28} /> : <Menu size={28} />}
                </button>
            </nav>
            <nav>
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-8">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl">Home</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl">About</Link>
                        <Link href="/collaboration" onClick={() => setIsMenuOpen(false)} className="text-2xl">Collaboration</Link>
                        <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-2xl">Gallery</Link>
                        <Link href="/connect" onClick={() => setIsMenuOpen(false)} className="text-2xl">Connect</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}   