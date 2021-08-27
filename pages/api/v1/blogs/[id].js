


import BlogApi from '@/libs/api/blogs';
// import auth0 from '@/utils/auth0';

export default async function handleBlog(req, res) {
  if (req.method === 'GET') {
    const json = await new BlogApi().getById(req.query.id);
    return res.json(json.data);
  }
}