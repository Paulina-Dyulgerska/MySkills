import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const contactsURL = globalConstants.backendWebApiServerUrl + '/projects';

export default baseService(contactsURL);