import { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

type ProjectCardProps = {
    imgArray: string[]
    title: string
    description?: string
}

export const ExampleCard = ({
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
    return (
        <div className=" mb-8 flex flex-col items-center rounded-xl bg-white shadow-2xl max-lg:w-11/12 lg:w-5/6">
            <div className=" relative my-4 h-[512px] w-full max-w-2xl rounded-md bg-black max-lg:mt-0">
                <img
                    id="image"
                    src={currentImage}
                    alt="picture"
                    className="m-auto h-full rounded-md object-cover "
                />
                {imgArray.length > 1 && (
                    <div className="absolute bottom-0 mb-64 flex w-full justify-between">
                        <ChevronLeftIcon
                            className=" m-1 h-10 w-auto rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:text-white"
                            onClick={moveLeft}
                        />
                        <ChevronRightIcon
                            className="m-1 h-10 w-auto rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:text-white"
                            onClick={moveRight}
                        />
                    </div>
                )}
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
