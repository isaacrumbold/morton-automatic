import logo from '../assets/logo.jpg'

export const NavBar = () => {
    return (
        <div className="flex h-24 w-full bg-white text-white">
            <div className="mx-6 flex h-full w-full">
                <img src={logo} alt="logo" className="my-2" />
            </div>
        </div>
    )
}
