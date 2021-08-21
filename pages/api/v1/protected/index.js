

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";


export default withApiAuthRequired(async function myProtectedApi(req, res){
    const {user} = getSession(req, res);
    res.json({
        protected: 'My Secret Message',
        email: user.email
    })
})