'use client'

import { useSession } from "next-auth/react";
import styles from '../../../styles/profile.module.css'
import ComponentLoad from "@/components/loading/ComponentLoad";
import Image from "next/image";

const Profile = () => {


    const { status, data } = useSession()
    const { email, image, name } = data?.user ?? {};


    return (
        <>
            {status === 'loading' && <ComponentLoad />}
            {status === 'unauthenticated' && <ComponentLoad />}
            {status === 'authenticated' && email && image && name && (
                <div className={styles.profile}>
                    <Image src={image} alt={'avatar'} width={200} height={200} />
                    <p>{name}</p>
                    <a className={styles.email} href={`mailto: ${email}`}>{email}</a>
                </div>
            )}
        </>
    )
}

export default Profile;