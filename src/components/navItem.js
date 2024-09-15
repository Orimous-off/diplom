export default function NavItem({logo, navItemName}) {
    return (
        <div className="NavItem">
            <div className="navigationIconContainer">
                <img src={logo} alt={navItemName}/>
            </div>
            <p>{navItemName}</p>
        </div>
    );
}