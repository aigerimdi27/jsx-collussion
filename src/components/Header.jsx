import { Link } from 'react-router-dom'
import logo from '../assets/images/YOUR LOGO.png'
import searchHeartCart from '../assets/images/search HEART shopping-cart.png'
export const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <img src={ logo } alt="" className='header__logo'/>
                <nav className="header__menu">
                    <Link className="header__link" to="/">home</Link>
                    <Link className="header__link" to="/shop">shop</Link>
                    <Link className="header__link" to="/lookbook">lookbook</Link>
                    <Link className="header__link" to="/features">features</Link>
                    <Link className="header__link" to="/pages">pages</Link>
                    <Link className="header__link" to="/blog">blog</Link>
                </nav>
                <img src={ searchHeartCart } alt="" className="header__nav" />
        
            </div>
        </header>
    )
}