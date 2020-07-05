import React from 'react'
import bg1 from '../../media/misc/bg-1.jpg';
import englishFlag from '../../media/flag/english.svg';
import farsiFlag from '../../media/flag/farsi.svg';

const PanelLayout = props => {
    return (<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close"></i></button>

        <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
            id="kt_aside">
            <div className="kt-aside__brand kt-grid__item " id="kt_aside_brand">
                <div className="kt-aside__brand-logo">
                    <a href="demo1/index.html">
                        <img alt="Logo" src="./assets/media/logos/logo-light.png" />
                    </a>
                </div>

                <div className="kt-aside__brand-tools">
                    <button className="kt-aside__brand-aside-toggler" id="kt_aside_toggler">
                        <span><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                    <path
                                        d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                                        id="Path-94" fill="#000000" fillRule="nonzero"
                                        transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) " />
                                    <path
                                        d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                                        id="Path-94" fill="#000000" fillRule="nonzero" opacity="0.3"
                                        transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) " />
                                </g>
                            </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                            width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                <path
                                    d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
                                    id="Path-94" fill="#000000" fillRule="nonzero" />
                                <path
                                    d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
                                    id="Path-94" fill="#000000" fillRule="nonzero" opacity="0.3"
                                    transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) " />
                            </g>
                        </svg></span>
                    </button>
                </div>
            </div>
            <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">

                <div id="kt_aside_menu" data-scroll-x="true" className="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1"
                    data-ktmenu-dropdown-timeout="500">

