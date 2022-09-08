import styles from './Nav.module.css';
import Link from 'next/link';
function Nav() {
  return (
    <nav className={styles.main_nav}>
        <div className={styles.brand}>Brand</div>
        <div><Link href='/shop'>Shop All</Link></div>
        <div><Link href='/shop/body'>For Body</Link></div>
        <div><Link href='/shop/home'>For Home</Link></div>
        <div><Link href='/contact'>Contact</Link></div>
    </nav>
  )
}

export default Nav