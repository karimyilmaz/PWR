import Link from 'next/link'

import Logo from '../logo'
import styles from './styles.module.css'
import Button from '../Button'
import Twitter from './components/twitter'
import Telegram from './components/telegram'
import Discord from './components/discord'

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.inner_footer}>
        <div>
          <Logo />
          <nav>
            <ul>
              <li>
                <Link href='#'>Explore</Link>
              </li>
              <li>
                <Link href='#'>Transactions</Link>
              </li>
              <li>
                <Link href='#'>Nodes</Link>
              </li>
              <li>
                <Link href='#'>PWR Wallet</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <label htmlFor='email'>
            Join our newsletter
            <input type='email' id='email' placeholder='Enter your email' />
          </label>
          <Button text='Subscribe' hasBlueBg />
        </div>
      </div>

      <div id={styles.container_social}>
        <button>
          <Twitter />
          Join our twitter
        </button>
        <button>
          <Telegram />
          Join our telegram
        </button>
        <button>
          <Discord />
          Join our discord
        </button>
      </div>

      <div id={styles.bottom_bar_footer}>
        <span>@WOM Protocol Pte. Ltd. All Rights reserved</span>
        <nav>
          <Link href='#'>Terms</Link>
          <Link href='#'>Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
