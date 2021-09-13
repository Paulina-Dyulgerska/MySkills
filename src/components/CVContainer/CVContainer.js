import './CVContainer.css';

import globalConstants from '../../globalConstants/globalConstants';

import ExternalNavigationItem from '../Header/NavigationItem/ExternalNavigationItem';
import ExternalNavigationItemFileDownload from '../Header/NavigationItem/ExternalNavigationItemFileDownload';

const CVContainer = () => {
    var downloadUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/download/CV_EN.pdf'
    var showUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/show/CV_EN.pdf'

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