

import BaseLayout from '@/components/layouts/BaseLayouts';
import BasePage from '@/components/BasePage';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(function BlogUpdateEditor(){


    return (
        <BaseLayout>
            <BasePage>
                <Editor onSave={()=>{}} header="Update your blog"/>
            </BasePage>
        </BaseLayout>
    )
})