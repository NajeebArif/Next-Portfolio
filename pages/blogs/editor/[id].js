

import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useGetBlog, useUpdateBlog } from '@/actions/blogs';
import { useRouter } from 'next/router';


export default withPageAuthRequired(function BlogUpdateEditor() {

    const router = useRouter();
    const { data } = useGetBlog(router.query.id);
    const [updateBlog, { error, loading: isBlogSaving }] = useUpdateBlog();

    const _updateBlog = async data => {
        await updateBlog(router.query.id, data);
        toast.success('Blog updated!')
    }

    if (error) {
        toast.error(error)
    }

    return (
        <BaseLayout>
            <BasePage>
                {data && data.content &&
                    <Editor
                        header="Update Your Blog..."
                        initialContent={data.content}
                        onSave={_updateBlog}
                        loading={isBlogSaving}
                    />
                }
            </BasePage>
        </BaseLayout>
    )
})