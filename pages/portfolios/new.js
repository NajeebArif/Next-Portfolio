import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function PortfolioNew({ user }) {

    const roleKey = process.env.AUTH0_NAMESPACE;
    const isAdmin = user[roleKey]?.includes('admin')

    const createPortfolio = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <BaseLayout >
            <BasePage header={isAdmin ? "Create Portfolio" : "You can not create portfolios!!"}>
                <Row>
                    <Col md="8">
                        {isAdmin && <PortfolioForm onSubmit={createPortfolio}/>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
})