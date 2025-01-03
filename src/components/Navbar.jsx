import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    id: 0,
    title: "Artistic Materials",
    url: "/artistic-materials",
    subMenuItems:[
      {
        subTitle: "Paints",
        url: "/paints",
        subSubMenuItems:[
          {
            subSubTitle: "Acrylic Oil",
            url: "/acrylic-oil"
          },
          {
            subSubTitle: "Acrylic Water",
            url: "/acrylic-water"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Jewelery",
    url: "/jewelery",
    subMenuItems:[
      {
        subTitle: "Necklaces",
        url: "/jewelery/necklacess"
      },
      {
        subTitle: "Bracelates",
        url: "/jewelery/bracelets"
      },
      {
        subTitle: "Earings",
        url: "/jewelery/earings"
      },
    ]
  },
  {
    id: 2,
    title:"About",
    url: "/about"
  },
  {
    id: 3,
    title:"Contact",
    url: "/contact"
  },
  {
    id: 4,
    title:"News",
    url: "/about"
  }
];

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [hoverSubMenu, setHoverSubMenu] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMouseEnterMenu = (id) => {
    setHoverMenu(id);
  };

  const handleMouseLeaveMenu = () => {
    setHoverMenu(null);
    setHoverSubMenu(null); // Reset sub-menu on menu leave
  };

  const handleMouseEnterSubMenu = (subMenuId) => {
    setHoverSubMenu(subMenuId);
  };

  const handleMouseLeaveSubMenu = () => {
    setHoverSubMenu(null);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex justify-between relative z-50 px-[10px] min-[851px]:h-[50px]">
      <div>
        <NavLink to={"/"}>
          <img
            className="w-[180px]"
            src="/photos/Art_Logo_removebg-preview.png"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div>
        <div className="md:hidden">
          <i
            className={toggleMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            onClick={handleToggleMenu}
          ></i>
        </div>
        {/* MAIN MENU */}
        <ul className={toggleMenu ? "menu active" : "menu"}>
          {menuItems.map((menuItem) => (
            <li className="relative block py-[10px] font-bold"
              onMouseEnter={() => handleMouseEnterMenu(menuItem.id)}
              onMouseLeave={handleMouseLeaveMenu}
              key={menuItem.id}
            >
              <NavLink to={menuItem.url}>
                {menuItem.title}{" "}
                {menuItem.subMenuItems && (
                  <i
                    className={`ml-1 fa-solid ${
                      hoverMenu === menuItem.id
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                )}
              </NavLink>
              {/* SUB-MENU */}
              {menuItem.subMenuItems && hoverMenu === menuItem.id && (
                <ul className="submenu min-[851px]:absolute max-[850px]:top-[100%]">
                  {menuItem.subMenuItems.map((subMenuItem, subIdx) => (
                    <li className="md:border-l-[5px] md:border-[#fff] md:hover:border-l-[5px] 
                      md:hover:border-red-400 p-[4px]"
                      key={subIdx}
                      onMouseEnter={() =>
                        handleMouseEnterSubMenu(`${menuItem.id}-${subIdx}`)
                      }
                      onMouseLeave={handleMouseLeaveSubMenu}
                    >
                      <NavLink to={subMenuItem.url}>
                        {subMenuItem.subTitle}
                      </NavLink>
                      {/* SUB-SUB-MENU */}
                      {subMenuItem.subSubMenuItems &&
                        hoverSubMenu === `${menuItem.id}-${subIdx}` && (
                          <ul className="sub-sub-menu">
                            {subMenuItem.subSubMenuItems.map(
                              (subSubMenuItem, subSubIdx) => (
                                <li className='md:border-l-[5px] md:border-[#fff] md:hover:border-l-[5px] 
                                  md:hover:border-red-400 p-[4px]'       
                                  key={subSubIdx}>
                                  <NavLink to={subSubMenuItem.url}>
                                    {subSubMenuItem.subSubTitle}
                                  </NavLink>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
