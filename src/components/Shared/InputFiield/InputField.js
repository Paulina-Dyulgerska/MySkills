import './InputField.css';

const Contact = ({
    htmlFor,
    labelText,
    type,
    id,
    name,
    className,
    placeholder,
    iconClassName,
}) => {

    return (
        <>
            {htmlFor && <label htmlFor={htmlFor}>{labelText}</label>}
            <span className="input">
                <input type={type} id={id} name={name} className={className} placeholder={placeholder} />
                {iconClassName && <i className={iconClassName}></i>}
                <span className="actions"></span>
            </span>
        </>
    )
}

export default Contact;