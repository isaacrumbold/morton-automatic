import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Ref } from './Ref'
import { useState } from 'react'

export const NavBar = () => {
    const [display, setDisplay] = useState('hidden')

    const expandMenu = () => {
        if (display === 'hidden') {
            setDisplay('flex')
        } else {
            setDisplay('hidden')
        }
    }

    return (
        <div className="flex h-fit w-full">
            <div className=" z-30 flex h-24 w-full justify-center bg-white text-primary max-lg:hidden">
                <div className=" mx-10 flex h-full w-full max-w-screen-2xl px-2">
                    <Link to="/" className="flex">
                        <img src={logo} alt="logo" className="my-2" />
                    </Link>
                    <div className="mx-4 my-auto">
                        <h1 className=" my-auto  text-[28px] font-medium text-primary">
                            Morton Automatic Electric
                        </h1>
                        <div className=" flex flex-col items-center justify-center text-xs text-gray-700">
                            <h2>
                                Control Panels | Wire Harness Assemblies |
                                Programming
                            </h2>
                            <h2>Custom Electrical Testing Solutions</h2>
                        </div>
                    </div>
                    <nav className="ml-auto flex text-lg font-medium">
                        <Ref linkTo="/" name="Home" />
                        <Ref linkTo="about" name="About" />
                        <Ref linkTo="contact" name="Contact" />
                    </nav>
                </div>
            </div>
            <div className=" z-30 h-fit w-full lg:hidden">
                <div className="flex h-16 w-full  bg-white px-3 text-primary">
                    <div className=" items flex h-full w-full">
                        <Link to="/" className="flex">
                            <img src={logo} alt="logo" className="my-1 flex" />
                        </Link>
                        <div className="mx-1 my-auto">
                            <h1 className=" my-auto  text-lg font-medium text-primary">
                                Morton Automatic Electric
                            </h1>
                        </div>
                        <button className="ml-auto" onClick={expandMenu}>
                            Menu
                        </button>
                    </div>
                </div>
                <nav
                    className={`absolute ml-auto flex w-full border-spacing-4 flex-col items-end border-t border-primary bg-white text-sm ${display} py-2 font-medium text-primary`}
                >
                    <Ref linkTo="/" name="Home" />
                    <Ref linkTo="about" name="About" />
                    <Ref linkTo="contact" name="Contact" />
                </nav>
            </div>
        </div>
    )
}
