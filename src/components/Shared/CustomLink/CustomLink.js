import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CustomLink = ({ history, location, match, staticContext, to, onClick, tag: Tag, ...rest }) => (
    <Tag
        {...rest}
        onClick={(event) => {
            onClick(event);
            history.push(to)
        }}
    />
);

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    onClick: PropTypes.func
};

CustomLink.defaultProps = {
    onClick: () => {}
};

export default withRouter(CustomLink);

//other solution:
// const CustomLink = (props) => {
//     const {
//       history,
//       location,
//       match,
//       staticContext,
//       to,
//       onClick,
//       // ⬆ filtering out props that `button` doesn’t know what to do with.
//       ...rest
//     } = props
//     return (
//       <button
//         {...rest} // `children` is just another prop!
//         onClick={(event) => {
//           onClick && onClick(event)
//           history.push(to)
//         }}
//       />
//     )
//   }
  
//   CustomLink.propTypes = {
//     to: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired
//   }
