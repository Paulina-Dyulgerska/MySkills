import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const blogPostsURL = globalConstants.backendWebApiServerUrl + '/blogPosts';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';
// const contentTypeFormMultipart = 'multipart/form-data';

const blogPostsService2 = function () { }

blogPostsService2.patchLikes = async function (data) {
    const result = await baseService(`${blogPostsURL}/likes`, contentTypeFormUrlencoded)
        .patch(data)
    return result;
};

blogPostsService2.patchComments = async function (data) {
    const result = await baseService(`${blogPostsURL}/comments`, contentTypeFormUrlencoded)
        .post(data);
    return result;
};

export default  blogPostsService2;