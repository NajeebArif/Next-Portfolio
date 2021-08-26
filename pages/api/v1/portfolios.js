
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import PortfolioApi from '@/libs/api/portfoliosApi';

export default withApiAuthRequired(async function createPortfolio(req, res) {
    const { accessToken } = await getAccessToken(req, res, {
        scopes: ['create:portfolios']
    });
    try {
        const data = req.body;
        await new PortfolioApi(accessToken).createPortfolio(data);
        return res.json({ message: 'Portfolio was created!' });
    } catch (e) {
        return res.status(e.status || 400).end(e.message);
    }
})