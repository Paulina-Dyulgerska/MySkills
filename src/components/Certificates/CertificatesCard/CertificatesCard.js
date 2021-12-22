import './CertificatesCard.css';

import ExternalNavigationItemFileDownload from '../../Header/NavigationItem/ExternalNavigationItemFileDownload';

const CertificatesCard = ({
    id,
    fileName,
    fileExtension,
    remoteFileUrl,
    imageRemoteFileUrl,
    onClickTogglePopup,
}) => {

    return (
        <article className="certificate-item" >
            <article className="media-top">
                <h2 className="title">{fileName}</h2>
                <ExternalNavigationItemFileDownload
                    className="btn btn-cta"
                    path={remoteFileUrl}
                    download>
                    Download Certificate
                </ExternalNavigationItemFileDownload>
            </article>
            <article className="media-content" onClick={onClickTogglePopup}>
                <img
                    className="image-fluid"
                    src={imageRemoteFileUrl}
                    alt="Certificate item"
                />
            </article>
        </article>
    )
}

export default CertificatesCard;