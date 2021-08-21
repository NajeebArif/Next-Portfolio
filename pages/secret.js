

import React from 'react'
import WithAuth from '../components/WithAuth';

export default function Secret() {

    return (
        <WithAuth>
            <SecretContent />
        </WithAuth>
    )
}

const SecretContent = () => {
    return <h1>I am Secret page</h1>
}