<ul className="kt-menu__nav ">
                        <li className="kt-menu__item " aria-haspopup="true"><a href="demo1/index.html"
                                className="kt-menu__link "><i className="kt-menu__link-icon flaticon-home"></i><span
                                    className="kt-menu__link-text">Dashboard</span></a></li>
                        <li className="kt-menu__section ">
                            <h4 className="kt-menu__section-text">Custom</h4>
                            <i className="kt-menu__section-icon flaticon-more-v2"></i>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-web"></i><span
                                    className="kt-menu__link-text">Applications</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Applications</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Users</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/list-default.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Default</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/list-datatable.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Datatable</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/list-columns-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 1</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/list-columns-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 2</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/add-user.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Add User</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/edit-user.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Edit User</span></a></li>
                                                <li className="kt-menu__item  kt-menu__item--submenu"
                                                    aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a
                                                         className="kt-menu__link kt-menu__toggle"><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Profile 1</span><i
                                                            className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                                    <div className="kt-menu__submenu "><span
                                                            className="kt-menu__arrow"></span>
                                                        <ul className="kt-menu__subnav">
                                                            <li className="kt-menu__item " aria-haspopup="true"><a
                                                                    href="demo1/custom/apps/user/profile-1/overview.html"
                                                                    className="kt-menu__link "><i
                                                                        className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                                        className="kt-menu__link-text">Overview</span></a>
                                                            </li>
                                                            <li className="kt-menu__item " aria-haspopup="true"><a
                                                                    href="demo1/custom/apps/user/profile-1/personal-information.html"
                                                                    className="kt-menu__link "><i
                                                                        className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                                        className="kt-menu__link-text">Personal
                                                                        Information</span></a></li>
                                                            <li className="kt-menu__item " aria-haspopup="true"><a
                                                                    href="demo1/custom/apps/user/profile-1/account-information.html"
                                                                    className="kt-menu__link "><i
                                                                        className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                                        className="kt-menu__link-text">Account
                                                                        Information</span></a></li>
                                                            <li className="kt-menu__item " aria-haspopup="true"><a
                                                                    href="demo1/custom/apps/user/profile-1/change-password.html"
                                                                    className="kt-menu__link "><i
                                                                        className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                                        className="kt-menu__link-text">Change
                                                                        Password</span></a></li>
                                                            <li className="kt-menu__item " aria-haspopup="true"><a
                                                                    href="demo1/custom/apps/user/profile-1/email-settings.html"
                                                                    className="kt-menu__link "><i
                                                                        className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                                        className="kt-menu__link-text">Email
                                                                        Settings</span></a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/profile-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Profile 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/profile-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Profile 3</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/user/profile-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Profile 4</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Contacts</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/contacts/list-columns.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/contacts/list-datatable.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Datatable</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/contacts/view-contact.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">View Contact</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/contacts/add-contact.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Add Contact</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/contacts/edit-contact.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Edit Contact</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Chat</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/chat/private.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Private</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/chat/group.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Group</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/chat/popup.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Popup</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Projects</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/list-columns-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 1</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/list-columns-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 2</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/list-columns-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 3</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/list-columns-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Columns 4</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/list-datatable.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">List - Datatable</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/view-project.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">View Project</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/add-project.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Add Project</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/projects/edit-project.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Edit Project</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Support Center</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/home-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Home 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/home-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Home 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/faq-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">FAQ 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/faq-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">FAQ 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/faq-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">FAQ 3</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/feedback.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Feedback</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/apps/support-center/license.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">License</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/custom/apps/inbox.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                                className="kt-menu__link-text">Inbox</span><span
                                                className="kt-menu__link-badge"><span
                                                    className="kt-badge kt-badge--danger kt-badge--inline">new</span></span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-tabs"></i><span
                                    className="kt-menu__link-text">Pages</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Pages</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Wizard</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/wizard/wizard-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Wizard 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/wizard/wizard-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Wizard 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/wizard/wizard-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Wizard 3</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/wizard/wizard-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Wizard 4</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Pricing Tables</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/pricing/pricing-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Pricing Tables 1</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/pricing/pricing-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Pricing Tables 2</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/pricing/pricing-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Pricing Tables 3</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/pricing/pricing-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Pricing Tables 4</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Invoices</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/invoices/invoice-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Invoice 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/invoices/invoice-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Invoice 2</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">FAQ</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/faq/faq-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">FAQ 1</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">User Pages</span><span
                                                className="kt-menu__link-badge"><span
                                                    className="kt-badge kt-badge--rounded kt-badge--brand">2</span></span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 3</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 4</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-5.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 5</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/user/login-6.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Login 6</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Error Pages</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-1.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 1</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-3.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 3</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-4.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 4</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-5.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 5</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/custom/pages/error/error-6.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Error 6</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__section ">
                            <h4 className="kt-menu__section-text">Layout</h4>
                            <i className="kt-menu__section-icon flaticon-more-v2"></i>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-layers"></i><span
                                    className="kt-menu__link-text">Subheaders</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Subheaders</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/subheader/toolbar.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Toolbar Nav</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/subheader/actions.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Actions Buttons</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/subheader/tabbed.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Tabbed Nav</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/subheader/classic.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Classic</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/subheader/none.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">None</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--open kt-menu__item--here"
                            aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-interface-8"></i><span
                                    className="kt-menu__link-text">General</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">General</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/general/fixed-content.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Fixed Content</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/general/minimized-aside.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Minimized Aside</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/general/no-aside.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">No Aside</span></a></li>
                                    <li className="kt-menu__item  kt-menu__item--active" aria-haspopup="true"><a
                                            href="demo1/layout/general/empty-page.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Empty Page</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/general/fixed-footer.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Fixed Footer</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/layout/general/no-header-menu.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">No Header Menu</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true"><a target="_blank"
                                href="https://keenthemes.com/metronic/preview/demo1/builder.html"
                                className="kt-menu__link "><i className="kt-menu__link-icon flaticon-cogwheel-1"></i><span
                                    className="kt-menu__link-text">Builder</span></a></li>
                        <li className="kt-menu__section ">
                            <h4 className="kt-menu__section-text">CRUD</h4>
                            <i className="kt-menu__section-icon flaticon-more-v2"></i>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-interface-7"></i><span
                                    className="kt-menu__link-text">Forms</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Forms</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Form Controls</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/base.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Base Inputs</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/input-group.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Input Groups</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/checkbox.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Checkbox</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/radio.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Radio</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/switch.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Switch</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/controls/option.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Mega Options</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Form Widgets</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-datepicker.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Datepicker</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-datetimepicker.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Datetimepicker</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-timepicker.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Timepicker</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-daterangepicker.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Daterangepicker</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/tagify.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Tagify</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-touchspin.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Touchspin</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-maxlength.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Maxlength</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-switch.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Switch</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-multipleselectsplitter.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Multiple Select
                                                            Splitter</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-select.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Bootstrap Select</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/select2.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Select2</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/typeahead.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Typeahead</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/nouislider.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">noUiSlider</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/form-repeater.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Form Repeater</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/ion-range-slider.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Ion Range Slider</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/input-mask.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Input Masks</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/quill.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Quill Text Editor</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/summernote.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Summernote WYSIWYG</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/bootstrap-markdown.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Markdown Editor</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/autosize.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Autosize</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/clipboard.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Clipboard</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/dropzone.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Dropzone</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/widgets/recaptcha.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Google reCaptcha</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Form Layouts</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/layouts/default-forms.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Default Forms</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/layouts/multi-column-forms.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Multi Column Forms</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/layouts/action-bars.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Basic Action Bars</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/layouts/sticky-action-bar.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Sticky Action Bar</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Form Validation</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/validation/states.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Validation States</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/validation/form-controls.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Form Controls</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/forms/validation/form-widgets.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Form Widgets</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-tabs"></i><span
                                    className="kt-menu__link-text">KTDatatable</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">KTDatatable</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Base</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/data-local.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Local Data</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/data-json.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">JSON Data</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/data-ajax.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Ajax Data</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/html-table.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">HTML Table</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/local-sort.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Local Sort</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/base/translation.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Translation</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Advanced</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/record-selection.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Record Selection</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/row-details.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Row Details</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/modal.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Modal Examples</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/column-rendering.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Column Rendering</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/column-width.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Column Width</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/advanced/vertical.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Vertical Scrolling</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Child Datatables</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/child/data-local.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Local Data</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/child/data-ajax.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Remote Data</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">API</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/api/methods.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">API Methods</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/metronic-datatable/api/events.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Events</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-list-3"></i><span
                                    className="kt-menu__link-text">Datatables.net</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Datatables.net</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Basic</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/basic/basic.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Basic Tables</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/basic/scrollable.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Scrollable Tables</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/basic/headers.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Complex Headers</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/basic/paginations.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Pagination Options</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Advanced</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/column-rendering.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Column Rendering</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/multiple-controls.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Multiple Controls</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/column-visibility.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Column Visibility</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/row-callback.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Row Callback</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/row-grouping.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Row Grouping</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/advanced/footer-callback.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Footer Callback</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Data sources</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/data-sources/html.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">HTML</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/data-sources/javascript.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Javascript</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/data-sources/ajax-client-side.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Ajax Client-side</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/data-sources/ajax-server-side.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Ajax Server-side</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Search Options</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/search-options/column-search.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Column Search</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/search-options/advanced-search.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Advanced Search</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Extensions</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/buttons.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Buttons</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/colreorder.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">ColReorder</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/keytable.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">KeyTable</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/responsive.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Responsive</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/rowgroup.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">RowGroup</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/rowreorder.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">RowReorder</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/scroller.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Scroller</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/crud/datatables/extensions/select.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">Select</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-upload-1"></i><span
                                    className="kt-menu__link-text">File Upload</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/crud/file-upload/dropzonejs.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">DropzoneJS</span><span
                                                className="kt-menu__link-badge"><span
                                                    className="kt-badge kt-badge--danger kt-badge--inline">new</span></span></a>
                                    </li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/crud/file-upload/uppy.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Uppy</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__section ">
                            <h4 className="kt-menu__section-text">Components</h4>
                            <i className="kt-menu__section-icon flaticon-more-v2"></i>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-layers"></i><span
                                    className="kt-menu__link-text">Base</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Base</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/colors.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">State Colors</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/typography.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Typography</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/buttons.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Buttons</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/button-group.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Button Group</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/dropdown.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Dropdown</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/tabs/bootstrap.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Bootstrap Tabs</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/tabs/line.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Line Tabs</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/accordions.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Accordions</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/tables.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Tables</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/progress.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Progress</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/modal.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Modal</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/alerts.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Alerts</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/popover.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Popover</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/base/tooltip.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Tooltip</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-background"></i><span
                                    className="kt-menu__link-text">Custom</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Custom</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/badge.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Badge</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/navs.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Navigations</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/lists.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Lists</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/notes.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Notes</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/timeline.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Timeline</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/pagination.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Pagination</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/media.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Media</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/spinners.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Spinners</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/iconbox.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Iconbox</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/infobox.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Infobox</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/callout.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Callout</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/ribbon.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Ribbons</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/custom/miscellaneous.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Miscellaneous</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-light"></i><span
                                    className="kt-menu__link-text">Extended</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Extended</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/blockui.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Block UI</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/perfect-scrollbar.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Perfect Scrollbar</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/treeview.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Tree View</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/bootstrap-notify.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Bootstrap Notify</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/toastr.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Toastr</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/sweetalert2.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">SweetAlert2</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/uppy.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Uppy File Upload</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/extended/dual-listbox.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Dual Listbox</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-open-box"></i><span
                                    className="kt-menu__link-text">Icons</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/icons/flaticon.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Flaticon</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/icons/fontawesome5.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Fontawesome 5</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/icons/lineawesome.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Lineawesome</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/icons/socicons.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Socicons</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/icons/svg.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">SVG Icons</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-interface-1"></i><span
                                    className="kt-menu__link-text">Portlets</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Portlets</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/base.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Base Portlets</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/advanced.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Advanced Portlets</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/tabbed.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Tabbed Portlets</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/draggable.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Draggable Portlets</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/tools.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Portlet Tools</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/portlets/sticky-head.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Sticky Head</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-rocket"></i><span
                                    className="kt-menu__link-text">Widgets</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Widgets</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/widgets/lists.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Lists</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/widgets/charts.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Charts</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/widgets/general.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">General</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-calendar"></i><span
                                    className="kt-menu__link-text">Calendar</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Calendar</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/calendar/basic.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Basic Calendar</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/calendar/list-view.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">List Views</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/calendar/google.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Google Calendar</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/calendar/external-events.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">External Events</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/calendar/background-events.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Background Events</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-diagram"></i><span
                                    className="kt-menu__link-text">Charts</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Charts</span></span></li>
                                    <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                        data-ktmenu-submenu-toggle="hover"><a 
                                            className="kt-menu__link kt-menu__toggle"><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">amCharts</span><i
                                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                            <ul className="kt-menu__subnav">
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/components/charts/amcharts/charts.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">amCharts Charts</span></a>
                                                </li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/components/charts/amcharts/stock-charts.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">amCharts Stock
                                                            Charts</span></a></li>
                                                <li className="kt-menu__item " aria-haspopup="true"><a
                                                        href="demo1/components/charts/amcharts/maps.html"
                                                        className="kt-menu__link "><i
                                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                            className="kt-menu__link-text">amCharts Maps</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/charts/flotcharts.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Flot Charts</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/charts/google-charts.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Google Charts</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/charts/morris-charts.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Morris Charts</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-placeholder"></i><span
                                    className="kt-menu__link-text">Maps</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Maps</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/maps/google-maps.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Google Maps</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/maps/jqvmap.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">JQVMap</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                            data-ktmenu-submenu-toggle="hover"><a 
                                className="kt-menu__link kt-menu__toggle"><i
                                    className="kt-menu__link-icon flaticon-web"></i><span
                                    className="kt-menu__link-text">Utils</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span
                                            className="kt-menu__link"><span
                                                className="kt-menu__link-text">Utils</span></span></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/utils/session-timeout.html"
                                            className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Session Timeout</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a
                                            href="demo1/components/utils/idle-timer.html" className="kt-menu__link "><i
                                                className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                                className="kt-menu__link-text">Idle Timer</span></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
        <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">

