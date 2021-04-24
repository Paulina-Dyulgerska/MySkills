import '../Button.css'
import './ButtonCta.css';

import CustomLink from '../../CustomLink/CustomLink';

const ButtonCta = ({ to, children }) => {
    return (
        // <button className="btn-cta" type="button">
        //     {children}
        // </button>
        <CustomLink
            tag='button'
            // to={`/pets/edit/${pet.id}`} // path
            to={to} 
            className='btn btn-cta'
            type='button'
        >
            {children}
        </CustomLink>
    )
}

export default ButtonCta;