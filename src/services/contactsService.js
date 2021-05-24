import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

// const contactsURL = 'https://localhost:44319/api/contacts';
// const contactsURL = 'http://www.dotnetweb.net/api/contacts';
const contactsURL = globalConstants.backendWebApiServerUrl + '/contacts';

export default baseService(contactsURL);