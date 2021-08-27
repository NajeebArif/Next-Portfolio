

import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Blogs({ user, serverMsg }) {
    return (
        <BaseLayout>
            <BasePage>
                <BlogsContent user={user} msg={serverMsg}/>
            </BasePage>
        </BaseLayout >
    )
}

const BlogsContent = ({ user, msg }) => {
    //process.env can only be accessed in node environment. not in browser
    const roleKey = process.env.AUTH0_NAMESPACE;
    console.log(roleKey)
    const isAdmin = user['https://example.com/roles']?.includes('admin')
    return (
        <>
            <h1>I am blogs page {user.email}</h1>
            {
                msg && <>
                    <h3>You have one message:</h3>
                    <p>{msg}</p>
                </>
            }
            {
                (user && isAdmin) && 
                <>
                    <h3>ADMIN CONTENT IS FOR ADMINS ONLY.</h3>
                </>
            }

        </>
    )
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async (ctx) => {
        const msg = await getLatestMsg();
        return {
            props: {
                serverMsg: msg
            }
        }
    }
});

const getLatestMsg = () => {
    return new Promise((res) => {
        const time = new Date().toISOString();
        setTimeout(() => {
            res(`My Latest server message at: ${time}!`)
        }, 500)
    })
}
