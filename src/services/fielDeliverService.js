import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

const fileDeliverURL = globalConstants.backendWebApiServerUrl + '/fileDeliver/download';
const contentTypeFormUrlencoded = 'application/pdf';

export default baseService(fileDeliverURL, contentTypeFormUrlencoded);