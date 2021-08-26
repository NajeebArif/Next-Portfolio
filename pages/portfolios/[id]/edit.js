

import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { useGetPortfolio } from '@/actions/portfolios';
import PortfolioForm from '@/components/PortfolioForm';
import { Row, Col } from 'reactstrap';

export default withPageAuthRequired(function PortfolioEdit({ user }){
    const router = useRouter();
    const id = router.query.id;
    console.log(id)
    const { data } = useGetPortfolio(id);
    return (
        <BaseLayout >
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {data &&
                            <PortfolioForm
                                onSubmit={(data => alert(JSON.stringify(data)))}
                                initialData={data}
                            />
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
})
