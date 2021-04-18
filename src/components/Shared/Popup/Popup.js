import './Popup.css';

const Popup = props => {
  return (
    <article className="popup-box" onClick={props.handleClose}>
      <article className="box">
        <span className="close-icon">x</span>
        {props.content}
      </article>
    </article>
  );
};

export default Popup;