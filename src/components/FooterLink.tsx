import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

type FooterLinkProps = {
    linkTo: string
    name: string
}

export const FooterLink = ({ linkTo, name }: FooterLinkProps) => {
    return (
        <Link
            className="flex items-center text-white hover:underline"
            to={linkTo}
        >
            {name}
            <ChevronRightIcon className="ml-1 h-3" />
        </Link>
    )
}
