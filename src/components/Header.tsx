import { NavLink, Link } from "react-router"
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <svg 
            className="header__logo-icon" 
            width="40" 
            height="40" 
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path fill="currentColor" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
          </svg>
          <span className="header__logo-title">КиноПолка</span>
        </Link>
        <nav className="header__nav">
          <NavLink 
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} 
            to="/"
            end
          >
            Главная
          </NavLink>
          <NavLink 
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} 
            to="/catalog"
          >
            Каталог
          </NavLink>
          <NavLink
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} 
            to="/favourites"
          >
            Избранное
          </NavLink>
        </nav>    
      </div>
    </header>
  )
}