import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const NavigationItem = (props) => {
    return (
        <li className="list-item" >
            <Link to={props.path || '/'}>
                {props.children}
            </Link >
        </li>

        // //the best option is this:
        // <CustomLink
        //     tag='li' // tag name
        //     to={props.path || '/'} // path
        //     className={style.listItem} //className
        // >
        //     {props.children}
        // </CustomLink>
    );
};

export default NavigationItem;