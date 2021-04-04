import './Popup.css';

const Popup = props => {
  return (
    <article className="popup-box">
      <article className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </article>
    </article>
  );
};
 
export default Popup;