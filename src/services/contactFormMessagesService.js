import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactFormMessagesURL = globalConstants.backendWebApiServerUrl + '/contactFormMessages';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';

export default baseService(contactFormMessagesURL, contentTypeFormUrlencoded);
