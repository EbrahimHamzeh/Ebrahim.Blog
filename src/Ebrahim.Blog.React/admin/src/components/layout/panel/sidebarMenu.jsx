import React from 'react'
import { Link } from "react-router-dom";

const mainMenu = [
    {
        title: "داشبورد",
        href: "/admin/dashboard",
        icon: 'flaticon-home'
    },
    {
        title: "تنظیمات",
        href: "",
        icon: 'flaticon-cogwheel-1',
        subMenu: [
            {
                title: 'کاربران',
                href: '/admin/users'
            }, {
                title: 'خطاها',
                href: '/admin/logs'
            }, {
                title: 'گزارش‌تمام‌عملیات',
                href: '/admin/profilers'
            }
        ]
    }
]

const SideBarMenu = props => {
    return (
        <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
            <div id="kt_aside_menu" data-scroll-x="true" className="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                <ul className="kt-menu__nav ">
                    {mainMenu.map(parent => (
                        <li className={`kt-menu__item ${parent.subMenu ?? 'kt-menu__item--submenu'}`} aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                            <Menu parent={parent}></Menu>
                            <SubMenu childs={parent.subMenu}></SubMenu>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Menu = ({ parent }) => {
    return (parent.href ? <Link to={parent.href} className={`kt-menu__link`}> <i className={`kt-menu__link-icon ${parent.icon}`}></i><span className="kt-menu__link-text">{parent.title}</span> </Link>
     : <a href="#" className={`kt-menu__link kt-menu__toggle`}> <i className={`kt-menu__link-icon ${parent.icon}`}></i><span className="kt-menu__link-text">{parent.title}</span><i className="kt-menu__ver-arrow la la-angle-right"></i> </a>
    )
}

const SubMenu = ({ childs }) => {
    return childs ? (
        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
            <ul className="kt-menu__subnav">
                {childs.map(child => (
                    <li className="kt-menu__item" aria-haspopup="true">
                        <Link to={child.href} className="kt-menu__link">
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">{child.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
}

export default SideBarMenu