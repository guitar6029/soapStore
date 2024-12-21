import styles from './Nav.module.css';
import Link from 'next/link';
function Nav() {
  return (
    <nav className={styles.main_nav}>
        <div className={styles.brand}>Brand</div>
        <div><Link href='#'>Shop All</Link></div>
        <div><Link href='/#'>For Body</Link></div>
        <div><Link href='#'>For Home</Link></div>
        <div><Link href='#'>Contact</Link></div>
    </nav>
  )
}

export default Nav