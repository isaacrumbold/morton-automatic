type BodyParaProps = {
    title: string
    body: string
}

export const BodyPara = ({ title, body }: BodyParaProps) => {
    return (
        <div className=" mx-3 my-7 flex w-3/4 min-w-mobile max-w-5xl flex-col px-3">
            <h1 className="mb-3 text-center text-2xl font-bold text-primary">
                {title}
            </h1>
            <p className="text-center text-lg text-gray-700">{body}</p>
        </div>
    )
}
