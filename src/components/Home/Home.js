import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import CVContainer from '../CVContainer/CVContainer';

import './Home.css';

import imgCode from "../../img/code.png";
import imgProgrammer from "../../img/programmer3.jpg";
import imgHtml from "../../img/html_css.png";
import imgGitHub from "../../img/github_logo3.png";
import imgSQL from "../../img/sql_logo.png";
import imgCSharp from "../../img/cSharp_blue_logo.png";
import imgDotNet from "../../img/dot_net5_logo.png";
import imgAspNetCore from "../../img/asp_net_core_logo.png";
import imgReact from "../../img/react.png";
import imgVS from "../../img/vs_logo.png";

const Home = () => {
    return (
        <>
            <section className="overlay-color"></section>
            <section className="home-container">
                <article className="developer-content">
                    <TextBlockContent
                        title="FULL STACK DEVELOPER"
                        primary={["Hey there!", "I am Paulina Dyulgerska"]}
                        secondary={["Fresh new full stack developer.",
                            "I create and code beautiful and simple things and I love what I do."]}
                    >
                    </TextBlockContent>
                    <article className='text-align-center'>
                        <ButtonCta to={`/contact`} className='center'>HIRE ME</ButtonCta>
                    </article>
                    <CVContainer />
                </article>
            </section>
            <section className="img-container">
                <article className="animated">
                    <img src={imgProgrammer} alt="" className="programmer" />

                    <article className="img-code-container">
                        <img src={imgCode} alt="" className="img-code" />
                    </article>
                    <article className="img-htmlCss-container">
                        <img src={imgHtml} alt="" className="img-htmlCss" />
                    </article>
                    <article className="img-github-container">
                        <img src={imgGitHub} alt="" className="img-github" />
                    </article>
                    <article className="img-sql-container">
                        <img src={imgSQL} alt="" className="img-sql" />
                    </article>
                    <article className="img-cSharp-container">
                        <img src={imgCSharp} alt="" className="img-cSharp" />
                    </article>
                    <article className="img-dotNet-container">
                        <img src={imgDotNet} alt="" className="img-dotNet" />
                    </article>
                    <article className="img-aspNetCore-container">
                        <img src={imgAspNetCore} alt="" className="img-aspNetCore" />
                    </article>
                    <article className="img-react-container">
                        <img src={imgReact} alt="" className="img-react" />
                    </article>
                    <article className="img-vs-container">
                        <img src={imgVS} alt="" className="img-vs" />
                    </article>
                </article>
            </section>
        </>
    )
}

export default Home;