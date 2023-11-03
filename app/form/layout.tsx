"use client"
import React from 'react'
import Page from '../page'
import { useRouter } from 'next/navigation'


const layout = ({ children }: { children: React.ReactNode }) => {
    const isAuth = false;
    const router = useRouter();
    return (
        <>
            {isAuth ?
                <>
                    { router.push('/')}
                </>
                : <>

                    

                    <div className='grid xl:grid-cols-2 gap-0 grid-cols-1'>
                        <section className=' x:h-screen flex flex-col items-center justify-center'>{children}</section>
                        <img src="/images/side-img.svg" alt='side image'
                            className='hidden xl:block object-cover h-screen w-full  bg-no-repeat' />
                    </div>
                    



                </>

            }
        </>

    )
}

export default layout