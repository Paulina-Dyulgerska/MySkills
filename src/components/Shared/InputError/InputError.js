const InputError = ({ 
    children,
 }) => {
    if (!children) {
        return null;
    }
    console.log('Hi from input error component')
    return <span className="inputError">{children}</span>;
}

export default InputError;