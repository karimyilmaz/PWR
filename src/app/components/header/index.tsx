import Logo from '../logo'
import Button from '../Button'
import DownwardArrow from '../icons/downwardArrow'
import Moon from './components/moon'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div id={styles.header}>
      <Link href='#' id={styles.home_link}>
        <Logo />
      </Link>

      <ul>
        <li>
          <Link href='#' id={styles.selected_link}>
            Explore
          </Link>
        </li>
        <li>
          Blockchain
          <DownwardArrow />
        </li>
        <li>
          Tokens
          <DownwardArrow />
        </li>
        <li>
          NFTs
          <DownwardArrow />
        </li>
      </ul>

      <div id={styles.container_btns}>
        <Button text='connect' />
        <Button text='get wallet' hasBlueBg />
      </div>

      <button id={styles.mode_btn}>
        <Moon />
      </button>
    </div>
  )
}

export default Header
