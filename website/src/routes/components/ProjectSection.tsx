import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import im1 from '../images/project_images_1/DSC_4228.jpg'
import im2 from '../images/project_images_1/IMG_1793.jpg'

type ProjectSectionProps = {
    image: string
    title: string
    description: string
    link?: string // I will add in an extra link later
    alt: string
    flipped?: boolean
    examples?: {
        exmpId: number
        exmpTitle: string
        exmpDescription: string
        exmpPicsPath: string
    }[]
}

type IsOpenType = {
    open: boolean
    css: 'hidden' | 'block'
}

const testImages = [im1, im2]

export const ProjectSection = ({
    image,
    title,
    description,
    alt,
    flipped = false,
    examples,
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
                className={`flex h-fit max-w-6xl animate-fadeIn flex-col items-center border-primary bg-slate-100 py-6 lg:w-11/12 lg:border-l-4 ${isOpen.css} `}
            >
                {examples?.map((ex) => {
                    return (
                        <ProjectCard
                            key={ex.exmpId}
                            imgArray={testImages}
                            title={ex.exmpTitle}
                            description={ex.exmpDescription}
                        />
                    )
                })}
            </div>
        </div>
    )
}
