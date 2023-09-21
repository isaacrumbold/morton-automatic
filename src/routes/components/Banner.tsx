type BannerProps = {
    title1: string
    title2?: string
    subtitle: string
    image: string
    top: number
    alt: string
    imageClass?: string
}

export const Banner = ({
    title1,
    title2,
    subtitle,
    image,
    top,
    alt,
    imageClass,
}: BannerProps) => {
    return (
        <div className="absolute z-20 flex h-[1000px] w-full -translate-y-52 overflow-hidden">
            <img
                src={image}
                alt={alt}
                className={`w-full object-cover ${imageClass}`}
            />
            <div
                className={`absolute top-[${top}px] flex h-fit w-full flex-col bg-transparent  text-center  text-white`}
            >
                <h1 className=" text-5xl font-medium leading-tight">
                    {title1}
                    {title2 && <br />}
                    {title2}
                </h1>
                <h2 className="text-4xl font-light leading-tight">
                    {subtitle}
                </h2>
            </div>

            <div className=" absolute bottom-0 flex h-96 w-full translate-y-44 skew-y-2 items-center justify-center bg-white"></div>
        </div>
    )
}
