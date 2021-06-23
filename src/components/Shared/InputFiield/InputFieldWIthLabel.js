import { useState } from 'react';

import './InputField.css';

const InputFieldWithLabel = ({
    type,
    id,
    name,
    className,
    autocomplete,
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
        <label className="input">
            <input type={type} id={id} name={name} className={className} autocomplete={autocomplete}
                // onChange={minimiseInputInternalLabel}
                onFocus={minimiseInputInternalLabel}
                onPaste={minimiseInputInternalLabel}
                // onInput={minimiseInputInternalLabel}
                onKeyDown={minimiseInputInternalLabel}
                onBlur={checkUserCurrentInputString}
            />
            <label htmlFor={id} className={`placeLabel ${minimise}`}>
                {children}
            </label>
        </label>
    )
}

export default InputFieldWithLabel;