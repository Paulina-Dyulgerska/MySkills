import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="body_wrapper">
            <div className="sticky-outer-wrapper">
                <div className="sticky-inner-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light dark_menu">
                        <div className="container custome_container">
                            <a className="navbar-brand logo_h" href="./">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB8lBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////C4SSvAAAApXRSTlMAAQIEBQYICQoLDA4PERITFBYXGBkaGx0eICIjJicpKisuLzEzNDY3ODs+QEFCRkpLTVBRUlNUVVZXWFpbXF1eYWNkZWZnaWpsbnJzdHZ3eHp7fYCCg4WIiouMkpOUlZyeoKKnqausra+wsbW2uLq7vL2+v8DCw8XIyszO0NHS09TV1tfY2drc3d7f4OHi4+Tm5+nq6+zt7/Dx8/X29/j5+vv8/f7tu4eAAAADVElEQVRIiaWXZ1sTQRCAJwEFC0YglAARjVJEqih2DSp2ISooiBhQ6QqhKgooFiAEMQoYUJAi+z/dvbtkd3N7l8PMl7ubmfeeLTOzswAiMWWcrHH3jnv9fu9Yr7umIsMkdBOJ427PAuJkoafaYYQ0l3UEkEACHWXmSGxxn4iUpa9YF7W3aqNEWu3abNW8PovQfJUGGtsUCSXSFCtiLR4jLEIei5rNHDHGIjSSGc7uMsxiOp5nYwaNswgNxHBw43ZYhBpZ1skYVid9s5JMzW5q0k7KprEBeW1PslWSfdZ+TTiQFoLbWH0W/Wmz9sDbgj6FnLrSYpUyIGF/ypA2jApl1sz7/JrwuvFq5o1/mtFh0ZCcYyUqwwLeyCo9kkiJBHeq9B92AlyKBHcS9sCKSv8ewxcjwSvZGHap9YZg5MLLJSgdxuA+M9iW/hdeskG5QB2El7/MKDL1fV3tVi6acgi+HGdVJDE1/8GbcDeXMASDcC6ft5VhJc4NouIThGuPJJIIzC0ukItH7izn5oFRHRitDe8FOLG+tfmz+zSh87mZj4FXD0arhwDuy8qWOEw3sG5e8OvC87jK31a0L0jmLzJufg6ebn65QZ4f40Qw3hqALg5mhj2RCnBVmswOgLNquAsftDe5YY/Rjwb8ZwupSO1kX9TwXBJAKQOPslv1GDMO8nIdvzxSwxuHAQq2qL+HDZLnmEl5h9BbcqC8VsPoGMBBplY2s+E5l0BKV/XDffhx9K8ALgKwMQvs4hKjJRSJJqWucfAaHradaTjKwcbW7JZUmbW0IgHswwtWQA8CnJJ8MfjaWHnm1Ln6aSSCu3HBLKO+uBgIczIkHHwDj+kOtd3Dn9nqAiiGv5GFpDsrFUBB6eXhW8o7yascOuVOjaJP5Q/Oqjrp7TeJHHhFTaXycTOsDY/geDm/hJYnn+UR1yvUMqy0dEVaaG1OErHbC+2JkuOFDWorCoZEuwbM95spdYypPaROF3ab+LTdLZ/zyclJWcfrfYwlkE5/6hTDgc9Kh+Gb+cFbnOyQttnQPOHmEzOwHXYwrIWMj6KJi659jK5xNdoyPxW2zBBVsw6RrwltOtcE0L+g9OtfUCC6qxERR3XPIk8uGryUSWLKqKhxe6Tr4KhH+zr4Dxt3JMQ0pgJfAAAAAElFTkSuQmCC" alt="" />
                                <img src="data:image/png;base64,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" alt="" />
                            </a>
                            <a href="./" className="btn get-btn get-btn-two d-lg-none d-md-block login">Login</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav m-auto">
                                    <li className="nav-item"><a className="nav-link active">Home</a></li>
                                    <li className="nav-item"><a className="nav-link">About</a></li>
                                    <li className="nav-item"><a className="nav-link">Service</a></li>
                                    <li className="nav-item"><a className="nav-link">Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link">Testimonial</a></li>
                                    <li className="nav-item"><a className="nav-link">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right d-md-none d-lg-block">
                                    <li className="nav-item"><a href="./" className="login">login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <section className="frelencer_banner_area developer_banner_area" id="home" >
                <img className="d_shap" src="/static/media/shap.b41f1706.png" alt="" />
                <div className="overlay_color"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="frelencer_content developer_content">
                                <img className="d_dot" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACqCAYAAAC3WU3DAAAAx0lEQVR4nO3ZMREAIAADsfoXgk4MdGHhOiT7K/gkOXmn0fxsAAAAAAAAACjMbs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDXrDcAAAAAAAAAFAa5Zr0BAAAAAAAAoDDINesNAAAAAAAAAIVBrllvAAAAAAAAACgMcs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDX/GuScwHek3YF31w4MgAAAABJRU5ErkJggg==" alt="" />
                                <h4 className="react-reveal fadeInUp">
                                    <span>Front-End Developer</span>
                                </h4>
                                <h2 className="react-reveal fadeInUp t_color" >
                                    Talk is cheap.
                                    Show me the code
                                </h2>
                                <p className="react-reveal fadeInUp t_color">
                                    I design and code beautifully simple things,
                                    and I love what I do.
                                </p>
                                <a href="./" className="react-reveal fadeInUp chat_btn" >
                                    Let's Chat
                                </a>
                                <div className="developer_skill">
                                    <div className="item">
                                        <p><span>12</span> Years <br />Experence</p>
                                    </div>
                                    <div className="item">
                                        <p><span>165</span> Projects Completed<br /> on 18 Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="developer_img">
                                <img className="react-reveal fadeInLeft f_img_one" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAABCCAYAAABn/iWDAAAELUlEQVR4nO3dwUsUURwH8G+bkBSCR8UKBE8KipRopmmUSCBqXTp09SRK5L9Q56i8eg6KDtElBEnLCMVECryJpmlSIAhCeaiM3zrrvH1vdvc3u7a6s98PCO7sm5p9fvvNvN/O2om9oSEEiAG4AaAfQCeAswBK3WEUEbsA1gFMAXgJ4DWAv/ZLKwl4rRKOhwAanWcoqqQQ1HhfAwAWAIx44TkQs178XQATDErRa/RycM+cCDMsgwAeAThZ7DNFcSe9M8xgYkMiLC0AHnOOKIDk4hKMsDxJcf1CVOLlIx6WNgBNRT8llM5FAO0xb3lMlEl/jFWFlC5KWCo4W6RQGWNnlpRO2U05opQYFlJjWEiNYSE1hoXUGBZSY1hIjWEhNYaF1BgWUsv/PSzXrwP19f7jV6+ApSVnWKCREX/rxgbw7Jn/+PZtoKoqaC8d+zjs45TnZEy27OP7/BmYmDi8ucmD/Ifl9Gmgutp/fOaMMyQlcz+b/CDSPZ+JfRz2ccr3k5PAzk6GPyhAZSXQ1pa8PSgEucxNHvA0FMbVq9nt193tbCpE0bmVUkp20L/Enh6gwrgLY2zMGRK3vOxscrS3hz8VlZUBdXXO5kIUnbAElXVx7Vry40+fnCFqpaX71xX2tUY6Uo1Ko3EXCE9DYXV0hNuhKTo3IjIsYZWXAw0Nup2kCsn4iGBYtHZ3/YH2qS2V5mb/ie3tFIMKB8OitbjoD5TlbU1N+h2l+pgX1nNzzpBCw7BoLSwkVwe7b2JrbfU3rKwAq6vOkEJz9KuhgQFn07H19i3Q17d/dBcuAOPjwOame7TShKut9R9LtzYCWFnCmJ1NvnZJtdIxm3BSjcIstY8xhiUMafVPT/s7SJNOmm4muwkn1Sgijv40JB1VbaNsdNTZlHdyodrVtf+3SrNNVjxm5TCbcFKFpBpFBCtLWHKNMj/v72Q36cxTk1ShbN54PKYYlmy8f+/vJE23xMrHbsJFYLlsYliyIe9DyXI4oaVl/xuzCSfVJ2ilVMAYlmzNzPg7SpOutze5CWdWn4hgWLL14UNyky5x0QuvCZfqXfACxrDkItWy2Kw6EcLfI5cLWTJLA868X0WqjVSdw5Cpuz087Gz6n1hZcmU26ZCm2kQAw5IruYk7IWJNOJv87n55O/S88wxRsjVWFlJjWEiNYSE1hoXUGBZSY1hIjWEhNYaF1BgWUmNYSE3C8pvTRQp/JCw/OFOk8F3CssaZIoX4G4lvOFOkMCVheQHgJ2eL0pB8PJewbPH/dKYMJB9biaXzfflIVPrxVKQ+AngAo8/yC8AtAF+YCDLIXZQ3E5cpZlNuHcBlueWYs0VeDlq9XMTZHdxv8nsAANzxys8eZ62o7Hk/dznLdHp5OBD0uSHZ4an3dQ7AFQBn5SPgcoO3M5oKnfy85aOVUkHeAfga+IIA/ANSs9XB9j/RqgAAAABJRU5ErkJggg==" alt="" />
                                <div className="react-reveal fadeInRight f_img_two">
                                    <img className="" src="/static/media/polygon.5208e892.png" />
                                </div>
                                <img className="react-reveal fadeInDown f_img_seven" src="/static/media/angular.a8390908.png" alt="" />
                                <img className="react-reveal fadeInDown f_img_four" src="/static/media/man.107d9562.png" alt="" />
                                <div className="react-reveal fadeInDown f_img_five" >
                                    <img className="" src="/static/media/code.631927f8.png" alt="" />
                                </div>
                                <div className="react-reveal fadeInDown f_img_six" >
                                    <img className="" src="data:image/png;base64,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" alt="" />
                                </div>
                                <img className="react-reveal fadeInUp f_img_eight" src="/static/media/react.1ff63cc5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="dev_about_area">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="dev_about_content">
                                <h6>Introduce</h6>
                                <h2>Passion
                                Heart &amp; Soul
                                </h2>
                                <h5>Every great design begin with an even better story</h5>
                                <p>Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="dev_skill_item">
                                <div className="item">
                                    <h3>Design</h3>
                                    <p>Create digital products with unique idea</p>
                                    <a href=".#">20 Projects</a><span className="icon icon-tools"></span>
                                </div>
                                <div className="item">
                                    <h3>front-End</h3>
                                    <p>My coding structure is clean and smooth</p>
                                    <a href=".#">165 Projects</a><span className="icon icon-genius"></span>
                                </div>
                                <div className="item">
                                    <h3>SEO</h3>
                                    <p>Boost your business with SEO optimize.</p>
                                    <a href=".#">5 Projects</a><span className="icon icon-linegraph"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="dev_clients_logo_area">
                <div className="container">
                    <div className="clients_intrigration">
                        <a href=".#" className="c_items">
                            <img src="data:image/png;base64,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" alt="" />
                        </a>
                        <a href=".#" className="c_items">
                            <img src="data:image/png;base64,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" alt="" />
                        </a>
                        <a href=".#" className="c_items">
                            <img src="data:image/png;base64,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" alt="" />
                        </a>
                        <a href=".#" className="c_items middle">
                            <img src="data:image/png;base64,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" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <section className="dev_work_area">
                <div className="container custome_container">
                    <div className="row grid">
                        <div className="col-lg-6 col-md-6 grid-item" style={{  left: '0px', top: '0px' }}>
                            <div className="dev_tittle">
                                <h2>Latest Work</h2>
                                <p>Some of my recent work, Perfect solutions for web.</p>
                            </div>
                        </div>
                        <div className="col-md-6 grid-item" style={{  left: '745px', top: '0px' }}>
                            <div className="work_item">
                                <a href=".#"><img src="/static/media/pr1.93d86a7d.jpg" alt="" /></a>
                                <div className="content">
                                    <h3>Facilio</h3>
                                    <div className="category"><a href=".#">HTML</a><a href=".#">React</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-item" style={{   left: '0px', top: '240px' }}>
                            <div className="work_item">
                                <a href=".#"><img src="/static/media/pr2.f0d2c0cd.jpg" alt="" /></a>
                                <div className="content">
                                    <h3>John</h3>
                                    <div className="category"><a href=".#">React</a><a href=".#">PHP</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-item" style={{  left: '745px', top: '504.479px' }}>
                            <div className="work_item">
                                <a href=".#"><img src="/static/media/pr3.cdea8050.jpg" alt="" /></a>
                                <div className="content">
                                    <h3>Facilio</h3>
                                    <div className="category"><a href=".#">Jacascript</a><a href=".#">HTML</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-item" style={{   left: '0px', top: '763.333px' }}>
                            <div className="work_item">
                                <a href=".#"><img src="/static/media/pr3.cdea8050.jpg" alt="" /></a>
                                <div className="content">
                                    <h3>John</h3>
                                    <div className="category"><a href=".#">React</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 grid-item" style={{ left: '745px', top: '1027.81px' }}>
                            <a href=".#" className="dev_btn">ALL Projects</a></div>
                    </div>
                </div>
            </section>
            <section id="testimonial" className="testimonial_area testimonial_area_three">
                {/* <img src="data:image/png;base64,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" alt=""><img className="shape two" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACqCAYAAAC3WU3DAAAAx0lEQVR4nO3ZMREAIAADsfoXgk4MdGHhOiT7K/gkOXmn0fxsAAAAAAAAACjMbs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDXrDcAAAAAAAAAFAa5Zr0BAAAAAAAAoDDINesNAAAAAAAAAIVBrllvAAAAAAAAACgMcs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDX/GuScwHek3YF31w4MgAAAABJRU5ErkJggg==" alt="" classNameName="shape one" /> */}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACqCAYAAAC3WU3DAAAAx0lEQVR4nO3ZMREAIAADsfoXgk4MdGHhOiT7K/gkOXmn0fxsAAAAAAAAACjMbs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDXrDcAAAAAAAAAFAa5Zr0BAAAAAAAAoDDINesNAAAAAAAAAIVBrllvAAAAAAAAACgMcs16AwAAAAAAAEBhkGvWGwAAAAAAAAAKg1yz3gAAAAAAAABQGOSa9QYAAAAAAACAwiDX/GuScwHek3YF31w4MgAAAABJRU5ErkJggg==" alt="" classNameName="shape two" />
                <div className="container">
                    <div className="dev_tittle mb_70">
                        <h2>Testimonials</h2>
                        <p>What's clients say about me.</p>
                    </div>
                    <div>
                        <div className="slick-slider testimonial_slider slick-initialized" dir="ltr">
                            <div className="slick-list">
                                <div className="slick-track">
                                    <div data-index="-1" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1">
                                                <div className="author_img">
                                                    <img src="/static/media/our-coaches-7.66123bda.jpg" alt="" />
                                                </div>
                                                <h6>Edward Evans</h6>
                                                <span>Envato Customer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" >
                                        <div>
                                            <div className="item" tabindex="-1" >
                                                <div className="author_img">
                                                    <img src="/static/media/slider2.9d682e6d.png" alt="" />
                                                </div>
                                                <h6>Alex Smith</h6>
                                                <span>Envato Customer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="1" className="slick-slide" tabindex="-1" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1" >
                                                <div className="author_img"><img src="/static/media/our-coaches-2.29e8b29e.jpg" alt="" /></div>
                                                <h6>MICHAEL BEAN</h6>
                                                <span>Graphic Designer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="2" className="slick-slide" tabindex="-1" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1">
                                                <div className="author_img"><img src="/static/media/our-coaches-7.66123bda.jpg" alt="" /></div>
                                                <h6>Edward Evans</h6>
                                                <span>Envato Customer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="3" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1" >
                                                <div className="author_img"><img src="/static/media/slider2.9d682e6d.png" alt="" /></div>
                                                <h6>Alex Smith</h6>
                                                <span>Envato Customer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="4" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1">
                                                <div className="author_img"><img src="/static/media/our-coaches-2.29e8b29e.jpg" alt="" /></div>
                                                <h6>MICHAEL BEAN</h6>
                                                <span>Graphic Designer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="5" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" >
                                        <div>
                                            <div className="item" tabindex="-1">
                                                <div className="author_img"><img src="/static/media/our-coaches-7.66123bda.jpg" alt="" /></div>
                                                <h6>Edward Evans</h6>
                                                <span>Envato Customer</span>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="slick-dots">
                                <li className="slick-active"><button>1</button></li>
                                <li className=""><button>2</button></li>
                                <li className=""><button>3</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="awards_area bg_color_two sec_pad">
                <img className="shape one" src="/static/media/video_shap.4f64f350.png" alt="" />
                <div className="container">
                    <div className="dev_tittle mb_70">
                        <h2>Awards</h2>
                        <p>Working time some of my product wining awards.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="awards_item wow fadeInUp">
                                <div className="icon">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA9CAYAAADxoArXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMTJmOTRjNy05MjM3LTRhYjMtYWM2Yy0xOGUwYjNmMDE1Y2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRGRDAwMzI3RUQ1MTFFQTk4RUFGNjg2QzkwNjQ2M0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRGRDAwMzE3RUQ1MTFFQTk4RUFGNjg2QzkwNjQ2M0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWZhMTc0Ni1hMzcyLTRhYmItOGIzNS1lNjI5MjgyOTAwNDkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4YzYxMzUzMC03MGM5LTExN2QtYmJlNy1hZDgwNTQ4MGE3N2YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LR3iZAAAWgElEQVR42rRbabBcxXX+uvveO8t7T3qSWISwBDKbLRYDYgkYjAQCsQgjHAzYhXGCjZ3khyu4ispWlRSxK0lV7CQ/kqJSiXewXTZgDLLNIjDCGEkgsUmAVhACISG0vW2Wu3Tn9Om+s72Z0QNXpmrqaWbuvd1n+853Th+Jvb/4PvSW7VDFgoi3vhSIbW9IIWJoAQghYIThv0Jo+sJASsmfAQNjNIyka9B8GYE+L9nnN+Pf7qXHRzB81/flxI++rfW7b9I6Yc87haHn0l7SdAIz/uF/Ajlzth6580ajSkdptejqdHDZrdpURvjawK1FCxWKMxGEFxghZ5JEAW+cBXZ/3ZueLVgDfovCfv4AAguD/q/m3cUSqr99QGRjBw2Uoh2KwzyX9hFForbyfkWySG20llIdRLH8oiiVt5uJg3QJGWvvgz+Eeee9E8SaJ76a7d95s4zjYWXsL4KfwwJIsGhsIycgGdZ+Y5wipGxap5tIxn8pZB+B6Wmm+bOgZ+rxUchSGUIFrT918Q2rDm+EiUNCJqmUg9ONCYNKOnzkpnDZV+4sL712ta5VEdB+T9fbNyw3m9beXigNDusg8Kq2D8j4ryD5pXc5Y9xv0i/Av2vdkMl0uG2bECLDVF8mTaFKA+5D1v8+q3hl92aNURoCStYy9F1SLemdr34yffjub49mI1/CyIHNQf3lly5ROzYtV0FxGFGBgsdqV7v4NYpvtEKZXLzcvY13+RYDwnt/u7eJFscT6G8nv4p/rttDvnLv+LfX8L1+X1o6vDCK5BmSUO/uOj3btfPsaPE124Jg7+6jkSbDSpFlU2l9lu7RXnPabdIvynFknAez4MYLLFuE6vBp0ZBbNATqCWkEPsY4BSu/VuOWPtEgTMa+KElSY6+jZyjDmMOAlpkaCVefro48JiBbUsDajRPKaWldJ+VN8kaNbGzYgRdtxgvnNG+sftjd87fxEGK0dX9Bz3QqyHKlWYGMVaim79BQmv0moxutdezflL6x7/y7zvDoRH/J3keCkmKVxx+HstK+iyILz9VpFkp8yJcQoufSqVeOtB6iDa8d0DvVDgEzoUgUxSmCvcl6IyvIdF2j4dYda7IrmzxtiklKyX9vzYkfWuDWh7UukpH1yG1Yyw49NYeG9RshM/6sOI1nbpOSr4CSiu+RflO5pfJ3p7Ctn3OhO38TXe4LPphZPUJ1LMbhli+qtXNB9ihycu3diwSTmeJrtbe69rFiw0LnuNGy+T7WmuQBrdbul8OCfhacils71G5+p2j3qXGpzOiMPoPThYcEcl2yNQVvxt5Nm1PKYUaHIls33p7aRP/9OhI4yeofzsJdFpnkagwfJJC0rm080JL7VuvIYnpbahoojnNTjRHJgPLtIDISHLpB4iYJ2c0AzZTlc4P97LOK6ET5fgL30k6ee/MNTAIRWHT1xIQsqSnViTS27AfJzNkQpy5GdMLpyIanIbCu/847SNY/Bby1CSosE2kYZE7cEFLrRm7tFLptD0Y0aJDJXIg5JZipCNwM9EbmZCFdqmG6mace0ULs/KINxkWWE7UaknoNuPAaFJb/KUqnfAJy+ixkXncq06i9sRHVp+5D/aF7UBwbAVFCMrQDOiMcgNncap9vC5fJ7u1IRyshEo1dTWa6XQVuWs84zDT+AV4i3UBOd4W2ib6JTbRBSkdJDTGZW1//Jxi65Q4UZh3dCLHA511JAV4+6QxE80/B+HGnovrf30A0egBhaRop18Z2ZnGvqcQOEHNWbiXwtprz+89zkRDIplivtQjd+mWTjOSu1qYsSi8WmOK0ClyxHMO3/x2KJCz7hTZtCxvOwgZBUMDQFTchvO2voKMBGCL5LqG5zdpn9kJofpaUPcHWdNRZ8nCgBIjJ1NjHj5m0uGFkTisTEB89G+VbvoawPIRMxxTLjqWlWQ31Nzch3v2Wi3VmeRlvZGjpzVCX30BMt05YENODU4pJ+s3orpjSiuJTySo9QUs0gGlylZdTSiHyKFFOKd61qLykWnYAYulNKB17IhMRS76pOEVt8yuo/+DfoLeuBcIi9FVfwKwvfN3SDtpIRpYOEV55M8ZfXoXo7R0QA4O8QVssCfnhmN8HaUH0sDoalYkQ7UmfOxVJivSjpyJYfDW7oy0dpRVn51ZUv3Un5NqHEVRqKO87CPWz/8Lo4z/2WtcMkoVTzoC46FrL8ImLJoiNnHIu/n8RuAFkOQTlJZ9FrKwOUw5QWHwdohmzuRCRlJpSEnr0we8geuNVKuhnUhEeIi5ECAjB9X3fRXX/+3RtyMWEBcPpi5bDHDsPIG+xYGiUnkQl+7lwL27dV+DmhS4V5es5YuFLQyP8w53AOqOce/zJKC66nq2mbKFAf2uvvwiz9nHauHRFOhd/dBOBlXprM+q/+YlLU560hSd8HPLcy5HYZ2epo2gd1tUdiN360jbHa93VG2RbIveu5R6gfW8HrnTUuhGn/JnbO5kv92wlRAZWIcSiG6BmzWo+PqVa9Yn7EO3ZBUkCShNwPFsqKWXEN4pVv0Rt79veYxwyRFfcCHPUHKTk1oEvT20uZmFynm58yurg1L3Ymell4Ul0kTYohWw82NpHUYUgPYAx6JB1s2NPRumyT/sywJUDlS0boVcTm6KSEEq5TqflY8bn64Bc/u1tqDz1UN5E4r/Fk06FOn8xJyZDKJ8J15CQvvehuP72fKCLK/eKdTlVpMpZsRVaC8d+jHc1u7gm1hRcthyFmUezZjNrjTRF7ekHYfZshyiGnHWtH0lfKbFxoghRTDn76UdQ27+7YTmL/aVrbkU2YyYzL+XZg3Z3+aaBcXlatKeoNkGnEsPdkrdx8Mybln4RzUU+bZByazZnHgaX3shiKOFq3dq21yCfeQQhW6cA4XvcytNX240wiKBLJYgtLyB58lGnQL/fAqF9ev4SAuvMt3iE48jWS7RDFO4pIKe1XcrJXjHc16VFs3knnKSu+c3uTkVCXIG4/DMIZh7piQrZhyyekrBq5zaI8nQPdA7EssxZmamjsUhehqoT1Xj2l4j3v9sSEERGrrkF2dA0yDRzAtrIkq785JaObTiY5h6bBwV/SFoSotH3tWDDMuuEFqP8mtaRzD4OxSU3c1vXlxaoUVymv19BoSu5amIayezSAZ4rRoTj3/SD7T+b155DsuYJL6pdMUX55LMQEGJn9dQrIu9BGEZq08AR9G0HfTCXZmTUvFLGTTmiewRCth+cVmtQS65HNPtYjlDuZhOXTp5dAbn9NeiBIRIoczhAm7CNcBG4DqjmSkOzmkQYIKpUqXJagXTfewxIFvntGsHVn0c8EDIFLWS+KWjDibOI8m49uQPSF7RaSba7ULIGXdNdsgvZqyWb14EW6lWkRx2DEscuGLWZ8O96C8nKFQioRAzthnzp6MONFOCqVclruRZ/RmEQlYYgXn4W1Zd+55KiLTFJIQMLzoQ47zJa7yBSZZhb5ymS++gaU2Zj8nBsJe9Z5a0cw61Zx5/TuI7g0hsQHjXP1TXCVkoZ6qsJfLa/TFx4OpEHZyVhFIWADX/tOptNmsCAZFvEcSlEsTJOefvnSA68xwpKLX0JC4iWfRH1iLCAQsnW2pbUcG6mAgNichPvD3Lp1sxt3SejDUriwzhqLspX3gRFpF/5S5K97yJe+QACIiGZ9EDCAOdJCtGImDYZCOlQmomLpLQj2BOSwWFkLzyH+sb1HrFdShz8+FnA+ZdSCLlTwEy7fJFK1ajhp9KLk62HHN0aZ8JX+flnJhsEVvV4BGbJVQiPOc5naBfbVaKQatOLUOVpJJrg/GmPblIlHEO0+Vrbnpbmipc+cY+a49tq03Ls6iGkj/0c8ciBJpUtFFC66vO09CBZOeZEoKiMUlo06HzXHtsHSUuTtMUHheSatCFz5PEoXrocMir6PpRE/cBeJL++lwt6SQCT1g5B1yswlEcD40mHPxVwLSLF3wWUx5GMIUlGKT3VUKACQ7+4EsnW9Z6eaBa8tOBc4NxFyMZHXEspcKlJmO7coaeFRUvintTEbgUCTvQWmccRLroKhXkLPBg516yvXQlsexWiMIA4IFE+dhayBWdDR0Qs4oTule1HxBahKXYTm6rmLkB2+oVIhqchoeooHJtAdQXFcqXiSSRlhvIgQqqzswLlbVKSAzt/5tXjpGJK1ZLpUxiCNpAcPQ8hgZUoll0utEKMHUS24sfkYglqES20/EsY/Kd7Ufjne6Bv/UvUQyoUxkZcheXwGSqJoSfGkH3qahT/8XuY9q/3Qd3xLdRmzybrlSEI/OJN61kcG9/WdYufuBB64cWkiBECupRzOGD6dkQ6BJ58hilaEnpzGsFZO6mMIbhwGZVwp/mjFc6iqK55Gunml6giIqo47ySUb/gzhEMzUCSrDP7xl6Fu+TpSAqT00B7yXqp/R/ejkoxAXnwtpn3l7xEdMxcF8oDp5y9F4YJlyAIKncoo4l//CCaNfS+NYGraMCJKgykBpe2uGCmb5+1dQrHLUYsRnUK7Vq/lvNoxZ+nLseoYQMVBcdHVCMulvIOGrFoh9/suCpYlU/oJiFkI6VuxlvjTh+DGr2L8I/OQrXoA6TvvQkUU56ctRPGG2xHNOJqbBG6uxJMJslw4OA3Z6t9iYusGQumFnMHsScYAuf7oaecjfeEpiJm0aqpaOqs+neruUxZBP5c2JmDeakTMuVdXq5CLliE64xz+PSVN2vQy8dwTUJtfcPQwoZXe3ITayl8guu4216qxXkBgN3DR1TBnfwrJ/n0wERGNI+cwCPKJgz/bq+zYhPqaR8jalIHDQZiJUdQe/hHKHz/bTR1Y6806AtHln0X9ldUIa/TsyBGUvOcovKACU4xha6XGqYUdZ7Cqn5gAhmmhSz5Ngg0wclrE5S7kr35KsesKRYRkzcoEkp/8J0bXPO6jwbVumTeTixfnEsIfPZeYmN1QQjRRMJFI9ryFyt13Idq+icrGsgOrQhHy909i/M0N7izKV1vBeYsgF5yDwM6BQDebMy2t4G4H8N0F5vThzwd45IGsa3vFZ1+MyC6Un/pZDKPYla8+A0XIzNUBfZ8NFBDu34Xk3/8aow9/h9gSCUvsSPpmvXCPZaVKEbJiqxuex8S/fA3h8ysRkFKEDBkQLSaoCqW7Ffe4SsvN6yA64iMQl12PeonET6vuoF4cvpPZVWAbuXysY9wwj4wnkFIhHi6+jjYz1MAwe6qfrvgpwgTc7tGWgVkaYe8jXhwdeB+aLDZ215cx/vwqysl13/9y75Q+TLyxEYf+95uoffPPuVoCERaKXubbmfQdUTt78vSjSLZv5Fo5I6+wDyqddwXSUxYirlXc6SO8zj/ocamtYixZ1BnlTlo4obgMFy5E6cJLmEJqnxknnnsSgtIGCDFj24w1XOGywOxZRYpTroufhF6/GvvnEiubMx/FoVnQaYJ0/x6Iba8jIOTmFlJkLatccUEKlH46SIgigpGDqD76AIp/cZofcCC1zDmOEP1KJFtepufFdG+hfTCmi+BB9+ESy5mJlBOTkRk9iArw4iVUAg7M4ANv2+OKbWX06E+JUx+iuA0ZiYVxh16ZbFZexqYXUeIxpOL2zcjeeJ0HTkTmJgJSG/OUowWDl3QH6tZ52e2V64XZaQEKiWTNw6gs+xzKlPbg+vuIPnkV0lUPw2zfQPhQnAqXlrodu/3xvbFTPbabkVHOXYDg4kvbzpayF36H7JU13MWw1YtxAemKBX+I1SgJ7b7t6CBVPSooQtNfFCOipSVEVhnCxqvkgzCXVprlqA0VzlTE3IL39qL+2M98SLnuVnj8SQjPv5J0VURmjdMkcW50STp/1H6qsAfTcuhi3VIViBZedi2i6Uc1etQJKaLy+AMwh/aRABHzO+lbqN3OfZpg6cf62t75iX3/2Mu4JCTveeY3qO/ayenOYogNsWDRNdDHzgcfV9qZEV/VMQPUagrUUrtTQ5kkiOefiMKiz7g9s0AU0xvWQa97inIwxblqtlhMnyZgJ2HVviTw81CTTgu69ZRNSKlw95uoPXqvH3xx10YnfAzynIuoVLTNiSxv9bU0Cg4jsHVH6wi2YY4jZiManulcheIspYfET92PYN9eCq/ItV6laMxodRbjjfTQ8lXWECpv6OdjjaZnAe/OnsnbUlI4cezavt2uCeG7qGLOHDK18C1l7RoEth7VU23i+WMUvWMzxl9dx8LY7FNZ+1skz6x0Z7K2PCNgsWw66zpe1Dmk4htwBo04FV2u7fay7mwzRkghFLz1BsYf/AESe7RDXjYxug/xxnUI+UhWEfdx7SnbXemUsEdaspmQsDIIUHp3F2r/8bc4uOQGyLQCrHwI6sA+CEJEYYvvgOilZWYevdt8SLertDmJ0TJg2yKoQXt52jb/JV3vyhCi2yoLv/oexusTCI47Gcn6pxGsXQWlQteRYRk0NyuEP9/qK3DAvTHJlQgsuFKeS7dsZNpmp+vU4GDjUJznG71bGqPbgo4FMGjMcbUasZEXGiW36dlby2Pa6o5r6sIgsa8Ksvu/yy2egHiCKEVIohAB7SfRKY9TdJznR/ZTQDHE4yMujRiOKWP8wKiNMWXHjAaJQHg9Be50x+j8tJRPf5g4+Fsa8yACaB9a6+ieNK1oJk3mdLaaZOaH21zLlNjXAKV/OyFAn4sB/6Y8dKp8soerJtvs13Wy9ga6Kw3oH9wo1TxWYDgrW2FbZ1/ZBZVqViLto3muE+LbvK1azQe32zqgOHxLtdv8pLNY3m/Wbi3hcKQ1THSjjW+anVYpU9rfHro3lVq58U8Xf7Ix+N1vfsJ0wRkhRKMc61aW9RopPPyMSfu/8wGWzlnPToRvKNEdk1iiEFpaEcjUFwnGdSezDisK0T6wLfqhqWgf7OxVsfSyaLehUfTppk5tPDJ3caJGQvpySLiyC3baVcgegyzdCUQ3K+TBkGs+P5HvNz54uO5pt+v6KbW5Z8IYEpaopeZ+P0RCoJwp5rG2w2HSrlYTLQHcd+4x59Adc1S9TgJa3a8VkSedfnyI6Z3GqQkIq0RCRN6KecSx72UqPKhiR7y1kIdxFXHYKZpOr5iK63XFipYz3m4t2FZU774nlzZMaGtNNarf350FxTPOe6x+8MC02js75odxZbpQZfrNNIc8DRpIbDpaoka3aNgvbF03v7b1t0ZzsFWoZrvR1WitU3MtJ4CyxcqyoYjm7HbjMS3lkGGworQ1MQIzd/5rOGb+unjdqtT+h6BXceLpCQ68P6R377xZpfGM1HYnjSnzImE4pspFYcZHKd+V3cPtrEaxkAuZz/Ai09pklUqRvou6UQnZSWyn2A+n14QcmJZNQsx8KrBaSU2SzPCHzjUMDtdNdSyUA+VYzz1xq1p+69+Ult78urGdkf33/xDJ1s1Qw8Vj4s0vXGA2b55RuGgpbbmwkIKvrvftfdHs2CLCTy0VySvPQxSLhqook+3YyoW/EP6w0ubx0qCWf7R4usnS07s3FszhJ+67cl2zLn12ZYxu99drkGeck8g5x39C6/owMb+X0ud+NybPPLNsNq6bEEtuWj+0/NYt2s+PBLlLmXp9j0jSFSZNRenaz0kxOPQzEYYm2bA+iQ/tM+Uv3iErd3/DYDopcnwMessGItGqqXRiYqI8gOiztylTneg+0jj1/4jXUQynSbb6CW1Lv0leUZ2AWngBgouvWoHKOBG+IMlefl5HV9wk45fWZKiR9emafHbx/wQYAIAEQvupbBYOAAAAAElFTkSuQmCC" alt="" />
                                </div>
                                <h4>Site of the year 2020</h4>
                                <p>For most favorited design voted by NY City Style customers</p>
                                <a href="http://www.pinterest.com" className="dev_btn">view More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="awards_item wow fadeInUp">
                                <div className="icon">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjI2NEI1ODYyNDkwMTFFNjhDQUNGM0QzQUZFQzlCMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjI2NEI1ODcyNDkwMTFFNjhDQUNGM0QzQUZFQzlCMTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OUMzM0ZFMTI0ODYxMUU2OENBQ0YzRDNBRkVDOUIxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OUMzM0ZFMjI0ODYxMUU2OENBQ0YzRDNBRkVDOUIxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3I/2gAAAN/SURBVHja7Jp7iExRHMfPHbuW3RFlE9IUEoWSEjaJpIhalLzyiCV5RB7teuWRQloi5f3fSEge8Ydn/KVVtEUbkmWyu+02HrN227FrXN9f97eZtpk55969d+bstL/61O7e371nf+ee3+uca5imKbJBfCJLJGsMyQF3QB/w18Z9BoiBH+ADeANegU/Ai7W6G8wCrQmu9QD1Bnwk5sKbaQJvwVNwF1S4bMgtMC/F9QgZ8MuFgfxgEs/cM/AQFLu4dJsl1xu98JFeYCa4De6Didng7LSuH4Ct2RC1+oKT4DIHlS4ffleDa2xYl88js8EV0DsThrRyZGti6OeWTow5BxzzIiHK5DwoB3n8u8lJqD8YDYo4Sg22Me5m8AJcdc0SJMSfZmrZS4WlhCGgDNSY6lILAgrPJoKSZ4V8Lr21r+Aov50binM4COzT1dm/gMU2fGApGKdr1KLiswycVtDNBxt1D787uIiUyUpektoa0gbWgCCX/MkkF2zXPSF+BpvAO4leMecXrTN7BJyR6FBeOsQ+o3WJQomvUqIzHqzX3ZAIL7F7Er1SENDZkDHgNXgi0RvAXaa2hswFi7i+ikp0VzkJx+ky5DeX8BXcYKUSKk4PcwDQzpACMB8s4Lb3pkR/OliuoyEj4hJfjNuCRsk9VFAW6mRIPodWkgnsA+QrlyT3DeMyRxtD6J8fFVeObOMQu1NhiVHIHsqdacYNKenQ01AoXshV8gkQlvjWQaWeSKFDPKDYxSWiCDQneGY1KGSdEsn4UVDnRofoVPw844nqpwBXxoJ3VYKScDwwU0uLlsI5kXy7lMZdC/rxjkypih+k25ACTnrLJHrD2X9IasFZnQyh/pvOW1Yo6sfniVMKuaVThrQp6IwV1v7uczBDcez37EPtUqPY5zve6qElMBn0jNugy+UNuZHCOhehIs/ONijVXltAQ4e/VzpeCwrh1wvZlSRcU0iucvC8UCYOQy+CI0muhbnl1bYfaReqrzZIdK4L63BIS0NMnmnqyf9IdKl02SPk54ZpN4S2hJaA/ZL9rXiho+4LuhjSwv4wTVgnVXblOAjZMcRw2YAGzuxTwTphbWw7kTobjm/QBwNR8f8Qx4nQ/fXgJXgMHoFqlyYlj585RaL3PYerT7+w9wmHj5cOzdpHUCWsTzm+ebBpUc4TlazCoE2KsNH9mVO3Id7IPwEGAAD/zjp312RFAAAAAElFTkSuQmCC" alt="" />
                                </div>
                                <h4>Theme of the day 2021</h4>
                                <p>For most favorited design voted by NY City Style customers</p>
                                <a href="http://www.pinterest.com" className="dev_btn">view More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="awards_item wow fadeInUp">
                                <div className="icon">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjI2NEI1ODYyNDkwMTFFNjhDQUNGM0QzQUZFQzlCMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjI2NEI1ODcyNDkwMTFFNjhDQUNGM0QzQUZFQzlCMTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OUMzM0ZFMTI0ODYxMUU2OENBQ0YzRDNBRkVDOUIxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OUMzM0ZFMjI0ODYxMUU2OENBQ0YzRDNBRkVDOUIxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3I/2gAAAN/SURBVHja7Jp7iExRHMfPHbuW3RFlE9IUEoWSEjaJpIhalLzyiCV5RB7teuWRQloi5f3fSEge8Ydn/KVVtEUbkmWyu+02HrN227FrXN9f97eZtpk55969d+bstL/61O7e371nf+ee3+uca5imKbJBfCJLJGsMyQF3QB/w18Z9BoiBH+ADeANegU/Ai7W6G8wCrQmu9QD1Bnwk5sKbaQJvwVNwF1S4bMgtMC/F9QgZ8MuFgfxgEs/cM/AQFLu4dJsl1xu98JFeYCa4De6Didng7LSuH4Ct2RC1+oKT4DIHlS4ffleDa2xYl88js8EV0DsThrRyZGti6OeWTow5BxzzIiHK5DwoB3n8u8lJqD8YDYo4Sg22Me5m8AJcdc0SJMSfZmrZS4WlhCGgDNSY6lILAgrPJoKSZ4V8Lr21r+Aov50binM4COzT1dm/gMU2fGApGKdr1KLiswycVtDNBxt1D787uIiUyUpektoa0gbWgCCX/MkkF2zXPSF+BpvAO4leMecXrTN7BJyR6FBeOsQ+o3WJQomvUqIzHqzX3ZAIL7F7Er1SENDZkDHgNXgi0RvAXaa2hswFi7i+ikp0VzkJx+ky5DeX8BXcYKUSKk4PcwDQzpACMB8s4Lb3pkR/OliuoyEj4hJfjNuCRsk9VFAW6mRIPodWkgnsA+QrlyT3DeMyRxtD6J8fFVeObOMQu1NhiVHIHsqdacYNKenQ01AoXshV8gkQlvjWQaWeSKFDPKDYxSWiCDQneGY1KGSdEsn4UVDnRofoVPw844nqpwBXxoJ3VYKScDwwU0uLlsI5kXy7lMZdC/rxjkypih+k25ACTnrLJHrD2X9IasFZnQyh/pvOW1Yo6sfniVMKuaVThrQp6IwV1v7uczBDcez37EPtUqPY5zve6qElMBn0jNugy+UNuZHCOhehIs/ONijVXltAQ4e/VzpeCwrh1wvZlSRcU0iucvC8UCYOQy+CI0muhbnl1bYfaReqrzZIdK4L63BIS0NMnmnqyf9IdKl02SPk54ZpN4S2hJaA/ZL9rXiho+4LuhjSwv4wTVgnVXblOAjZMcRw2YAGzuxTwTphbWw7kTobjm/QBwNR8f8Qx4nQ/fXgJXgMHoFqlyYlj585RaL3PYerT7+w9wmHj5cOzdpHUCWsTzm+ebBpUc4TlazCoE2KsNH9mVO3Id7IPwEGAAD/zjp312RFAAAAAElFTkSuQmCC" alt="" />
                                </div>
                                <h4>Best design awwards</h4>
                                <p>For most favorited design voted by NY City Style customers</p>
                                <a href="http://www.pinterest.com" className="dev_btn">view More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d_blog_area_two sec_pad" id="blog">
                <div className="container">
                    <div className="dev_tittle mb_70">
                        <h2>My Blog</h2>
                        <p>Some of my personal article.</p>
                    </div>
                    <div className="react-reveal fadeInUp row">
                        <div className="col-lg-6 col-md-6">
                            <div className="blog_post">
                                <div className="blog_img">
                                    <img className="img-fluid" src="/static/media/post-img1.f64ecd0c.jpg" alt="" />
                                    <div className="post_date">Jan 14</div>
                                </div>
                                <div className="post_content">
                                    <div className="blog-meta"><span><i className="icon_tags_alt"></i>BY : Tasnim</span><span><i className="icon_chat_alt"></i><a href="/#">0 comment</a></span></div>
                                    <a href="/#">
                                        <h2>Contrary to popular belief</h2>
                                    </a>
                                    <p>Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..</p>
                                    <a href="/#" className="read_btn">Read More<i className="arrow_right"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog_post">
                                <div className="blog_img">
                                    <img className="img-fluid" src="/static/media/post-img2.f97e894c.jpg" alt="" />
                                    <div className="post_date">Mar 30</div>
                                </div>
                                <div className="post_content">
                                    <div className="blog-meta"><span><i className="icon_tags_alt"></i>BY : Tasnim</span><span><i className="icon_chat_alt"></i><a href="/#">0 comment</a></span></div>
                                    <a href="/#">
                                        <h2>Behind the color</h2>
                                    </a>
                                    <p>Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..</p>
                                    <a href="/#" className="read_btn">Read More<i className="arrow_right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area contact-area-two bg_color dContact" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="get_info">
                                <div className="section_title_two undefined">
                                    <h6>Get in Touch</h6>
                                    <h2>Talk or Meet with Me</h2>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-phone"></i>
                                    <div className="media-body">
                                        <h6>Call Me Now</h6>
                                        <a href=".#">02934567845</a>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-chat"></i>
                                    <div className="media-body">
                                        <h6>Contact Me</h6>
                                        <a href=".#">john@gmail.com</a>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-pin"></i>
                                    <div className="media-body">
                                        <h6>Get Me Here</h6>
                                        <p>Z105 - London, UK</p>
                                    </div>
                                </div>
                                <div className="media get_item">
                                    <i className="flaticon-sound"></i>
                                    <div className="media-body">
                                        <h6>Listen To Me</h6>
                                        <a href=".#">john.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="react-reveal fadeInRight input_form">
                                <div className="section_title_two undefined">
                                    <h6>Contact us</h6>
                                    <h2>Let me know here Know Here</h2>
                                </div>
                                <form className="form_className">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" />
                                            <p></p>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email*" />
                                            <p></p>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*" />
                                            <p></p>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*" />
                                            <p></p>
                                        </div>
                                    </div>
                                    <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                                    <button type="submit" className="btn send_btn theme_btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-area-two d_footer_area">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-sm-4">
                            <ul className="react-reveal list_style">
                                <li><a href="http://www.linkedin.com/"><i className="social_facebook"></i></a></li>
                                <li><a href="http://www.twitter.com/"><i className="social_twitter"></i></a></li>
                                <li><a href="http://www.googleplus.com"><i className="social_googleplus"></i></a></li>
                                <li><a href="http://www.pinterest.com"><i className="social_pinterest"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-8 text-right">
                            <h6>Made with love by <a href="https://themeforest.net/user/blazethemez">Blazethemez</a></h6>
                            <p>© 2020 Blazethemez - All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;