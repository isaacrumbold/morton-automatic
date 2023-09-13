import { ReactElement } from 'react'

type ContactCardProps = {
    title: string
    href: string
    hrefTitle: string
    hrefTitle2?: string
    icon: ReactElement
}

export const ContactCard = ({
    title,
    href,
    hrefTitle,
    hrefTitle2,
    icon,
}: ContactCardProps) => {
    return (
        <div className=" z-30 flex items-center">
            {icon}
            <div>
                <h1 className="text-2xl font-semibold text-primary">{title}</h1>
                <a
                    href={href}
                    className="flex items-center text-lg text-gray-700 hover:underline"
                >
                    {hrefTitle} <br />
                    {hrefTitle2}
                </a>
            </div>
        </div>
    )
}
