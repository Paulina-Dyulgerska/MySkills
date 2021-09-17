import '../Button.css'

import CustomLink from '../../CustomLink/CustomLink';

const ButtonCta = ({ to, children, onClick }) => {
    return (
        // <button className="btn-cta" type="button">
        //     {children}
        // </button>
        <CustomLink
            tag='button'
            to={to || '/'} 
            className='btn btn-cta'
            type='button'
            onClick={onClick}
        >
            {children}
        </CustomLink>
    )
}

export default ButtonCta;