import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Ref } from './Ref'

export const NavBar = () => {
    return (
        <div className="text-primary flex h-24  w-full bg-white px-10">
            <div className=" items flex h-full w-full">
                <Link to="/" className="flex">
                    <img src={logo} alt="logo" className="my-2" />
                </Link>
                <div className="mx-4 my-auto">
                    <h1 className=" text-primary  my-auto text-[28px] font-medium">
                        Morton Automatic Electric
                    </h1>
                    <div className=" flex flex-col items-center justify-center text-xs text-gray-500">
                        <h2>
                            Control Panels | Wire Harness Assemblies |
                            Programming
                        </h2>
                        <h2>Custom Electrical Testing Solutions</h2>
                    </div>
                </div>
                <nav className="ml-auto flex">
                    <Ref linkTo="about" name="About" />
                    <Ref linkTo="contact" name="Contact" />
                </nav>
            </div>
        </div>
    )
}
