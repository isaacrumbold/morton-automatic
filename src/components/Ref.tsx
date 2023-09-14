import { Link } from 'react-router-dom'

type RefProps = {
    linkTo: string
    name: string
    closeMenu?: () => void
}
export const Ref = ({ linkTo, name, closeMenu }: RefProps) => {
    return (
        <Link
            className=" mx-2 my-1 flex h-full items-center border-b-4 border-white text-lg transition duration-500 hover:border-primary"
            to={linkTo}
            onClick={closeMenu}
        >
            {name}
        </Link>
    )
}
