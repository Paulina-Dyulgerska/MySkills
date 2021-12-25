import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const blogPostsURL = globalConstants.backendWebApiServerUrl + '/blogPosts';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';
// const contentTypeFormMultipart = 'multipart/form-data';
// const contentTypeFormUrlencoded = 'application/json';

const blogPostsService = function () { }

blogPostsService.get = async function (id) {
    return await baseService(blogPostsURL).get(id);
};

blogPostsService.post = async function (data) {
    return baseService(blogPostsURL).post(data);
};

blogPostsService.put = async function (data) {
    return baseService(blogPostsURL).put(data);
};

blogPostsService.patch = async function (data) {
    return baseService(blogPostsURL).patch(data);
};

blogPostsService.del = async function (id) {
    return baseService(blogPostsURL).del(id);
};

blogPostsService.patchLikes = async function (data) {
    const result = await baseService(`${blogPostsURL}/likes`, contentTypeFormUrlencoded)
        .patch(data)
    return result;
};

blogPostsService.patchComments = async function (data) {
    const result = await baseService(`${blogPostsURL}/comments`, contentTypeFormUrlencoded)
        .post(data);
    return result;
};

blogPostsService.addComment = async function (data) {
    const result = await baseService(`${blogPostsURL}/comments/add/${data.blogPostId}`, contentTypeFormUrlencoded)
        .post(data);
    return result;
};

blogPostsService.addCommentLike = async function (data) {
    const result = await baseService(`${blogPostsURL}/comments/like/${data.blogPostId}`, contentTypeFormUrlencoded)
        .post(data);
    return result;
}

export default blogPostsService;
