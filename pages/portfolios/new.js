import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Row, Col, Alert } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useCreatePortfolio } from '@/actions/portfolios';
import { useRouter } from 'next/router'


export default withPageAuthRequired(function PortfolioNew({ user }) {

    const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

    const roleKey = process.env.AUTH0_NAMESPACE;
    const isAdmin = user[roleKey]?.includes('admin')
    const router = useRouter();

    const _createPortfolio = (data) => {
        createPortfolio(data)
    }

    if (data) {
         router.push('/portfolios')
    }
    if (error) {
        return <Error msg={error} color="danger" />
    }

    return (
        <BaseLayout >
            <BasePage header={isAdmin ? "Create Portfolio" : "You can not create portfolios!!"}>
                <Row>
                    <Col md="8">
                        {isAdmin && <PortfolioForm onSubmit={_createPortfolio} />}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
})

const Error = ({ msg,color }) => {
    return (
        <BaseLayout >
            <BasePage header="Error Creating Portfolio">
                <Row>
                    <Col md="8">
                        <Alert color={color}>{msg}</Alert>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}