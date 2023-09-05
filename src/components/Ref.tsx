import { Link } from 'react-router-dom'

type RefProps = {
    linkTo: string
    name: string
}
export const Ref = ({ linkTo, name }: RefProps) => {
    return (
        <Link
            className=" hover:border-primary mx-2 flex h-full items-center border-b-4 border-white text-lg font-medium transition duration-500"
            to={linkTo}
        >
            {name}
        </Link>
    )
}
