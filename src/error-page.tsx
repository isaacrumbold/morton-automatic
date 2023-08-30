import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div
            id="error-page"
            className="flex h-full w-full flex-col items-center justify-center"
        >
            <p className=" mb-10 text-2xl">
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i>
                    {' '}
                    {(error as Error)?.message ||
                        (error as { statusText?: string })?.statusText}
                </i>{' '}
                : return to Home
            </p>
        </div>
    )
}
