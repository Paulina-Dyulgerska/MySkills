import { useState, useEffect, useLayoutEffect, useRef } from 'react';

import './ScrollTop.css';

const ScrollBackToTop = ({
    parentDiv,
}) => {
    // componentDidMount: function() {
    //     window.addEventListener('scroll', this.handleScroll);
    // },

    // componentWillUnmount: function() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },

    // handleScroll: function(event) {
    //     let scrollTop = event.srcElement.body.scrollTop,
    //         itemTranslate = Math.min(0, scrollTop/3 - 60);

    //     this.setState({
    //       transform: itemTranslate
    //     });
    // },
    // <ScrollableComponent
    //  onScroll={this.handleScroll}
    // />

    // My solution for making a responsive navbar ( position: 'relative' when not scrolling and fixed when scrolling and not at the top of the page)
    // constructor(props){
    //     this.handleScroll = this.handleScroll.bind(this)
    // }
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    // handleScroll(event) {
    //     if (window.scrollY === 0 && this.state.scrolling === true) {
    //         this.setState({scrolling: false});
    //     }
    //     else if (window.scrollY !== 0 && this.state.scrolling !== true) {
    //         this.setState({scrolling: true});
    //     }
    // }
    //     <Navbar
    //             style={{color: '#06DCD6', borderWidth: 0, position: this.state.scrolling ? 'fixed' : 'relative', top: 0, width: '100vw', zIndex: 1}}
    //         ></Navbar>

    const [show, handleShow] = useState(false);
    const [offsetY, setOffsetY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);

    // useEffect(() => {
    // useLayoutEffect is used, because it is identical to useEffect, but it fires synchronously after all DOM mutations
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            setOffsetY((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) - 250);
            setOffsetX((window.innerWidth - parentDiv.current.offsetWidth) / 2 )

            if (window.pageYOffset > 60) {
                handleShow(true);
            } else handleShow(false);
        });

        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener('scroll', handleShow);
        };
    }, []);

    const backToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    console.log(`${offsetY} - offset 2`);
    console.log(window.innerHeight);
    console.log(document.documentElement.clientHeight);
    // console.log(parentDiv.current.offsetWidth + 'parent width from the child')
    // var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    return (
        <>
            {show && (
                <div className="arrow-icon-hd"
                    onClick={backToTop}
                    style={{
                        transform: `translateY(${offsetY}px)`,
                        right: `${offsetX}px`
                    }}
                >
                    <div className="nvc-btn-icon">
                        <div className="icon-arrow"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollBackToTop;