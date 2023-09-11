import { BodyWrapper } from './BodyWrapper'
import { Lines } from './Lines'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { FooterLink } from './FooterLink'

export const Footer = () => {
    return (
        // why am i needing the px-10 to make it work?
        <div className="flex  w-full flex-col items-center bg-primary px-10">
            {/* <div className="absolute flex h-full w-full justify-center bg-transparent">
                <Lines />
            </div> */}
            <div className="flex w-full">
                <img src={logo} alt="maeco logo" width={80} />
                <div className="flex h-full w-fit flex-col text-white">
                    <h1 className="text-bold text-lg">Quick Links</h1>
                    <div className="flex h-full w-full justify-center">
                        <div className="flex flex-col">
                            <FooterLink linkTo="/" name="Home" />
                            <FooterLink linkTo="about" name="About" />
                            <FooterLink linkTo="contact" name="Contact" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
