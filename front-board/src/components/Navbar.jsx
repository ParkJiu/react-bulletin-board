import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
      <header className='header'>
      <Link to='/' className='header__menu__item'>
        <h3><FontAwesomeIcon icon={faClipboard} className='icon'/>게시판</h3>
        </Link>
        <nav className='navbar__menu'>
          <Link to='/' className='navbar__menu__item'>Home</Link>
          <Link to='board' className='navbar__menu__item'>Board</Link>
          {!user && <button onClick={handleLogin} className='login__btn'>로그인</button>}
          {user && <button onClick={handleLogout} className='login__btn'>로그아웃</button>}
        </nav>
      </header>
  );
}

