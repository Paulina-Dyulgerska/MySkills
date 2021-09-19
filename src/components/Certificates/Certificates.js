import { useState, useEffect } from 'react';

import './Certificates.css';

import certificatesService from '../../services/certificatesService';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import CertificatesCard from './CertificatesCard/CertificatesCard';
import LoadingBar from '../Shared/LoadingBar/LoadingBar';


const Certificates = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        certificatesService.get()
            .then(res => {
                let reducedRes = res.reduce((accumulator, element) => {
                    var elementAdded = accumulator.find(x => x.fileName === element.fileName);
                    if (elementAdded) {
                        if (element.remoteFileUrl.endsWith('pdf')) {
                            elementAdded.remoteFileUrl = element.remoteFileUrl;
                        }
                        if (element.remoteFileUrl.endsWith('jpeg')) {
                            elementAdded.imageRemoteFileUrl = element.remoteFileUrl;
                        }
                    } else {
                        var newElement = {};
                        newElement.fileName = element.fileName;
                        newElement.id = element.id;
                        if (element.remoteFileUrl.endsWith('pdf')) {
                            newElement.remoteFileUrl = element.remoteFileUrl;
                        }
                        if (element.remoteFileUrl.endsWith('jpeg')) {
                            newElement.imageRemoteFileUrl = element.remoteFileUrl;
                        }
                        accumulator.push(newElement);
                    }
                    return accumulator;
                }, []);
                return setCertificates(reducedRes);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        < section className="certificate-wrapper" >
            <section className="certificate-container">
                <article className="certificate-content content">
                    <TextBlockContent
                        title="My Certificates"
                        primary={["Every great success could be proved with clear and visible facts."]}
                        secondary={["These are all my certificates from my jurney through the C# track in SoftUni.",
                            "I have passed all the exams with one of the top results and I am a proud owner of all those documents."]}
                    >
                    </TextBlockContent>
                    <span className="bottom_line"></span>
                </article>

                <article className="certificates">
                    {certificates.length === 0 ? <LoadingBar></LoadingBar> :
                        certificates.map((e) => {
                            return <CertificatesCard
                                key={e.id}
                                id={e.id}
                                fileName={e.fileName}
                                remoteFileUrl={e.remoteFileUrl}
                                imageRemoteFileUrl={e.imageRemoteFileUrl}
                            // onClickTogglePopup={}
                            />
                        })}
                </article>
            </section>
        </section >
    )
}

export default Certificates;