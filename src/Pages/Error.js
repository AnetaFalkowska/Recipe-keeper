import {useRouteError} from "react-router-dom"

export default function ErrorPage() {

const error = useRouteError()

let title = "Something went wrong!"

if (error.status === 500) {
    title = error.message
}

    return <><p>{title}!</p><p>{error.message}</p></>
}
