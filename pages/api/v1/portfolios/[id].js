

import PortfolioApi from '@/libs/api/portfoliosApi';

import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handlePortfolio(req, res) {
  if (req.method === 'GET') {
    const json = await new PortfolioApi().getById(req.query.id);
    return res.json(json.data);
  }

  if (req.method === 'PATCH') {
    try{
      const { accessToken } = await getAccessToken(req, res, {
        scopes: ['create:portfolios']
      });
      const json = await new PortfolioApi(accessToken).update(req.query.id, req.body);
      return res.json(json.data);
    }catch(e) {
      return res.status(e.status || 422).json(e.response.data);
    }
    
  }
})