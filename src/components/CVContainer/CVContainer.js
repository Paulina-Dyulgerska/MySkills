import './CVContainer.css';

import globalConstants from '../../globalConstants/globalConstants';

import ExternalNavigationItem from '../Header/NavigationItem/ExternalNavigationItem';
import ExternalNavigationItemFileDownload from '../Header/NavigationItem/ExternalNavigationItemFileDownload';

const CVContainer = () => {
    const downloadUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/download/' + globalConstants.resumeFileName;
    const showUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/show/' + globalConstants.resumeFileName;

    return (
        <article className="link-buttons-container">
            <ExternalNavigationItemFileDownload
                className="btn btn-cta"
                path={downloadUrl}>
                Download CV
            </ExternalNavigationItemFileDownload>
            <ExternalNavigationItem
                className="btn btn-cta"
                path={showUrl}>
                Show CV
            </ExternalNavigationItem>
        </article>
    )
}

export default CVContainer;