import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const experiencesURL = globalConstants.backendWebApiServerUrl + '/experiences';

export default baseService(experiencesURL);