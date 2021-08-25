
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import PortfolioApi from '../../libs/api/portfoliosApi'

export default function Portfolios({portfolios}) {

    // const { data, error, loading } = useGetData('/api/v1/posts');
    // const { data: portfolios, error, loading } = useGetPosts();
    // const { data, error, loading } = useSWR('/api/v1/posts', fetcher);

    const renderPortfolio = portfolios => portfolios.map(portfolio => <li key={portfolio._id} style={{ 'fontSize': '20px' }}>
        <Link href={`/portfolios/${portfolio._id}`}>
            <a>
                {portfolio.title}
            </a>
        </Link>
    </li>)

    return (
        <BaseLayout>
            <BasePage>
                
                {portfolios &&
                    <ul>
                        {renderPortfolio(portfolios)}
                    </ul>
                }
            </BasePage>
        </BaseLayout >
    )
}

export async function getStaticProps(){
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;
    return {
        props: {
            portfolios
        }
    }
}

