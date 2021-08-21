
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import { useRouter } from 'next/router'
import { useGetPostsById } from '@/actions'


const Portfolio = () => {

    const router = useRouter();
    // const { data: portfolio, error, loading } = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
    const { data: portfolio, error, loading } = useGetPostsById(router.query.id);
    return (
        <BaseLayout>
            <BasePage>
                {loading && <p>Loading Data...</p>}
                {error && <div className="alert alert-danger">{error.message}</div>}
                {portfolio &&
                    <>
                        <h1>I am Portfolio page</h1>
                        <h1>{portfolio.title}</h1>
                        <p>BODY: {portfolio.body}</p>
                        <p>ID: {portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio;
