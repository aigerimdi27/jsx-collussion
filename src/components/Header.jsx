import logo from '../assets/images/YOUR LOGO.png'
import searchHeartCart from '../assets/images/search HEART shopping-cart.png'
export const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <img src={ logo } alt="" className='header__logo'/>
                <nav className="header__menu">
                    <a href="#" className="header__link">home</a>
                    <a href="#" className="header__link">shop</a>
                    <a href="#" className="header__link">lookbook</a>
                    <a href="#" className="header__link">features</a>
                    <a href="#" className="header__link">pages</a>
                    <a href="#" className="header__link">blog</a>
                </nav>
                <img src={ searchHeartCart } alt="" className="header__nav" />
        
            </div>
        </header>
    )
}