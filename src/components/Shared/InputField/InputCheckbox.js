import './InputField.css';

const InputCheckbox = ({
    wrapperClassName,
    labelText,
    type,
    id,
    name,
    inputClassName,
    checked,
    onChangeCheckbox,
}) => {

    // console.log(checked + ' is the value of rememberMe in InputCheckbox');

    // const [isChecked, setIsChecked] = useState(checked);
    // const onCheckedCheckBox = () => {
    //     setIsChecked(!isChecked);
    // }

    return (
        <article className={wrapperClassName}>
            <input type={type} id={id} name={name} className={inputClassName}
                checked={checked}
                onChange={(e)=> {onChangeCheckbox(e.target.checked)}} />
            <label htmlFor={id} className={""}>
                {labelText}
            </label>
        </article>
    )
}

export default InputCheckbox;