import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '/images/logo.png';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [isUser, setIsUser] = useState(null);
  const [activeProfile, setActiveProfile] = useState(false);

  useEffect(() => {
    const userExists = JSON.parse(localStorage.getItem('userInfo'));

    setIsUser(userExists);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setIsUser(null);
  };

  const navData = [
    {
      title: 'Home',
      text: 'home',
      link: '/',
    },
    {
      title: 'All Blogs',
      text: 'allblogs',
      link: '/allblogs',
    },
    {
      title: 'Featured',
      text: 'featured',
      link: '/allblogs',
    },
    {
      title: 'Contact',
      text: 'contact',
      link: '/contact',
    },
  ];

  return (
    <>
      <div className="min-h-20 flex justify-center items-center py-4">
        <img src={logo} alt="Logo" className="h-16 object-cover" />
      </div>

      <div className="bg-primary text-white font-primary w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <ul className="flex text-sm font-semibold">
              {navData.map((item, i) => (
                <Link to={item.link} key={i}>
                  <li
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer ${
                      activeNav === item.text && 'bg-black bg-opacity-15'
                    }`}
                    onClick={() => setActiveNav(item.text)}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex items-center">
              {!isUser ? (
                <>
                  <Link
                    to="/login"
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer ${
                      activeNav === 'login' && 'bg-black bg-opacity-15'
                    }`}
                    onClick={() => {
                      setActiveNav('login');
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer ${
                      activeNav === 'register' && 'bg-black bg-opacity-15'
                    }`}
                    onClick={() => {
                      setActiveNav('register');
                    }}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <div
                  className="relative bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => setActiveProfile((prev) => !prev)}
                >
                  <img
                    src={isUser?.pic}
                    alt=""
                    className="w-11 h-11 rounded-full"
                  />
                  {activeProfile && (
                    <div className="absolute bg-white text-black top-full right-0 rounded-md z-[100] pt-4 shadow">
                      <Link
                        to={`/dashboard`}
                        className="uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 font-bold cursor-pointer"
                      >
                        Dashboard
                      </Link>
                      <h4
                        className="uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 font-bold cursor-pointer"
                        onClick={logoutHandler}
                      >
                        Logout
                      </h4>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
