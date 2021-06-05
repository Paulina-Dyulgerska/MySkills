import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const educationsURL = globalConstants.backendWebApiServerUrl + '/educations';

export default baseService(educationsURL);