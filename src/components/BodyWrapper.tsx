import { PropsWithChildren } from 'react'

export const BodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="mx-16 flex max-w-6xl items-center max-lg:flex-col">
            {children}
        </div>
    )
}
