import '../Button.css';

const ButtonSubmit = ({
    className,
    dataAction,
    value
}) => {
    return (
        <input
            className={className}
            type="submit"
            data-action={dataAction}
            value={value}
        />
    )
}

export default ButtonSubmit;