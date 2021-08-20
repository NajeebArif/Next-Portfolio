
import BaseLayout from '../../components/layouts/BaseLayouts'
import BasePage from '../../components/BasePage'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useGetData } from '../../actions'

export default function Portfolios() {

    const { posts: data, error, loading } = useGetData('/api/v1/posts');

    const renderPosts = () => data.map(post => <li key={post.id} style={{ 'fontSize': '20px' }}>
        <Link href={`/portfolios/${post.id}`}>
            <a>
                {post.title}
            </a>
        </Link>
    </li>)

    return (
        <BaseLayout>
            <BasePage>
                <h1>I am portfolios page</h1>
                {loading &&
                    <p>Loading data...</p>
                }
                {data &&
                    <ul>
                        {renderPosts(data)}
                    </ul>
                }
                {error &&
                    <div className="alert alert-danger">{error.message}</div>
                }
            </BasePage>
        </BaseLayout >
    )
}

