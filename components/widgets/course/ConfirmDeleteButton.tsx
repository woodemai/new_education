'use client'
import { Button } from "@/components/shared/button";
import { memo } from "react";

interface Props {
    handleRemove: () => void
    deleteText: string
}

const ConfirmDeleteButton = memo(function DeleteForm({ handleRemove, deleteText }: Props) {

    const onClick = () => {
        handleRemove()
    }

    return <Button variant="destructive" onClick={onClick}>{deleteText}</Button>
})

export default ConfirmDeleteButton;