

import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'

import { useUser } from '@auth0/nextjs-auth0';
import { Alert } from 'reactstrap';

export default function WithAuth({children}) {

    const { user, error, isLoading } = useUser();

    return (
        <BaseLayout>
            <BasePage>
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    error && <Alert color="danger">Error please try again</Alert>
                }
                {
                    user ? children : <AlertUser />
                }
            </BasePage>
        </BaseLayout >
    )
}

const AlertUser = () => {
    return (
        <Alert color="danger">
            You can not view this page. Please login to view this page.
        </Alert>
    )
}