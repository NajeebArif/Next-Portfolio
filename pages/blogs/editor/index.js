import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from '@/actions/blogs';
import { toast } from 'react-toastify';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function BlogEditor(){

    const [createBlog, { data: createdBlog, error }] = useCreateBlog();

    const saveBlog = async (data) => {
        await createBlog(data)
        alert('Blog was created!')
    }

    if (error) { toast.error(error.message); }

    return (
        <BaseLayout>
            <BasePage>
                <Editor onSave={saveBlog} header="Hello World" />
            </BasePage>
        </BaseLayout>
    )
})