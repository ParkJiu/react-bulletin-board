import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';

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
    <div className='navbar'>
      <header className='header'>
        <Link to='/' className='navbar__menu__item'>
          <h3>게시판</h3>
        </Link>
      </header>
      <nav className='navbar__menu'>
        <ul className='navbar__menu'>
          <li><Link to='/' className='navbar__menu__item'>Home</Link></li>
          <li><Link to='board' className='navbar__menu__item'>Board</Link></li>
        {!user && <button onClick={handleLogin} className='login__btn'>로그인</button>}
        {user && <button onClick={handleLogout} className='login__btn'>로그아웃</button>}
        </ul>
      </nav>
    </div>
  );
}

