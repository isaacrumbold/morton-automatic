import { PropsWithChildren } from 'react'

export const BodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="mx-16 flex max-w-6xl max-lg:flex-col max-lg:items-center">
            {children}
        </div>
    )
}
