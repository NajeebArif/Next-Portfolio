

import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { useGetPortfolio } from '@/actions/portfolios';
import PortfolioForm from '@/components/PortfolioForm';
import { Row, Col } from 'reactstrap';
import { useUpdatePortfolio } from '@/actions/portfolios';
import { toast } from 'react-toastify';

export default withPageAuthRequired(function PortfolioEdit({ user }) {
    const router = useRouter();
    const id = router.query.id;  
    const [ updatePortfolio, {error}] = useUpdatePortfolio();
    const { data: initialData } = useGetPortfolio(router.query.id);

    const _updatePortfolio = async (data) => {
        await updatePortfolio(router.query.id, data);
        toast.success('Portfolio has been updated!', {autoClose: 2000})
    }
    return (
        <BaseLayout >
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initialData &&
                            <PortfolioForm
                                onSubmit={_updatePortfolio}
                                initialData={initialData}
                            />
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
})
