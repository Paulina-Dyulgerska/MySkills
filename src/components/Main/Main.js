import imgCode from "../../img/code.png";
import imgProgrammer from "../../img/programmer3.jpg";
import imgPolygon from "../../img/polygon.png";
import imgHtml from "../../img/html_css.png";
import imgGitHub from "../../img/github_logo3.png";
import imgSQL from "../../img/sql_logo.png";
import imgCSharp from "../../img/cSharp_blue_logo.png";
import imgDotNet from "../../img/dot_net5_logo.png";
import imgAspNetCore from "../../img/asp_net_core_logo.png";
import imgReact from "../../img/react.png";
import imgVS from "../../img/vs_logo.png";

const Main = () => {
    return (
        <section className="page-wrapper">
            <section className="overlay-color">
            </section>
            <aside className="sidebar">
                ASIDE is not shown at the moment
            </aside>
            <main className="main-wrapper">
                <section className="main-container">
                    <article className="bubbles">
                        <span className="bubble b-one"></span>
                        <span className="bubble b-two"></span>
                        <span className="bubble b-three"></span>
                        <span className="bubble b-four"></span>
                        <span className="bubble b-five"></span>
                        <span className="bubble b-six"></span>
                    </article>
                    <section className="developer-content">
                        <h4 className="developer-content-title">
                            FULL STACK DEVELOPER
                        </h4>
                        <p>
                            Hey there!
                            I am Paulina Dyulgerska
                            Just graduated full stack developer 
                        </p>
                        <button>
                            Hire me
                        </button>
                    </section>
                    {/* <img src={imgPolygon} alt="" className="polygon" /> */}
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
            </main>
        </section>
    )
}

export default Main;