import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { ExampleCard } from './ExampleCard'

type ProjectSectionProps = {
    image: string
    title: string
    description: string
    link?: string // I will add in an extra link later
    alt: string
    flipped?: boolean
    examples: {
        exmpId: number
        exmpTitle: string
        exmpDescription: string
        exmpPictureArray: string[]
    }[]
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
        <div className="z-20 mb-16 flex h-fit w-full flex-col items-center max-lg:mb-24 ">
            <div
                className={` flex h-fit min-h-[340px] w-full max-w-6xl items-center max-lg:flex-col  ${flipRow} max-lg:items-center`}
            >
                <div className="min-w-mobil m-4 rounded-md max-lg:w-11/12 lg:w-1/2">
                    <img
                        src={image}
                        alt={alt}
                        className="m-auto max-h-[500px] min-h-[300px] rounded-md object-cover max-lg:max-h-[400px]"
                    />
                </div>
                <div className="mx-6 my-8 flex w-full min-w-mobile flex-col justify-center overflow-hidden max-lg:my-4 max-lg:w-11/12 lg:w-1/2">
                    <h1 className="mb-3 text-2xl font-bold text-primary">
                        {title}
                    </h1>
                    <p className=" text-gray-700">{description}</p>
                    {examples.length !== 0 && (
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
                    )}
                </div>
            </div>
            {examples.length !== 0 && (
                <div
                    className={` mx-2 flex h-fit max-w-6xl animate-fadeIn flex-col items-center border-primary bg-slate-200 py-6 max-lg:w-full lg:w-11/12 lg:border-l-4 ${isOpen.css} `}
                >
                    {examples?.map((ex) => {
                        const imagePathArr = ex.exmpPictureArray.map((pic) => {
                            return `/portfolioImages/${ex.exmpId}/${pic}`
                        })

                        return (
                            <ExampleCard
                                key={ex.exmpId}
                                imgArray={imagePathArr}
                                title={ex.exmpTitle}
                                description={ex.exmpDescription}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
