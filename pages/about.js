

import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import useSWR from 'swr'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default withPageAuthRequired(function About() {
    return (
        <BaseLayout>
            <BasePage>
                <AboutData />
            </BasePage>
        </BaseLayout >
    )
});

const fetcher = async (uri) =>{
    const res = await fetch(uri);
    return res.json();
}

const AboutData = () =>{
    const {data, error} = useSWR('api/v1/protected',fetcher);
    return (
        <>
            {
                error && <div>oops... {error.message}</div>
            }
            {
                !data ? <p>Loading...</p> :
                <>
                    <h1>I am about page</h1>
                    <p>Welcome {data.email} . This is your protect message{data.protected}</p>
                </> 
            }
        </>
    )
}
