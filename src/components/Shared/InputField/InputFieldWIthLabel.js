import { useState } from 'react';

import './InputField.css';

const InputFieldWithLabel = ({
    wrapperClassName,
    type,
    id,
    name,
    className,
    autoComplete,
    children,
}) => {

    const [minimise, setMinimise] = useState('');

    const minimiseInputInternalLabel = () => {
        setMinimise('minimise');
    }

    const checkUserCurrentInputString = (e) => {
        const userCurrentInputString = e.target.value;
        if (userCurrentInputString === '') {
            setMinimise('');
        }
    }

    return (
        <article className={wrapperClassName}>
            <input type={type} id={id} name={name} className={className} autoComplete={autoComplete}
                onChange={minimiseInputInternalLabel}
                onFocus={minimiseInputInternalLabel}
                onPaste={minimiseInputInternalLabel}
                onKeyDown={minimiseInputInternalLabel}
                onBlur={checkUserCurrentInputString}
            />
            <label htmlFor={id} className={`placeLabel ${minimise}`}>
                {children}
            </label>
        </article>
    )
}

export default InputFieldWithLabel;