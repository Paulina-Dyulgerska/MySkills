import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactsURL = globalConstants.backendWebApiServerUrl + '/contacts';

export default baseService(contactsURL);