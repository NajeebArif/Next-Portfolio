import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Editor } from 'slate-simple-editor';

const BlogEditor = () => {

    const saveBlog = (data) => {
        console.log(data);
    }

    return (
        <BaseLayout>
            <BasePage>
                <Editor onSave={saveBlog} header="Hello World"/>
            </BasePage>
        </BaseLayout>
    )
}

export default BlogEditor;