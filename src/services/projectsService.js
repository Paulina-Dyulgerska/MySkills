import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactsURL = globalConstants.backendWebApiServerUrl + '/projects';
// const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';

export default baseService(contactsURL);