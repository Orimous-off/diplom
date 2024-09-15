import {NavLink} from "react-router-dom";
import NavItem from "./navItem";
import logoOrimous from "../assets/logoOrimous.svg";
import navItemDevelop from "../assets/navItemDevelop.svg";
import navItemDesign from "../assets/navItemDesign.svg";
import navItemInfo from "../assets/navItemInfo.svg";

export default function NavElements(props) {
    const navList = (
        <nav>
            <img src={logoOrimous} alt="Orimous"/>
            <ul>
                {props.posts.map((post) =>
                    <li key={post.id}>
                        <NavLink to={post.link} activeclassname="active">
                            <NavItem logo={post.logo} navItemName={post.title}/>
                        </NavLink>
                    </li>
                )}
            </ul>
            <a href="" className="darkMode">
                <svg height="30" width="30" fill="none" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.0001 5.59862C13.1898 5.59895 11.4136 6.09069 9.86085 7.02138C8.30811 7.95208 7.03715 9.28681 6.18352 10.8832C5.32989 12.4796 4.92562 14.2778 5.01384 16.0859C5.10205 17.8941 5.67944 19.6443 6.68441 21.1501C7.68939 22.6558 9.08424 23.8605 10.7202 24.6356C12.3562 25.4107 14.1718 25.7272 15.9736 25.5513C17.7753 25.3754 19.4955 24.7137 20.9506 23.6369C22.4058 22.56 23.5413 21.1083 24.2361 19.4366C24.5771 18.6166 23.7601 17.7926 22.9381 18.1266C21.5293 18.6973 19.965 18.7562 18.5173 18.293C17.0695 17.8299 15.8299 16.874 15.0139 15.5916C14.1978 14.3092 13.8571 12.7814 14.0508 11.2738C14.2445 9.76615 14.9604 8.37409 16.0741 7.33962L16.1511 7.25962C16.7021 6.62962 16.2641 5.60662 15.3931 5.60662H15.1271L15.0591 5.60062L14.9991 5.59862H15.0001Z"
                        fill="#00201B"/>
                </svg>
            </a>
        </nav>
    );
    return navList; // Changed from returning an object to returning the JSX element
}

export const navigationElementsList = [
    {id: 1, title: 'Разработка', logo: navItemDevelop, link: '/'},
    {id: 2, title: 'Дизайн', logo: navItemDesign, link: 'design'},
    {id: 3, title: 'О проекте', logo: navItemInfo, link: 'info'},
];