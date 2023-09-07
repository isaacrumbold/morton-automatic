import { Lines } from './Lines'

export const Footer = () => {
    return (
        // why am i needing the px-10 to make it work?
        <div className="flex h-52 w-full flex-col items-center bg-primary px-10">
            <Lines />
        </div>
    )
}