<button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i
    className="la la-close"></i></button>
<div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">

<div id="kt_header_menu"
    className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
    <ul className="kt-menu__nav ">
        <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel kt-menu__item--active"
            data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a 
                className="kt-menu__link kt-menu__toggle"><span
                    className="kt-menu__link-text">Pages</span><i
                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
            <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                <ul className="kt-menu__subnav">
                    <li className="kt-menu__item " aria-haspopup="true"><a href="demo1/index.html"
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z"
                                            id="Combined-Shape" fill="#000000" />
                                        <path
                                            d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z"
                                            id="Path-53" fill="#000000" fillRule="nonzero"
                                            opacity="0.3" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">My
                                Account</span></a></li>
                    <li className="kt-menu__item " aria-haspopup="true"><a 
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                                            id="Combined-Shape" fill="#000000" opacity="0.3" />
                                        <path
                                            d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Task
                                Manager</span><span className="kt-menu__link-badge"><span
                                    className="kt-badge kt-badge--success kt-badge--rounded">2</span></span></a>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu"
                        data-ktmenu-submenu-toggle="hover" aria-haspopup="true"><a
                             className="kt-menu__link kt-menu__toggle"><span
                                className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z"
                                            id="Path-2" fill="#000000" fillRule="nonzero" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Team
                                Manager</span><i
                                className="kt-menu__hor-arrow la la-angle-right"></i><i
                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                        <div
                            className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                            <ul className="kt-menu__subnav">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Add Team
                                            Member</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Edit Team
                                            Member</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Delete Team
                                            Member</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Team Member
                                            Reports</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Assign Tasks</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Promote Team
                                            Member</span></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu"
                        data-ktmenu-submenu-toggle="hover" aria-haspopup="true"><a href="#"
                            className="kt-menu__link kt-menu__toggle"><span
                                className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,15 L6.27924078,15 L6.82339262,16.6324555 C7.09562072,17.4491398 7.8598984,18 8.72075922,18 L15.381966,18 C16.1395101,18 16.8320364,17.5719952 17.1708204,16.8944272 L18.118034,15 L22,15 Z"
                                            id="Combined-Shape" fill="#000000" />
                                        <path
                                            d="M2.5625,13 L5.92654389,7.01947752 C6.2807805,6.38972356 6.94714834,6 7.66969497,6 L16.330305,6 C17.0528517,6 17.7192195,6.38972356 18.0734561,7.01947752 L21.4375,13 L18.118034,13 C17.3604899,13 16.6679636,13.4280048 16.3291796,14.1055728 L15.381966,16 L8.72075922,16 L8.17660738,14.3675445 C7.90437928,13.5508602 7.1401016,13 6.27924078,13 L2.5625,13 Z"
                                            id="Path" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Projects
                                Manager</span><i
                                className="kt-menu__hor-arrow la la-angle-right"></i><i
                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                        <div
                            className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                            <ul className="kt-menu__subnav">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Latest
                                            Projects</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Ongoing
                                            Projects</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Urgent
                                            Projects</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Completed
                                            Projects</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Dropped
                                            Projects</span></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="kt-menu__item " aria-haspopup="true"><a 
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M4.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21 19.5,21 L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z M8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 Z M10.5857864,14 L9.17157288,15.4142136 C8.78104858,15.8047379 8.78104858,16.4379028 9.17157288,16.8284271 C9.56209717,17.2189514 10.1952621,17.2189514 10.5857864,16.8284271 L12,15.4142136 L13.4142136,16.8284271 C13.8047379,17.2189514 14.4379028,17.2189514 14.8284271,16.8284271 C15.2189514,16.4379028 15.2189514,15.8047379 14.8284271,15.4142136 L13.4142136,14 L14.8284271,12.5857864 C15.2189514,12.1952621 15.2189514,11.5620972 14.8284271,11.1715729 C14.4379028,10.7810486 13.8047379,10.7810486 13.4142136,11.1715729 L12,12.5857864 L10.5857864,11.1715729 C10.1952621,10.7810486 9.56209717,10.7810486 9.17157288,11.1715729 C8.78104858,11.5620972 8.78104858,12.1952621 9.17157288,12.5857864 L10.5857864,14 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Create New
                                Project</span></a></li>
                </ul>
            </div>
        </li>
        <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
            data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a 
                className="kt-menu__link kt-menu__toggle"><span
                    className="kt-menu__link-text">Features</span><i
                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
            <div className="kt-menu__submenu  kt-menu__submenu--fixed kt-menu__submenu--left"
                style={{width:'1000px' }}>
                <div className="kt-menu__subnav">
                    <ul className="kt-menu__content">
                        <li className="kt-menu__item ">
                            <h3 className="kt-menu__heading kt-menu__toggle"><i
                                    className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                    className="kt-menu__link-text">Task Reports</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                            <ul className="kt-menu__inner">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                width="24px" height="24px" viewBox="0 0 24 24"
                                                version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth="1" fill="none"
                                                    fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24"
                                                        height="24" />
                                                    <path
                                                        d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z"
                                                        id="Combined-Shape" fill="#000000" />
                                                    <path
                                                        d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z"
                                                        id="Path-53" fill="#000000"
                                                        fillRule="nonzero" opacity="0.3" />
                                                </g>
                                            </svg></span><span className="kt-menu__link-text">Latest
                                            Tasks</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                width="24px" height="24px" viewBox="0 0 24 24"
                                                version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth="1" fill="none"
                                                    fillRule="evenodd">
                                                    <polygon id="bound"
                                                        points="0 0 24 0 24 24 0 24" />
                                                    <path
                                                        d="M11.2600599,5.81393408 L2,16 L22,16 L12.7399401,5.81393408 C12.3684331,5.40527646 11.7359848,5.37515988 11.3273272,5.7466668 C11.3038503,5.7680094 11.2814025,5.79045722 11.2600599,5.81393408 Z"
                                                        id="Path-71" fill="#000000"
                                                        opacity="0.3" />
                                                    <path
                                                        d="M12.0056789,15.7116802 L20.2805786,6.85290308 C20.6575758,6.44930487 21.2903735,6.42774054 21.6939717,6.8047378 C21.8964274,6.9938498 22.0113578,7.25847607 22.0113578,7.535517 L22.0113578,20 L16.0113578,20 L2,20 L2,7.535517 C2,7.25847607 2.11493033,6.9938498 2.31738608,6.8047378 C2.72098429,6.42774054 3.35378194,6.44930487 3.7307792,6.85290308 L12.0056789,15.7116802 Z"
                                                        id="Combined-Shape" fill="#000000" />
                                                </g>
                                            </svg></span><span
                                            className="kt-menu__link-text">Pending Tasks</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                width="24px" height="24px" viewBox="0 0 24 24"
                                                version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth="1" fill="none"
                                                    fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24"
                                                        height="24" />
                                                    <path
                                                        d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                                        id="Combined-Shape" fill="#000000"
                                                        opacity="0.3" />
                                                    <path
                                                        d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z"
                                                        id="Combined-Shape" fill="#000000" />
                                                </g>
                                            </svg></span><span className="kt-menu__link-text">Urgent
                                            Tasks</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                width="24px" height="24px" viewBox="0 0 24 24"
                                                version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth="1" fill="none"
                                                    fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24"
                                                        height="24" />
                                                    <path
                                                        d="M11.6734943,8.3307728 L14.9993074,6.09979492 L14.1213255,5.22181303 C13.7308012,4.83128874 13.7308012,4.19812376 14.1213255,3.80759947 L15.535539,2.39338591 C15.9260633,2.00286161 16.5592283,2.00286161 16.9497526,2.39338591 L22.6066068,8.05024016 C22.9971311,8.44076445 22.9971311,9.07392943 22.6066068,9.46445372 L21.1923933,10.8786673 C20.801869,11.2691916 20.168704,11.2691916 19.7781797,10.8786673 L18.9002333,10.0007208 L16.6692373,13.3265608 C16.9264145,14.2523264 16.9984943,15.2320236 16.8664372,16.2092466 L16.4344698,19.4058049 C16.360509,19.9531149 15.8568695,20.3368403 15.3095595,20.2628795 C15.0925691,20.2335564 14.8912006,20.1338238 14.7363706,19.9789938 L5.02099894,10.2636221 C4.63047465,9.87309784 4.63047465,9.23993286 5.02099894,8.84940857 C5.17582897,8.69457854 5.37719743,8.59484594 5.59418783,8.56552292 L8.79074617,8.13355557 C9.76799113,8.00149544 10.7477104,8.0735815 11.6734943,8.3307728 Z"
                                                        id="Combined-Shape" fill="#000000" />
                                                    <polygon id="Path-111" fill="#000000"
                                                        opacity="0.3"
                                                        transform="translate(7.050253, 17.949747) rotate(-315.000000) translate(-7.050253, -17.949747) "
                                                        points="5.55025253 13.9497475 5.55025253 19.6640332 7.05025253 21.9497475 8.55025253 19.6640332 8.55025253 13.9497475" />
                                                </g>
                                            </svg></span><span
                                            className="kt-menu__link-text">Completed
                                            Tasks</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                width="24px" height="24px" viewBox="0 0 24 24"
                                                version="1.1" className="kt-svg-icon">
                                                <g stroke="none" strokeWidth="1" fill="none"
                                                    fillRule="evenodd">
                                                    <rect id="bound" x="0" y="0" width="24"
                                                        height="24" />
                                                    <path
                                                        d="M22,17 L22,21 C22,22.1045695 21.1045695,23 20,23 L4,23 C2.8954305,23 2,22.1045695 2,21 L2,17 L6.27924078,17 L6.82339262,18.6324555 C7.09562072,19.4491398 7.8598984,20 8.72075922,20 L15.381966,20 C16.1395101,20 16.8320364,19.5719952 17.1708204,18.8944272 L18.118034,17 L22,17 Z"
                                                        id="Combined-Shape" fill="#000000" />
                                                    <path
                                                        d="M2.5625,15 L5.92654389,9.01947752 C6.2807805,8.38972356 6.94714834,8 7.66969497,8 L16.330305,8 C17.0528517,8 17.7192195,8.38972356 18.0734561,9.01947752 L21.4375,15 L18.118034,15 C17.3604899,15 16.6679636,15.4280048 16.3291796,16.1055728 L15.381966,18 L8.72075922,18 L8.17660738,16.3675445 C7.90437928,15.5508602 7.1401016,15 6.27924078,15 L2.5625,15 Z"
                                                        id="Path" fill="#000000"
                                                        opacity="0.3" />
                                                    <path
                                                        d="M11.1288761,0.733697713 L11.1288761,2.69017121 L9.12120481,2.69017121 C8.84506244,2.69017121 8.62120481,2.91402884 8.62120481,3.19017121 L8.62120481,4.21346991 C8.62120481,4.48961229 8.84506244,4.71346991 9.12120481,4.71346991 L11.1288761,4.71346991 L11.1288761,6.66994341 C11.1288761,6.94608579 11.3527337,7.16994341 11.6288761,7.16994341 C11.7471877,7.16994341 11.8616664,7.12798964 11.951961,7.05154023 L15.4576222,4.08341738 C15.6683723,3.90498251 15.6945689,3.58948575 15.5161341,3.37873564 C15.4982803,3.35764848 15.4787093,3.33807751 15.4576222,3.32022374 L11.951961,0.352100892 C11.7412109,0.173666017 11.4257142,0.199862688 11.2472793,0.410612793 C11.1708299,0.500907473 11.1288761,0.615386087 11.1288761,0.733697713 Z"
                                                        id="Shape" fill="#000000"
                                                        fillRule="nonzero"
                                                        transform="translate(11.959697, 3.661508) rotate(-90.000000) translate(-11.959697, -3.661508) " />
                                                </g>
                                            </svg></span><span className="kt-menu__link-text">Failed
                                            Tasks</span></a></li>
                            </ul>
                        </li>
                        <li className="kt-menu__item ">
                            <h3 className="kt-menu__heading kt-menu__toggle"><i
                                    className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                    className="kt-menu__link-text">Profit Margins</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                            <ul className="kt-menu__inner">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Overall
                                            Profits</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Gross Profits</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Nett Profits</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Year to Date
                                            Reports</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Quarterly
                                            Profits</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Monthly
                                            Profits</span></a></li>
                            </ul>
                        </li>
                        <li className="kt-menu__item ">
                            <h3 className="kt-menu__heading kt-menu__toggle"><i
                                    className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                    className="kt-menu__link-text">Staff Management</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                            <ul className="kt-menu__inner">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Top Management</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Project
                                            Managers</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Development
                                            Staff</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Customer
                                            Service</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Sales and
                                            Marketing</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Executives</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="kt-menu__item ">
                            <h3 className="kt-menu__heading kt-menu__toggle"><i
                                    className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                    className="kt-menu__link-text">Tools</span><i
                                    className="kt-menu__ver-arrow la la-angle-right"></i></h3>
                            <ul className="kt-menu__inner">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Analytical
                                            Reports</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Customer CRM</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Operational
                                            Growth</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Social Media
                                            Presence</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Files and
                                            Directories</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><span
                                            className="kt-menu__link-text">Audit & Logs</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
            data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a 
                className="kt-menu__link kt-menu__toggle"><span
                    className="kt-menu__link-text">Apps</span><i
                    className="kt-menu__ver-arrow la la-angle-right"></i></a>
            <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                <ul className="kt-menu__subnav">
                    <li className="kt-menu__item " aria-haspopup="true"><a 
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                            id="Mask" fill="#000000" opacity="0.3" />
                                        <path
                                            d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg></span><span
                                className="kt-menu__link-text">Reporting</span></a></li>
                    <li className="kt-menu__item  kt-menu__item--submenu"
                        data-ktmenu-submenu-toggle="hover" aria-haspopup="true"><a
                            href="demo1/components/datatable_v1.html"
                            className="kt-menu__link kt-menu__toggle"><span
                                className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Social
                                Presence</span><i
                                className="kt-menu__hor-arrow la la-angle-right"></i><i
                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                        <div
                            className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                            <ul className="kt-menu__subnav">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Reached Users</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">SEO Ranking</span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">User Dropout
                                            Points</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Market
                                            Segments</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span
                                            className="kt-menu__link-text">Opportunity
                                            Growth</span></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="kt-menu__item " aria-haspopup="true"><a 
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z"
                                            id="@" fill="#000000" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Sales &
                                Marketing</span></a></li>
                    <li className="kt-menu__item " aria-haspopup="true"><a 
                            className="kt-menu__link "><span className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <polygon id="Path-75" fill="#000000" opacity="0.3"
                                            points="5 15 3 21.5 9.5 19.5" />
                                        <path
                                            d="M16,10 L16,9.5 C16,8.11928813 14.8807119,7 13.5,7 C12.1192881,7 11,8.11928813 11,9.5 L11,10 C10.4477153,10 10,10.4477153 10,11 L10,14 C10,14.5522847 10.4477153,15 11,15 L16,15 C16.5522847,15 17,14.5522847 17,14 L17,11 C17,10.4477153 16.5522847,10 16,10 Z M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M13.5,8 L13.5,8 C14.3284271,8 15,8.67157288 15,9.5 L15,10 L12,10 L12,9.5 C12,8.67157288 12.6715729,8 13.5,8 Z"
                                            id="Combined-Shape" fill="#000000" />
                                    </g>
                                </svg></span><span
                                className="kt-menu__link-text">Campaigns</span><span
                                className="kt-menu__link-badge"><span
                                    className="kt-badge kt-badge--success kt-badge--rounded">3</span></span></a>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu"
                        data-ktmenu-submenu-toggle="hover" aria-haspopup="true"><a
                             className="kt-menu__link kt-menu__toggle"><span
                                className="kt-menu__link-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" width="24px"
                                    height="24px" viewBox="0 0 24 24" version="1.1"
                                    className="kt-svg-icon">
                                    <g stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                            id="Combined-Shape" fill="#000000" />
                                        <path
                                            d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                            id="Combined-Shape" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg></span><span className="kt-menu__link-text">Deployment
                                Center</span><i
                                className="kt-menu__hor-arrow la la-angle-right"></i><i
                                className="kt-menu__ver-arrow la la-angle-right"></i></a>
                        <div
                            className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                            <ul className="kt-menu__subnav">
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Merge Branch</span><span
                                            className="kt-menu__link-badge"><span
                                                className="kt-badge kt-badge--danger kt-badge--rounded">3</span></span></a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Version
                                            Controls</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">Database
                                            Manager</span></a></li>
                                <li className="kt-menu__item " aria-haspopup="true"><a
                                         className="kt-menu__link "><i
                                            className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span
                                            className="kt-menu__link-text">System
                                            Settings</span></a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
