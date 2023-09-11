import { Link } from 'react-router-dom'

type FooterLinkProps = {
    linkTo: string
    name: string
}

export const FooterLink = ({ linkTo, name }: FooterLinkProps) => {
    return (
        <Link className="text-white hover:underline" to={linkTo}>
            {name}
        </Link>
    )
}
