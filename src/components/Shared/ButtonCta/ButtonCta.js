import './ButtonCta.css';

const ButtonCta = ({ children }) => {
    return (
        <button className="btn-cta">
            {children}
        </button>
    )
}

export default ButtonCta;