</div>
<div className="kt-header__topbar">
<div className="kt-header__topbar-item kt-header__topbar-item--search dropdown"
    id="kt_quick_search_toggle">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
        <span className="kt-header__topbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                className="kt-svg-icon">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="bound" x="0" y="0" width="24" height="24" />
                    <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        id="Path-2" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        id="Path" fill="#000000" fillRule="nonzero" />
                </g>
            </svg> </span>
    </div>
    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
        <div className="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact"
            id="kt_quick_search_dropdown">
            <form method="get" className="kt-quick-search__form">
                <div className="input-group">
                    <div className="input-group-prepend"><span className="input-group-text"><i
                                className="flaticon2-search-1"></i></span></div>
                    <input type="text" className="form-control kt-quick-search__input" placeholder="Search..." />
                    <div className="input-group-append"><span className="input-group-text"><i
                                className="la la-close kt-quick-search__close"></i></span></div>
                </div>
            </form>
            <div className="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="325"
                data-mobile-height="200">

            </div>
        </div>
    </div>
</div>
<div className="kt-header__topbar-item dropdown">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
        aria-expanded="true">
        <span className="kt-header__topbar-icon kt-pulse kt-pulse--brand">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                className="kt-svg-icon">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="bound" x="0" y="0" width="24" height="24" />
                    <path
                        d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                        id="Combined-Shape" fill="#000000" opacity="0.3" />
                    <path
                        d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                        id="Combined-Shape" fill="#000000" />
                </g>
            </svg> <span className="kt-pulse__ring"></span>
        </span>
    </div>
    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
        <form>
            <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b"
                style={{backgroundImage: `url(${bg1})`}}>
                <h3 className="kt-head__title">
                    User Notifications
                    &nbsp;
                    <span className="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>
                </h3>

                <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active show" data-toggle="tab"
                            href="#topbar_notifications_notifications" role="tab"
                            aria-selected="true">Alerts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab"
                            href="#topbar_notifications_events" role="tab"
                            aria-selected="false">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#topbar_notifications_logs"
                            role="tab" aria-selected="false">Logs</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane active show" id="topbar_notifications_notifications"
                    role="tabpanel">
                    <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                        data-scroll="true" data-height="300" data-mobile-height="200">
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-line-chart kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New order has been received
                                </div>
                                <div className="kt-notification__item-time">
                                    2 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-box-1 kt-font-brand"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer is registered
                                </div>
                                <div className="kt-notification__item-time">
                                    3 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-chart2 kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Application has been approved
                                </div>
                                <div className="kt-notification__item-time">
                                    3 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-image-file kt-font-warning"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New file has been uploaded
                                </div>
                                <div className="kt-notification__item-time">
                                    5 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-drop kt-font-info"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New user feedback received
                                </div>
                                <div className="kt-notification__item-time">
                                    8 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    System reboot has been successfully completed
                                </div>
                                <div className="kt-notification__item-time">
                                    12 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-favourite kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New order has been placed
                                </div>
                                <div className="kt-notification__item-time">
                                    15 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item kt-notification__item--read">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-safe kt-font-primary"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Company meeting canceled
                                </div>
                                <div className="kt-notification__item-time">
                                    19 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-psd kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New report has been received
                                </div>
                                <div className="kt-notification__item-time">
                                    23 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon-download-1 kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Finance report has been generated
                                </div>
                                <div className="kt-notification__item-time">
                                    25 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon-security kt-font-warning"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer comment recieved
                                </div>
                                <div className="kt-notification__item-time">
                                    2 days ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-pie-chart kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer is registered
                                </div>
                                <div className="kt-notification__item-time">
                                    3 days ago
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                    <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                        data-scroll="true" data-height="300" data-mobile-height="200">
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-psd kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New report has been received
                                </div>
                                <div className="kt-notification__item-time">
                                    23 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon-download-1 kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Finance report has been generated
                                </div>
                                <div className="kt-notification__item-time">
                                    25 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-line-chart kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New order has been received
                                </div>
                                <div className="kt-notification__item-time">
                                    2 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-box-1 kt-font-brand"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer is registered
                                </div>
                                <div className="kt-notification__item-time">
                                    3 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-chart2 kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Application has been approved
                                </div>
                                <div className="kt-notification__item-time">
                                    3 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-image-file kt-font-warning"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New file has been uploaded
                                </div>
                                <div className="kt-notification__item-time">
                                    5 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-drop kt-font-info"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New user feedback received
                                </div>
                                <div className="kt-notification__item-time">
                                    8 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    System reboot has been successfully completed
                                </div>
                                <div className="kt-notification__item-time">
                                    12 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-favourite kt-font-brand"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New order has been placed
                                </div>
                                <div className="kt-notification__item-time">
                                    15 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item kt-notification__item--read">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-safe kt-font-primary"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Company meeting canceled
                                </div>
                                <div className="kt-notification__item-time">
                                    19 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-psd kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New report has been received
                                </div>
                                <div className="kt-notification__item-time">
                                    23 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon-download-1 kt-font-danger"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    Finance report has been generated
                                </div>
                                <div className="kt-notification__item-time">
                                    25 hrs ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon-security kt-font-warning"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer comment recieved
                                </div>
                                <div className="kt-notification__item-time">
                                    2 days ago
                                </div>
                            </div>
                        </a>
                        <a href="#" className="kt-notification__item">
                            <div className="kt-notification__item-icon">
                                <i className="flaticon2-pie-chart kt-font-success"></i>
                            </div>
                            <div className="kt-notification__item-details">
                                <div className="kt-notification__item-title">
                                    New customer is registered
                                </div>
                                <div className="kt-notification__item-time">
                                    3 days ago
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                    <div className="kt-grid kt-grid--ver" style={{ minHeight: '200px' }}>
                        <div
                            className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                            <div className="kt-grid__item kt-grid__item--middle kt-align-center">
                                All caught up!
                                <br/>No new notifications.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<div className="kt-header__topbar-item dropdown">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
        aria-expanded="true">
        <span className="kt-header__topbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                className="kt-svg-icon">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="bound" x="0" y="0" width="24" height="24" />
                    <rect id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="13" y="4"
                        width="3" height="16" rx="1.5" />
                    <rect id="Rectangle-62-Copy-2" fill="#000000" x="8" y="9" width="3"
                        height="11" rx="1.5" />
                    <rect id="Rectangle-62-Copy-4" fill="#000000" x="18" y="11" width="3"
                        height="9" rx="1.5" />
                    <rect id="Rectangle-62-Copy-3" fill="#000000" x="3" y="13" width="3"
                        height="7" rx="1.5" />
                </g>
            </svg> </span>
    </div>
    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <form>
            <div className="kt-head kt-head--skin-dark"
                style={{backgroundImage: `url(${bg1})`}}>
                <h3 className="kt-head__title">
                    User Quick Actions
                    <span className="kt-space-15"></span>
                    <span className="btn btn-success btn-sm btn-bold btn-font-md">23 tasks
                        pending</span>
                </h3>
            </div>
            <div className="kt-grid-nav kt-grid-nav--skin-light">
                <div className="kt-grid-nav__row">
                    <a href="#" className="kt-grid-nav__item">
                        <span className="kt-grid-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink" width="24px"
                                height="24px" viewBox="0 0 24 24" version="1.1"
                                className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg">
                                <g stroke="none" strokeWidth="1" fill="none"
                                    fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z"
                                        id="Combined-Shape" fill="#000000" opacity="0.3" />
                                    <path
                                        d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z"
                                        id="C" fill="#000000" />
                                </g>
                            </svg> </span>
                        <span className="kt-grid-nav__title">Accounting</span>
                        <span className="kt-grid-nav__desc">eCommerce</span>
                    </a>
                    <a href="#" className="kt-grid-nav__item">
                        <span className="kt-grid-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink" width="24px"
                                height="24px" viewBox="0 0 24 24" version="1.1"
                                className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg">
                                <g stroke="none" strokeWidth="1" fill="none"
                                    fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M14.8571499,13 C14.9499122,12.7223297 15,12.4263059 15,12.1190476 L15,6.88095238 C15,5.28984632 13.6568542,4 12,4 L11.7272727,4 C10.2210416,4 9,5.17258756 9,6.61904762 L10.0909091,6.61904762 C10.0909091,5.75117158 10.823534,5.04761905 11.7272727,5.04761905 L12,5.04761905 C13.0543618,5.04761905 13.9090909,5.86843034 13.9090909,6.88095238 L13.9090909,12.1190476 C13.9090909,12.4383379 13.8240964,12.7385644 13.6746497,13 L10.3253503,13 C10.1759036,12.7385644 10.0909091,12.4383379 10.0909091,12.1190476 L10.0909091,9.5 C10.0909091,9.06606198 10.4572216,8.71428571 10.9090909,8.71428571 C11.3609602,8.71428571 11.7272727,9.06606198 11.7272727,9.5 L11.7272727,11.3333333 L12.8181818,11.3333333 L12.8181818,9.5 C12.8181818,8.48747796 11.9634527,7.66666667 10.9090909,7.66666667 C9.85472911,7.66666667 9,8.48747796 9,9.5 L9,12.1190476 C9,12.4263059 9.0500878,12.7223297 9.14285008,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L14.8571499,13 Z"
                                        id="Combined-Shape" fill="#000000" opacity="0.3" />
                                    <path
                                        d="M9,10.3333333 L9,12.1190476 C9,13.7101537 10.3431458,15 12,15 C13.6568542,15 15,13.7101537 15,12.1190476 L15,10.3333333 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9,10.3333333 Z M10.0909091,11.1212121 L12,12.5 L13.9090909,11.1212121 L13.9090909,12.1190476 C13.9090909,13.1315697 13.0543618,13.952381 12,13.952381 C10.9456382,13.952381 10.0909091,13.1315697 10.0909091,12.1190476 L10.0909091,11.1212121 Z"
                                        id="Combined-Shape" fill="#000000" />
                                </g>
                            </svg> </span>
                        <span className="kt-grid-nav__title">Administration</span>
                        <span className="kt-grid-nav__desc">Console</span>
                    </a>
                </div>
                <div className="kt-grid-nav__row">
                    <a href="#" className="kt-grid-nav__item">
                        <span className="kt-grid-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink" width="24px"
                                height="24px" viewBox="0 0 24 24" version="1.1"
                                className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg">
                                <g stroke="none" strokeWidth="1" fill="none"
                                    fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                                        id="Combined-Shape" fill="#000000" />
                                    <path
                                        d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                                        id="Path" fill="#000000" opacity="0.3" />
                                </g>
                            </svg> </span>
                        <span className="kt-grid-nav__title">Projects</span>
                        <span className="kt-grid-nav__desc">Pending Tasks</span>
                    </a>
                    <a href="#" className="kt-grid-nav__item">
                        <span className="kt-grid-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink" width="24px"
                                height="24px" viewBox="0 0 24 24" version="1.1"
                                className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg">
                                <g stroke="none" strokeWidth="1" fill="none"
                                    fillRule="evenodd">
                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                    <path
                                        d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                        id="Combined-Shape" fill="#000000" fillRule="nonzero"
                                        opacity="0.3" />
                                    <path
                                        d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                        id="Combined-Shape" fill="#000000"
                                        fillRule="nonzero" />
                                </g>
                            </svg> </span>
                        <span className="kt-grid-nav__title">Customers</span>
                        <span className="kt-grid-nav__desc">Latest cases</span>
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
<div className="kt-header__topbar-item dropdown">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
        aria-expanded="true">
        <span className="kt-header__topbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                className="kt-svg-icon">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="bound" x="0" y="0" width="24" height="24" />
                    <path
                        d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                        id="Path-30" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    <path
                        d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z"
                        id="Combined-Shape" fill="#000000" />
                </g>
            </svg> </span>
    </div>
    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <form>
            <div className="kt-mycart">
                <div className="kt-mycart__head kt-head"
                    style={{backgroundImage: `url(${bg1})`}}>
                    <div className="kt-mycart__info">
                        <span className="kt-mycart__icon"><i
                                className="flaticon2-shopping-cart-1 kt-font-success"></i></span>
                        <h3 className="kt-mycart__title">My Cart</h3>
                    </div>
                    <div className="kt-mycart__button">
                        <button type="button" className="btn btn-success btn-sm">2
                            Items</button>
                    </div>
                </div>

                <div className="kt-mycart__body kt-scroll" data-scroll="true" data-height="245"
                    data-mobile-height="200">
                    <div className="kt-mycart__item">
                        <div className="kt-mycart__container">
                            <div className="kt-mycart__info">
                                <a href="#" className="kt-mycart__title">
                                    Samsung
                                </a>
                                <span className="kt-mycart__desc">
                                    Profile info, Timeline etc
                                </span>

                                <div className="kt-mycart__action">
                                    <span className="kt-mycart__price">$ 450</span>
                                    <span className="kt-mycart__text">for</span>
                                    <span className="kt-mycart__quantity">7</span>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&minus;</a>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&plus;</a>
                                </div>
                            </div>

                            <a href="#" className="kt-mycart__pic">
                                <img src="./assets/media/products/product9.jpg" title=""/>
                            </a>
                        </div>
                    </div>

                    <div className="kt-mycart__item">
                        <div className="kt-mycart__container">
                            <div className="kt-mycart__info">
                                <a href="#" className="kt-mycart__title">
                                    Panasonic
                                </a>

                                <span className="kt-mycart__desc">
                                    For PHoto & Others
                                </span>

                                <div className="kt-mycart__action">
                                    <span className="kt-mycart__price">$ 329</span>
                                    <span className="kt-mycart__text">for</span>
                                    <span className="kt-mycart__quantity">1</span>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&minus;</a>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&plus;</a>
                                </div>
                            </div>

                            <a href="#" className="kt-mycart__pic">
                                <img src="./assets/media/products/product13.jpg" title=""/>
                            </a>
                        </div>
                    </div>

                    <div className="kt-mycart__item">
                        <div className="kt-mycart__container">
                            <div className="kt-mycart__info">
                                <a href="#" className="kt-mycart__title">
                                    Fujifilm
                                </a>
                                <span className="kt-mycart__desc">
                                    Profile info, Timeline etc
                                </span>

                                <div className="kt-mycart__action">
                                    <span className="kt-mycart__price">$ 520</span>
                                    <span className="kt-mycart__text">for</span>
                                    <span className="kt-mycart__quantity">6</span>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&minus;</a>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&plus;</a>
                                </div>
                            </div>

                            <a href="#" className="kt-mycart__pic">
                                <img src="./assets/media/products/product16.jpg" title=""/>
                            </a>
                        </div>
                    </div>

                    <div className="kt-mycart__item">
                        <div className="kt-mycart__container">
                            <div className="kt-mycart__info">
                                <a href="#" className="kt-mycart__title">
                                    Candy Machine
                                </a>

                                <span className="kt-mycart__desc">
                                    For PHoto & Others
                                </span>

                                <div className="kt-mycart__action">
                                    <span className="kt-mycart__price">$ 784</span>
                                    <span className="kt-mycart__text">for</span>
                                    <span className="kt-mycart__quantity">4</span>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&minus;</a>
                                    <a href="#"
                                        className="btn btn-label-success btn-icon">&plus;</a>
                                </div>
                            </div>

                            <a href="#" className="kt-mycart__pic">
                                <img src="./assets/media/products/product15.jpg" title="" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="kt-mycart__footer">
                    <div className="kt-mycart__section">
                        <div className="kt-mycart__subtitel">
                            <span>Sub Total</span>
                            <span>Taxes</span>
                            <span>Total</span>
                        </div>

                        <div className="kt-mycart__prices">
                            <span>$ 840.00</span>
                            <span>$ 72.00</span>
                            <span className="kt-font-brand">$ 912.00</span>
                        </div>
                    </div>
                    <div className="kt-mycart__button kt-align-right">
                        <button type="button" className="btn btn-primary btn-sm">Place
                            Order</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<div className="kt-header__topbar-item kt-header__topbar-item--quick-panel" data-toggle="kt-tooltip"
    title="Quick panel" data-placement="right">
    <span className="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn">
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24" />
                <rect id="Rectangle-7" fill="#000000" x="4" y="4" width="7" height="7"
                    rx="1.5" />
                <path
                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                    id="Combined-Shape" fill="#000000" opacity="0.3" />
            </g>
        </svg> </span>
