import { useEffect, useState } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputFieldWIthLabelControlled = ({
    wrapperClassName,
    type,
    id,
    name,
    className,
    autoComplete,
    children,
    validateFieldFunction,
    errorMessage,
    onChangeShowPasswordToggler,
    defaultValue,
    // onValueChange,
    setValidationErrors,
}) => {

    const [minimise, setMinimise] = useState('');
    const [hasError, setHasError] = useState(false);
    // const [currentValue, setCurrentValue] = useState('');

    useEffect(() => {
        if (defaultValue) {
            setMinimise('minimise');
            // setCurrentValue(defaultValue)
            // onValueChange(name, currentValue)
        }
    }, [defaultValue])

    // const onUserEnteringData = (e) => {
    //     if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
    //         onChangeShowPasswordToggler(e.target.value);
    //     }
    //     setMinimise('minimise');
    //     // onValueChange(e);
    //     // setCurrentValue(e.target.value);
    // }

    const checkUserCurrentInputString = (e) => {
        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            onChangeShowPasswordToggler(e.target.value);
        }
        setMinimise('minimise');
        
        const userCurrentInputString = e.target.value;
        if (!userCurrentInputString) {
            setMinimise('');
        } else {
            // setCurrentValue(e.target.value);
            const isInputValid = validateFieldFunction(userCurrentInputString);
            console.log(isInputValid + ' hi from isInputValid');
            if (!isInputValid) {
                setHasError(true);
                setValidationErrors(ca => ({...ca, [e.target.name]: errorMessage}));
            } else {
                setHasError(false);
                setValidationErrors(ca => ({...ca, [e.target.name]: ''}));
            }
        }
    }

    return (
        <article className={wrapperClassName}>
            <input type={type} id={id} name={name} className={className} autoComplete={autoComplete}
                defaultValue={defaultValue}
                onChange={checkUserCurrentInputString}
                onFocus={checkUserCurrentInputString}
                onPaste={checkUserCurrentInputString}
                onKeyDown={checkUserCurrentInputString}
                onBlur={checkUserCurrentInputString}
            />
            <label htmlFor={id} className={`placeLabel ${minimise}`}>
                {children}
            </label>
            {hasError ? <InputError>{errorMessage}</InputError> : null}
        </article>
    )
}

export default InputFieldWIthLabelControlled;