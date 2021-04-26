import '../Button.css';
import './ButtonSubmit.css';

import CustomLink from '../../CustomLink/CustomLink';

const ButtonCta = ({ to, children }) => {
    return (
        // <button className="btn-cta" type="submit">
        //     {children}
        // </button>
        <CustomLink
            tag='button'
            // to={`/pets/edit/${pet.id}`} // path
            to={to || '/'} 
            className='btn btn-submit'
            type='submit'
        >
            {children}
        </CustomLink>
    )
}

export default ButtonCta;