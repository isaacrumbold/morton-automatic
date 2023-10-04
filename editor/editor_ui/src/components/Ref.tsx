import { Link } from 'react-router-dom'

type RefProps = {
    linkTo: string
    name: string
    closeMenu?: () => void
}
export const Ref = ({ linkTo, name, closeMenu }: RefProps) => {
    return (
        <Link
            className=" mx-2 flex h-full items-center border-b-4 border-white text-lg transition duration-500 hover:border-primary max-lg:my-1"
            to={linkTo}
            onClick={closeMenu}
        >
            {name}
        </Link>
    )
}
