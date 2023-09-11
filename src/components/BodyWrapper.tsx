import { PropsWithChildren } from 'react'

export const BodyWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full bg-white">
            <div className="mx-16 flex max-w-6xl max-lg:flex-col">
                {children}
            </div>
        </div>
    )
}
