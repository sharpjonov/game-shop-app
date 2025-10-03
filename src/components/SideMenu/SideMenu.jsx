import React, { useState } from 'react'
import "./sidemenu.css"
import navListData from '../../data/navListData'
import NavListItem from '../NavListItem/NavListItem'
import socialListData from '../../data/socialListData'
import SocialListItem from '../SocialListItem/SocialListItem'
const SideMenu = ({active, sectionActive}) => {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialListData)

    const handleNavOnClick = (id, target) => {
        const newNavData = navData.map((el) => {
            el.active = false;
            if(el._id === id) el.active = true;
            return el;

        })
        setNavData(newNavData); 
        sectionActive(target);
    }

    return (
        <div className={`sideMenu ${active ? "active" : undefined}`}>
            <a href="/" className='logo'>
                <i className="bi bi-controller"></i>
                <span className="brand">Play</span>
            </a>
            <ul className="nav">
                {
                    navData.map((el) => (<NavListItem navOnClick={handleNavOnClick} key={el._id} item={el} />))
                }
            </ul>
            <ul className='social'>
                {
                    socialData.map((el) => (<SocialListItem key={el._id} item={el}  />))
                }
            </ul>
        </div>
    )
}

export default SideMenu