import { useState } from 'react'
import image from '../images/DSC_4228.jpg'
import image2 from '../images/IMG_1793.jpg'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

export const ProjectCard = () => {
    const images = [image, image2]
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
        <div className="sp mx-10 mb-5 flex w-5/6 text-white">
            <div className=" h-fit w-1/2 max-lg:mb-2">
                <img
                    src={currentImage}
                    alt="picture"
                    className=" w-full rounded-md object-cover "
                />

                <div className=" flex justify-between">
                    <ChevronLeftIcon
                        className=" h-10 w-auto rounded-full border-2 border-primary text-primary hover:cursor-pointer"
                        onClick={moveLeft}
                    />
                    <ChevronRightIcon
                        className="h-10 w-auto rounded-full border-2 border-primary text-primary hover:cursor-pointer"
                        onClick={moveRight}
                    />
                </div>
            </div>
            <div className=" mx-1 flex w-1/2  flex-col justify-end">
                <h1 className="mb-3 flex h-3/4 items-center rounded-e-md bg-gradient-to-r from-primary to-white px-4 text-xl font-bold">
                    CAT Control Panel for Things
                </h1>
            </div>
        </div>
    )
}
