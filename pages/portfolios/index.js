
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import PortfolioApi from '../../libs/api/portfoliosApi'
import { Row, Col } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';

export default function Portfolios({ portfolios }) {


    return (
        <BaseLayout>
            <BasePage header="Portfolios" className="portfolio-page">
                <Row>
                    {portfolios.map(portfolio =>
                        <Col key={portfolio._id} md="4">
                            <PortfolioCard portfolio={portfolio} />
                        </Col>
                    )
                    }
                </Row>
            </BasePage>
        </BaseLayout >
    )
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

