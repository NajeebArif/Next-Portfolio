import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from '@/actions/blogs';
import { toast } from 'react-toastify';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

export default withPageAuthRequired(function BlogEditor(){

    const router = useRouter();

    const [createBlog, { data: createdBlog, error, loading: blogLoading }] = useCreateBlog();

    const saveBlog = async data => {
        const createdBlog = await createBlog(data)
        router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
      }

    if (error) { toast.error(error.message); }

    return (
        <BaseLayout>
            <BasePage>
                <Editor onSave={saveBlog} header="Hello World" loading={blogLoading}/>
            </BasePage>
        </BaseLayout>
    )
})