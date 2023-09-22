import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { ProjectCard } from './ProjectCard'

type ProjectSectionProps = {
    image: string
    title: string
    description: string
    link?: string // I will add in an extra link later
    alt: string
    flipped?: boolean
}

type IsOpenType = {
    open: boolean
    css: 'hidden' | 'block'
}

export const ProjectSection = ({
    image,
    title,
    description,
    alt,
    flipped = false,
}: ProjectSectionProps) => {
    const [isOpen, setIsOpen] = useState<IsOpenType>({
        open: false,
        css: 'hidden',
    })
    const flipRow = flipped ? 'flex-row-reverse' : 'flex-row'

    const toggleOpen = () => {
        isOpen.open
            ? setIsOpen({ open: false, css: 'hidden' })
            : setIsOpen({ open: true, css: 'block' })
    }
    return (
        <div className="z-20 mb-16 flex h-fit flex-col items-center max-lg:mb-24">
            <div
                className={` flex w-full max-w-6xl max-lg:flex-col ${flipRow}  max-lg:items-center`}
            >
                <div className="m-4 mb-6 h-fit min-w-mobile max-lg:mx-5 max-lg:mb-2 max-lg:w-auto lg:w-1/2">
                    <img
                        src={image}
                        alt={alt}
                        className=" w-full rounded-md object-cover"
                    />
                </div>
                <div className="mx-6 my-8 flex min-w-mobile flex-col justify-center overflow-hidden max-lg:my-4 max-lg:w-auto lg:w-1/2">
                    <h1 className="mb-3 text-2xl font-bold text-primary">
                        {title}
                    </h1>
                    <p className=" text-gray-700">{description}</p>
                    <button
                        className={`group mt-6 w-36 rounded-md border-2 border-primary py-1 text-lg text-primary transition-all duration-500  hover:w-44 hover:cursor-pointer hover:bg-primary hover:text-white ${
                            isOpen.open ? 'w-44 bg-primary text-white' : ''
                        }`}
                        onClick={toggleOpen}
                    >
                        Examples
                        <ChevronRightIcon
                            className={`ml-2 inline-block h-5 text-primary  transition-all  duration-300   ${
                                isOpen.open
                                    ? 'rotate-90 text-white'
                                    : 'opacity-0 delay-200 group-hover:text-white group-hover:opacity-100'
                            }`}
                        />
                    </button>
                </div>
            </div>
            <div
                className={`flex h-fit w-11/12 max-w-6xl flex-col justify-center border-l-4 border-primary ${isOpen.css} `}
            >
                {/* option 1 */}
                <ProjectCard />
                {/* option 2 */}
                <div className=" mx-10 flex w-5/6 text-primary">
                    <div className=" h-fit w-1/2 max-lg:mb-2">
                        <img
                            src={image}
                            alt={alt}
                            className=" w-full rounded-md object-cover"
                        />
                    </div>
                    <div className=" mx-1 flex w-1/2  flex-col justify-end">
                        <h1 className="mb-3 flex h-3/4 items-center rounded-e-3xl border-y-4 border-r-4 border-primary px-4 text-xl font-bold">
                            CAT Control Panel for Things
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
