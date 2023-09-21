import { ChevronRightIcon } from '@heroicons/react/24/solid'

type ProjectSectionProps = {
    image: string
    title: string
    description: string
    link?: string // I will add in an extra link later
    alt: string
    flipped?: boolean
}

export const ProjectSection = ({
    image,
    title,
    description,
    alt,
    flipped = false,
}: ProjectSectionProps) => {
    const flipRow = flipped ? 'flex-row-reverse' : 'flex-row'
    return (
        <>
            <div
                className={`z-20 flex w-full max-w-6xl max-lg:flex-col ${flipRow} mb-16 max-lg:mb-24 max-lg:items-center`}
            >
                <div className="m-4 mb-6 h-fit min-w-mobile max-lg:mb-2 max-lg:w-4/6 lg:w-1/2">
                    <img
                        src={image}
                        alt={alt}
                        className=" w-full rounded-md object-cover"
                    />
                </div>
                <div className="mx-4 my-8 flex min-w-mobile flex-col justify-center overflow-hidden max-lg:my-4 max-lg:w-4/6 lg:w-1/2">
                    <h1 className="mb-3 text-2xl font-bold text-primary">
                        {title}
                    </h1>
                    <p className=" text-gray-700">{description}</p>
                    <button
                        className=" group mt-6 w-36 rounded-md border-2 border-primary py-1 text-lg text-primary transition-all duration-500  hover:w-44 hover:cursor-pointer hover:bg-primary hover:text-white"
                        disabled={true}
                    >
                        Learn more
                        <ChevronRightIcon className="ml-2 inline-block h-5 text-primary opacity-0 transition-all delay-200  duration-300 group-hover:text-white group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </>
    )
}
