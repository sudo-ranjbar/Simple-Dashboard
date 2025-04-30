"use client"

import { Button } from "flowbite-react"

export default function SubmitButton({ title, isPending, style }) {

    return (
        <Button type="submit" disabled={isPending} className={style}>
            {title}
            {isPending && <span>pending...</span>}
        </Button>
    )
}