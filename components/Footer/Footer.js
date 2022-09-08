
import Link from 'next/link';
import style from './Footer.module.css';

function Footer() {
  return (
    <footer className={style.main_footer}>
        <div>
            <h3>BRAND</h3>
            <Link href='/shop'>SHOP ALL</Link>
            <Link href='/shop/room'>FOR ROOM</Link>
            <Link href='/shop/home'>FOR HOME</Link>
            <Link href='/about'>ABOUT</Link>
        </div>
        <div>
        <h3>HELP</h3>
            <Link href='/shop'>SHOPPING &amp; RETURNS</Link>
            <Link href='/shop/room'>STORE POLICY</Link>
            <Link href='/shop/home'>PAYMENT RETURNS</Link>
            <Link href='/about'>FAQ</Link>
        </div>
        <div>
        <h3>CONTACT</h3>
            <span>123 123-1234</span>
            <span>brand@brand.com</span>
        </div>
        <div>
            <h3>Join our email list</h3>
            <input type="email" placeholder='name@example.com' />
            <button>SUBSCRIBE</button>
        </div>
    </footer>
  )
}

export default Footer