import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactsURL = globalConstants.backendWebApiServerUrl + '/contacts';
// const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';

export default baseService(contactsURL);
