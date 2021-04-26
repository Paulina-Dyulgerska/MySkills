import { useState, useEffect, createContext } from 'react';

import './Experience.css';
// import * as experiencesService from '../../services/experiencesService';
import experiencesService from '../../services/experiencesService';

import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Popup from '../Shared/Popup/Popup';

// import imgPolygon from "../../img/polygon.png";

export const ModalContext = createContext();

const Experience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [details, setDetails] = useState('');
    const [job, setJob] = useState('');

    useEffect(() => {
        experiencesService.getAll()
            .then(res => setExperiences(res))
    }, []);

    const moreDetailsButtonText = 'More Details for this Position';

    const showPopup = (currentDetails, currentJob) => {
        setIsModalOpen(true);
        setDetails(currentDetails);
        setJob(currentJob);
    }

    const hidePopup = () => {
        setIsModalOpen(false);
    }

    return (
        <section className="experience-wrapper">
            {/* <img className="shape two" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABINJREFUWAm1WF1oXEUU/mbuJi2pNhHtm4JIaq1NsltprT8vRR8E8QcfrYI/WPSlWPvUJI2sJtGCUBUFi0L6oiL4ooJPWn/AVrBodzeJ/ZNqH3yoqTYkGNpm7x2/c5Mzubtmk01373CTc+acM985M3Pmbw1WUHK7XYdbi22IcCebrTMG15K2O8AZh2lnMUXdBOvHZjI4+lveTNULb+ox3Nzrbnct2AGHbtrbetrQJmJAJefwYWnInFquzZKB5PLuZhfiGRrdsRzQUnoG9MuVCCMnhs25WnY1A8kNuK0E2EuD1urGlF/htJxgb/8h/Zt1GaUO2q6jbEPNNsD+wqA5Vo0n9UUDyfa7xwgtI1Ghp8MjFBwOzqPw8/tmdjHATXnX2hIiS9v7aXtvlU3EHBopDJvPq+SVjkSZe9k9ylx4LmlI0NNMxoOFIXMmKV+O79nnNliL54m3PmnL5PmAefNFUlbRY+ZELgrxCoULCenwXfEU3sKnJkw2rJvPu0x3GbuswX3ahh2L6Gdg7DVTUpkPpKvf3ZSxOEDFalVyvD4pvGo+8vUGGObcDjZ/PAEx4yLsKQ6bP0Xmex5Y7Gakq/nHkWTIwPfNCkIcMUk/JuZhxSdtcwFeFJ2UOJDsgNtM/tZYwn80OlkKOB1NLsR8l5CnFZZ5t7Er73qkriPygCoZRIQAbyBvyiprGhXMCAfog99cCUI8KJyV5Ubplnm5mPxQypu/fL3JjOQEE/Oowsa+mdCWu8EWKlapghvU18qnRZkrXym2+O4OsdVyWflNh9FdLgYYVaO0aOt5yLKdVXzmx92WS/QWFTC6c6nkhjqYp/O78u8q5rHQyQHBNSognUjwqbJ0fsE7MFhjOR3tXgCklqQJH3Osqej0Glm+l72RWVhWXpYSw0WRPDJ4pwIm1VcUoUP51KnDdd6Hw8WKQIytmCZvlxKzEIjFpOVknPWO5LjOx6PkRakw9MHc7FRsbvVnrTMoeAGwtgvgl27JAT3J1cqgjtvpAMfJ8JsrtoyHlU+LhiEeUmw6DqcCFO0feXOJQn/LZjbfle11/iTWBs2iG/e59UzMbQm8cYlBklXW0WcJBVwGL3Xucv78Seoa4QWzxWBPEoMr9Uupx4GMD5oj3OmKasD5u7GtvbKB6hqhginYisFpKY0Nm/gkjgMRBe8Fb8trjYbxjZp7/z28SD+hjRqlvHw9KZiKL74uBXhTcUXuS0+f6+KlaIjCQIW8cX8zmsE7V30Y8q6RLfNKaLBdMSVBwzL6xl83v6qsIhAR8gnwCCPfqQYxNTjDm9V7V/WcMHiBGH7PmMc7yPtwnBvq53+BiCLXz7eNxbNk/dSJnD1p9IEVcoRHqt80gr1oIKLI9bkcJ6iXbJvUk4UBzT05I1zkXF/gXixT2cGlf0OtJyf1M1GAQV5Dx5JYytcMRAxu63XXr8rgKTreTsMlbRWwmrKtY4Df8hw7VMibyWq91usC37TXdbZk8DRDWfHPEtEsDo3uNwvnmXquonUFom2W+KEmItA0p2WathPMrJ/+tfhxJT/U/AcYcX8sSV+Q4wAAAABJRU5ErkJggg==" alt="" />
            <img className="shape three" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAkCAYAAAAU/hMoAAAAAXNSR0IArs4c6QAAA4NJREFUWAnNl01IVFEUgM+5M5POvPnRyKGiAluEEaWBy/yZKOmPwqSIimrTLoiCVu1bFgUFLSJplxnaJimSycFaZGhW9EMLqQwrRWe0N5bj3NN5Nvf5TIN0nnAvPM657913zvfuPfecdxE0bIOdgyGf9F8HwoMAeAl1Y6Tn5EuZ5iOGq86xSaEbJAOedgBaeA+0giQigYBnHBPXNuYLNGi13Mm4WQkCunKQWR/CaqPaGNBqJhmw3DGL3Rag1dcLEqBUQfISv1G6ZpBoQzJgn6aQtF6BSSD9IMeejEUZ0BGT+EoBe5XitrScTmbEKUSoA4TlQDDMPrpQUks4ZLRjJWaUT4qTNzWZvsZ9FX5fi6oDver5oqSgkY70fjbcCEAh5egvOYIE9wjgGWfGAiQ6xs8322MIzhfVGhdU33XIkQ5zLxttYQdqVpSv/5VdETNQhbvwl3rBoxQ35Pc4Bb2YaWdbwZy9SZY3CfAWV5LXrIf5smLvHw3bhczWF9YVjjkHuBqTS0T6CBsvyTmYIBDbi2v8CYfDc6Px0bIseg4LATEiWMdLnuWZ7+E/nsZIjb8ZkQNhMVuqw2xNdpg0dSVMayO40hYaN3M65ynYpB5ICW1Kz1e6BmmlEYZZo4A85Hmr9Hyla5BJ+LmKYdRGpHC04FO+cOp91yAFZMuUUZb9uAEnHP28VNcgpcDdioRj86XS3ZBzpiD+Q8ZUYvwAV4wT7LCCU4SX5Qcube2EdGdpTdCuqxbE8OPxKgR5UgHxl7u2aSybsyoO57FlUnibGDCmnM6ShO8RZZtE8VFIKieEozxGffBQxpNeW7KlZEZCnmVjHjdmQNJ9KkgZ6U5+v3IeNpxDJQM3FFcbrc6b+erq66fspILmWc78TsBu5ErASzzBS13J876PB6qK8rfvUQY87jag5cSeSeuklkyk+/nGipz3uxEZOIQxtOrvVKMm8qSi5lYQWJ+DjnJp+8Ix+BBl9mo4Fh5SY92UNuRI/EcFCuzJGZfeDK0Mbgt+c9PZQm3ZKYgPvBsdRnp1AbSYbEhe+VIbEumdrWugOCCnj5MM3KcBm41gQ/LOtE9q/FQ/SDNhWjt6OvVk4YX9GRoo4vNT8mcIbjDL1B8Ml7+BSG2gWwM2G0GEMulm7u1UdxDoIv/CS9XXQVoxuWMahBIRw7g83ddD4/RIV/6g0O2MZ3yP89CuByLAb7M8F5v2IOfIAAAAAElFTkSuQmCC" alt="" />
            <img className="shape four" src="data:image/png;base64,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7si6BVEA1l+F/ozI6epd3LVPpzMgv4PPIjexrdzFjn4bY/EC6bSZuPjjlWs26Yz3/A7Gq7dL5NjWQES6kUpKvTt/xh2vkuSMvo1J6dw7RP88TYvIg9Y+JSTkDia2tbFmkgkkFbtYXABvbEUGHXlik5pUJWeR0e7SF0B6zX3nONR1DCLQI87jVdP0Z22xJlZbK1JsJYmYPK0swxskRquwXJSM0nxX9GLHB5JOrFxUCr2hVsr9OTaTG9WBs9RkaSaOJ1VJqwcC0m7J9S/NsX59dR2psmr2AmZpSyb1GRKmO1yydA+B9Kpvsj3rWpVkvart00Eu9xQSlL+dfzySXbsgac/xQirTMebjg6gMrbaSPEcy3l3MqSyttj55ugk+VzBpEGUSlN/c1Grb55ugZuhf0Yqmh4zSNf9rv06Offly2savjlzQPaiUrPm//4SQHOqm7vzQw5lWouHHsW59HGmSjfkAkkVXJbHT3mlpw5uU6O9we0DpJYQjSZrvy/w4km/wA7Ymehzpln186wOSGlDaGNV7QHJz4J1P/MNzl3LBseQBNKz93lVzi2om4y16D4RKgHXk6xMn432f4/hePSDZfSigJoWjWmDgBntvH7/7A0f3abxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERAPMNC9uO7d+ft79d+E/dHBy3/8t+J/bbuWr/8byxe/YWHyAVsWYE9xj84zX3PbGa0vYkRdV9b9P/rJFq8jxU76ANxsPTQP3QOvMVbNLbFuLp851k2aQAxo2wxv5slF5WP7A8uPNUbOQ8QIbw7+XOWhKlOiYvx833pGB1A+gzGBn1GSO0pvg3bJObm9C66MSZhRNorzA0aNVc4ASap+5dSkCu5OOV0ksHNkF7I/ax58EUvvUbcLitSs+jc5JFBZ7j5bNIUrk11P3XCZiBzPQgJJZfFamBGp/cDuS+fVJi8QgP94CLyqrpnnt59c2oEFksD/LBgYVwEFZMrXdcS9lvNuYQ5mCSfZxXY4edczJdI8+R/3v7dUGpNSFCKLem9bfatQnTivRvEGkfPV22G/LkgAJ00oUIoiUjPm5Lzw99uNvwgTR1RtL6fTBmai3p2571sPZKBpMxVKYnRSD7gvd+QhFY0WWQP3k8YGkkzrrmmjchnQx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" alt="" /> */}

            <section className="experience-container" >
                <ModalContext.Provider value={setIsModalOpen}>
                    <article className="experience-content">
                        {/* <img src={imgPolygon} alt="" className="polygon" /> */}
                        <TextBlockContent
                            title="This is my Life, Path &amp; Work"
                            primary={["Every ..."]}
                            secondary={["I am....",
                                "....."]}
                        >
                        </TextBlockContent>
                    </article>
                    <article className="experience-items">
                        {experiences.map((e) => {
                            return (
                                <ExperienceCard
                                    key={e.id}
                                    id={e.id}
                                    url={e.url}
                                    logo={e.logo}
                                    company={e.company}
                                    job={e.job}
                                    startDate={e.startDate}
                                    endDate={e.endDate}
                                    details={e.details}
                                    iconClassName={e.iconClassName}
                                    buttonText={moreDetailsButtonText}
                                    onClickTogglePopup={() => showPopup(e.details, e.job)}
                                />
                                ////moje i taka s destruktorirane:
                                // <ExperienceCard
                                // key={e.id} {...e}/>
                            )
                        })}

                        {isModalOpen &&
                            <Popup
                                content={
                                    <TextBlockContent
                                        title="Job main description and responsibilities:"
                                        primary={[job]}
                                        secondary={details.split(', ')}
                                    >
                                    </TextBlockContent>}
                                handleClose={() => hidePopup()}
                            />
                        }
                    </article>
                </ModalContext.Provider>
            </section>
        </section>
    )
}

export default Experience;