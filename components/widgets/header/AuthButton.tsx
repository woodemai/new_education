'use client'

import { Button } from "@/components/shared/button";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props {
    login?: string,
    logout?: string
}

const AuthButton = ({ login = 'Login', logout = 'Logout' }: Props) => {

    const { status } = useSession()

    return (
        <li>
            {status === 'authenticated'
                ? <Button type={'button'} onClick={() => signOut()}>{logout}</Button>
                : <Button type={'button'} onClick={() => signIn()}>{login}</Button>
            }
        </li>
    )
}

export default AuthButton;