import React, { useState } from 'react'
//Routing
import Link from 'next/link'
//Icons
import { AiOutlineBars, AiFillCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';
// Styles
import styles from '../styles/Header.module.css'

const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    const menuToggle = () => setToggle(!toggle);

    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={e => menuToggle(e.target.value)}>
                <AiOutlineBars fontSize="30px" />
            </div>
            <div className={styles.logo}>
                <h1><Link href="/" ><a>Shop</a></Link></h1>
            </div>
            <nav className={styles.nav}>
                <ul className={toggle ? 'toggle' : ''}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/products"><a>Products</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/login"><a>Login / Register</a></Link></li>
                    <li className={styles.close} onClick={e => menuToggle(e.target.value)}>
                        <AiFillCloseCircle fontSize="30px" />
                    </li>
                </ul>
                <div className={styles.navcart}>
                    <span>0</span>
                    <Link href="/cart">
                        <a><AiOutlineShoppingCart fontSize="40px" /></a>
                    </Link>
                </div>
            </nav>
            <style jsx>
                {`
                    @media (max-width: 650px) {
                        .toggle {
                            top: 0;
                        }
                    }
                `}
            </style>
        </header>
    )
}


export default Header;
