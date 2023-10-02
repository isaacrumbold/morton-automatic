import { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

type ProjectCardProps = {
    imgArray: string[]
    title: string
    description?: string
}

export const ProjectCard = ({
    imgArray,
    title,
    description,
}: ProjectCardProps) => {
    const images = imgArray
    const [currentImage, setCurrentImage] = useState(images[0])

    const moveLeft = () => {
        const currentIndex = images.indexOf(currentImage)
        if (currentIndex === 0) {
            setCurrentImage(images[images.length - 1])
        } else {
            setCurrentImage(images[currentIndex - 1])
        }
    }

    const moveRight = () => {
        const currentIndex = images.indexOf(currentImage)
        if (currentIndex === images.length - 1) {
            setCurrentImage(images[0])
        } else {
            setCurrentImage(images[currentIndex + 1])
        }
    }

    // TODO: Add in ability to fadeIn image when it is changed
    // Needs consistent image sizes
    // user should be able enlarge image
    return (
        <div className="bg-whit mb-8 flex w-5/6 flex-col items-center rounded-xl  bg-white py-4 shadow-2xl">
            <div className=" relative w-5/6 max-w-2xl ">
                <img
                    id="image"
                    src={currentImage}
                    alt="picture"
                    className="  h-full w-full rounded-md object-cover"
                />
                <div className="absolute bottom-0 flex w-full justify-between">
                    <ChevronLeftIcon
                        className=" m-1 h-10 w-auto rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:text-white"
                        onClick={moveLeft}
                    />
                    <ChevronRightIcon
                        className="m-1 h-10 w-auto rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:text-white"
                        onClick={moveRight}
                    />
                </div>
            </div>
            <div className=" mx-8 my-4 w-5/6">
                <h1 className=" mb-3 text-xl font-semibold text-primary">
                    {title}
                </h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
