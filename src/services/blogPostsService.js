import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const blogPostsURL = globalConstants.backendWebApiServerUrl + '/blogPosts';
export default baseService(blogPostsURL);
