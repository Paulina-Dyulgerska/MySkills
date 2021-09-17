import { useState } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputFieldWithLabel = ({
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
    setValidationErrors,
}) => {

    const [minimise, setMinimise] = useState('');
    const [hasError, setHasError] = useState(false);

    // const onUserEnteringData = (e) => {
    //     if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
    //         onChangeShowPasswordToggler(e.target.value);
    //     }
    //     setMinimise('minimise');
    // }

    const checkUserCurrentInputString = async (e) => {
        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            onChangeShowPasswordToggler(e.target.value);
        }
        setMinimise('minimise');
        
        const userCurrentInputString = e.target?.value;
        if (!userCurrentInputString) {
            setMinimise('');
        } else {
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

export default InputFieldWithLabel;