
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';



const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  console.log(user);
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role  } = user;
        if (path === 'admin' && role !== 'admin') return;
        if (path == "specialNote" && user._id !== "67abd783008983f4e26df321")
          return;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSidebar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
      })}
    </div>
  );
};
export default NavLinks;
