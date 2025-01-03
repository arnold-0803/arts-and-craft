import React from 'react';

const socialMedia = [
  {
    id: 0,
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com"
  },
  {
    id: 1,
    icon: "fa-brands fa-x-twitter",
    link: "https://www.twitter.com"
  },
  {
    id: 2,
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com"
  },
  {
    id: 3,
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com"
  },
  {
    id: 4,
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com"
  }
];

const reachoutInfo = [
  {
    id: 0,
    icon: "fa-solid fa-phone",
    info: "+254700000000"
  },
  {
    id: 1,
    icon: "fa-solid fa-envelope",
    info: "info@imaginations.org"
  },
  {
    id: 2,
    icon: "fa-solid fa-location-dot",
    info: "Maasai-Market, Nairobi"
  },
];

const TopBar = () => {
  return (
    <div className='w-full max-[1280px]:hidden'>
      <div className='flex flex-wrap justify-between items-center lg:p-[5px_4rem] bg-red-400'>
        <ul className='flex text-[#fff]'>
          {socialMedia.map(item => 
            <li className='px-[5px]'
              key={item.id}>
              <a href={item.link}>
                <i className={`${item.icon} text-[1.1rem]`}></i>
              </a>
            </li>
          )}
        </ul>
        <ul className='flex text-[#fff]'>
          {reachoutInfo.map(item => 
            <li className='px-[5px] text-[0.95rem] border-r-[1px] border-[#fff]'
              key={item.id}>
              <i className={`${item.icon} p-[4px]`}></i>{item.info}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TopBar;
