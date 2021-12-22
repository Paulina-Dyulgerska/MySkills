import './CVContainer.css';

import globalConstants from '../../globalConstants/globalConstants';

import ExternalNavigationItemFileDownload from '../Header/NavigationItem/ExternalNavigationItemFileDownload';
import ExternalNavigationItemAsSpan from '../Header/NavigationItem/ExternalNavigationItemAsSpan';

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
            <ExternalNavigationItemAsSpan
                className="btn btn-cta"
                path={showUrl}>
                Show CV
            </ExternalNavigationItemAsSpan>
        </article>
    )
}

export default CVContainer;