</div>
<div className="kt-header__topbar-item kt-header__topbar-item--langs">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
        <span className="kt-header__topbar-icon">
            <img className="" src={farsiFlag} alt="" />
        </span>
    </div>
    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
        <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
            <li className="kt-nav__item kt-nav__item--active">
                <a href="#" className="kt-nav__link">
                    <span className="kt-nav__link-icon"><img src={farsiFlag} alt="" /></span>
                    <span className="kt-nav__link-text">فارسی</span>
                </a>
            </li>
            <li className="kt-nav__item">
                <a href="#" className="kt-nav__link">
                    <span className="kt-nav__link-icon"><img src={englishFlag} alt="" /></span>
                    <span className="kt-nav__link-text">English</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div className="kt-header__topbar-item kt-header__topbar-item--user">
    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
        <div className="kt-header__topbar-user">
            <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
            <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
            <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
            <span
                className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
        </div>
    </div>

    <div
        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
            style={{backgroundImage: `url(${bg1})`}}>
            <div className="kt-user-card__avatar">
                <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />
                <span
                    className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
            </div>
            <div className="kt-user-card__name">
                Sean Stone
            </div>
            <div className="kt-user-card__badge">
                <span className="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
            </div>
        </div>
        <div className="kt-notification">
            <a href="demo1/custom/apps/user/profile-1/personal-information.html"
                className="kt-notification__item">
                <div className="kt-notification__item-icon">
                    <i className="flaticon2-calendar-3 kt-font-success"></i>
                </div>
                <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title kt-font-bold">
                        My Profile
                    </div>
                    <div className="kt-notification__item-time">
                        Account settings and more
                    </div>
                </div>
            </a>
            <a href="demo1/custom/apps/user/profile-3.html" className="kt-notification__item">
                <div className="kt-notification__item-icon">
                    <i className="flaticon2-mail kt-font-warning"></i>
                </div>
                <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title kt-font-bold">
                        My Messages
                    </div>
                    <div className="kt-notification__item-time">
                        Inbox and tasks
                    </div>
                </div>
            </a>
            <a href="demo1/custom/apps/user/profile-2.html" className="kt-notification__item">
                <div className="kt-notification__item-icon">
                    <i className="flaticon2-rocket-1 kt-font-danger"></i>
                </div>
                <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title kt-font-bold">
                        My Activities
                    </div>
                    <div className="kt-notification__item-time">
                        Logs and notifications
                    </div>
                </div>
            </a>
            <a href="demo1/custom/apps/user/profile-3.html" className="kt-notification__item">
                <div className="kt-notification__item-icon">
                    <i className="flaticon2-hourglass kt-font-brand"></i>
                </div>
                <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title kt-font-bold">
                        My Tasks
                    </div>
                    <div className="kt-notification__item-time">
                        latest tasks and projects
                    </div>
                </div>
            </a>

            <a href="demo1/custom/apps/user/profile-1/overview.html"
                className="kt-notification__item">
                <div className="kt-notification__item-icon">
                    <i className="flaticon2-cardiogram kt-font-warning"></i>
                </div>
                <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title kt-font-bold">
                        Billing
                    </div>
                    <div className="kt-notification__item-time">
                        billing & statements <span
                            className="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded">2
                            pending</span>
                    </div>
                </div>
            </a>
            <div className="kt-notification__custom kt-space-between">
                <a href="demo1/custom/user/login-v2.html" target="_blank"
                    className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>

                <a href="demo1/custom/user/login-v2.html" target="_blank"
                    className="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
            </div>
        </div>
    </div>
