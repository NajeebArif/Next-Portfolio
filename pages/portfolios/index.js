
import BaseLayout from '../components/layouts/BaseLayouts'
import axios from 'axios'

export default function Portfolios({ posts }) {
    const renderPosts = () => posts.map(post => <li key={post.id}>{post.title}</li>)
    return (
        <BaseLayout>
            <h1>I am portfolios page</h1>
            <ul>{renderPosts()}</ul>
        </BaseLayout >
    )
}

Portfolios.getInitialProps = async () => {
    let posts = [];
    try {
        const postData = await axios.get("https://jsonplaceholder.typicode.com/posts")
        posts = postData.data;
    } catch (e) {
        console.error(e);
    }

    return { posts: posts.slice(0, 10) }
}
