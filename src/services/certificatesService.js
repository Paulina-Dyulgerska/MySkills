import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactsURL = globalConstants.backendWebApiServerUrl + '/certificates';

export default baseService(contactsURL);
