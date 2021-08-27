

import BlogApi from '@/libs/api/blogs';

import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function createBlog(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res, {
            scopes: ['create:portfolios']
        });
        const json = await new BlogApi(accessToken).create(req.body);
        return res.json(json.data);
    } catch (e) {
        return res.status(e.status || 422).json(e.response.data);
    }
})