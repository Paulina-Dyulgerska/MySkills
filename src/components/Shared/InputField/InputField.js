import './InputField.css';

const InputField = ({
    wrapperClassName,
    htmlFor,
    labelText,
    type,
    id,
    name,
    inputClassName,
    placeholder,
    iconClassName,
}) => {

    return (
        <article className={`input ${wrapperClassName}`}>
            {htmlFor && <label htmlFor={htmlFor}>{labelText}</label>}
            <input type={type} id={id} name={name} className={inputClassName} placeholder={placeholder} />
            {iconClassName && <i className={iconClassName}></i>}
            <span className="actions"></span>
        </article>
    )
}

export default InputField;