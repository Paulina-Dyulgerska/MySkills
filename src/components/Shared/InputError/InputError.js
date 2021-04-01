const InputError = ({ 
    children,
 }) => {
    console.log('Hi from input error component')
    if (!children) {
        return null;
    }
    return <span className="inputError">{children}</span>;
}

export default InputError;