</div>
</div>
</div>
            <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                    <div className="kt-container  kt-container--fluid ">
                        <div className="kt-subheader__main">
                            <h3 className="kt-subheader__title">

                                Empty Page </h3>

                            <span className="kt-subheader__separator kt-hidden"></span>
                            <div className="kt-subheader__breadcrumbs">
                                <a href="#" className="kt-subheader__breadcrumbs-home"><i
                                    className="flaticon2-shelter"></i></a>
                                <span className="kt-subheader__breadcrumbs-separator"></span>
                                <a href="" className="kt-subheader__breadcrumbs-link">
                                    General </a>
                                <span className="kt-subheader__breadcrumbs-separator"></span>
                                <a href="" className="kt-subheader__breadcrumbs-link">
                                    Empty Page </a>
                            </div>
                        </div>
                        <div className="kt-subheader__toolbar">
                            <div className="kt-subheader__wrapper">
                                <a href="#" className="btn kt-subheader__btn-daterange"
                                    id="kt_dashboard_daterangepicker" data-toggle="kt-tooltip"
                                    title="Select dashboard daterange" data-placement="left">
                                    <span className="kt-subheader__btn-daterange-title"
                                        id="kt_dashboard_daterangepicker_title">Today</span>&nbsp;
                                <span className="kt-subheader__btn-daterange-date"
                                        id="kt_dashboard_daterangepicker_date">Aug 16</span>
                                </a>

                                <div className="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions"
                                    data-placement="left">
                                    <a href="#" className="btn btn-icon" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">

                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
                                        <ul className="kt-nav">
                                            <li className="kt-nav__head">
                                                Add anything or jump to:
                                            <i className="flaticon2-information" data-toggle="kt-tooltip"
                                                    data-placement="right" title="Click to learn more..."></i>
                                            </li>
                                            <li className="kt-nav__separator"></li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-drop"></i>
                                                    <span className="kt-nav__link-text">Order</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-calendar-8"></i>
                                                    <span className="kt-nav__link-text">Ticket</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-telegram-logo"></i>
                                                    <span className="kt-nav__link-text">Goal</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-new-email"></i>
                                                    <span className="kt-nav__link-text">Support Case</span>
                                                    <span className="kt-nav__link-badge">
                                                        <span className="kt-badge kt-badge--success">5</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__separator"></li>
                                            <li className="kt-nav__foot">
                                                <a className="btn btn-label-brand btn-bold btn-sm" href="#">Upgrade
                                                plan</a>
                                                <a className="btn btn-clean btn-bold btn-sm" href="#"
                                                    data-toggle="kt-tooltip" data-placement="right"
                                                    title="Click to learn more...">Learn more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                    {props.children}
                </div>
            </div>
            <div className="kt-footer  kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer">
                <div className="kt-container  kt-container--fluid ">
                    <div className="kt-footer__copyright">
                        2019&nbsp;&copy;&nbsp;<a href="http://keenthemes.com/metronic" target="_blank"
                            className="kt-link">Keenthemes</a>
                    </div>
                    <div className="kt-footer__menu">
                        <a href="http://keenthemes.com/metronic" target="_blank"
                            className="kt-footer__menu-link kt-link">About</a>
                        <a href="http://keenthemes.com/metronic" target="_blank"
                            className="kt-footer__menu-link kt-link">Team</a>
                        <a href="http://keenthemes.com/metronic" target="_blank"
                            className="kt-footer__menu-link kt-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default PanelLayout