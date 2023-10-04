import { PropsWithChildren } from 'react'

export const BodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="z-20 mx-16 flex w-full max-w-6xl max-lg:flex-col max-lg:items-center">
            {children}
        </div>
    )
}
