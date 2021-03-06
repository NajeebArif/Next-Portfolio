
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import { useRouter } from 'next/router';
import PortfolioApi from '../../libs/api/portfoliosApi'
import { Row, Col, Button } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import { useDeletePortfolio } from '@/actions/portfolios';
import { useState } from 'react';

export default function Portfolios({ portfolios: initialPortfolios }) {

    const router = useRouter()
    const [portfolios, setPortfolios] = useState(initialPortfolios);
    const [deletePortfolio, { data, error }] = useDeletePortfolio();
    const _deletePortfolio = async (e, portfolioId) => {
        e.stopPropagation();
        const isConfirm = confirm('Are you sure you want to delete this portfolio?');
        if (isConfirm) {
            await deletePortfolio(portfolioId);
            setPortfolios(portfolios.filter(p => p._id !== portfolioId));
        }
    }

    return (
        <BaseLayout>
            <BasePage header={<PortoliosHeader />} className="portfolio-page">
                <Row>
                    {portfolios.map(portfolio =>
                        <Col
                            key={portfolio._id}
                            onClick={() => {
                                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
                            }}
                            md="4">
                            <PortfolioCard portfolio={portfolio} >
                                <>
                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                                        }}
                                        className="mr-2"
                                        color="warning">Edit</Button>
                                    <Button color="danger" onClick={(e) => _deletePortfolio(e, portfolio._id)}>Delete</Button>
                                </>
                            </PortfolioCard>
                        </Col>
                    )
                    }
                </Row>
            </BasePage>
        </BaseLayout >
    )
}

const PortoliosHeader = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <>
                <span className="mr-5">Protfolios</span>
                <span className="ml-5">
                    <Link href="/portfolios/new">
                        <button className="btn btn-primary">Create</button>
                    </Link>
                </span>
            </>
        )
    } else {
        return "Portfolio"
    }


}

export async function getStaticProps() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;
    return {
        props: {
            portfolios
        }
    }
}

