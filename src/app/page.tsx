import Image from 'next/image'

import styles from './page.module.css'
import DownwardArrow from './components/icons/downwardArrow'
import RightArrow from './components/icons/rightArrow'
import Pwr from './components/icons/pwr'
import Globe from './components/icons/globe'
import Transactions from './components/icons/transaction'
import Clock from './components/icons/clock'
import Chain from './components/icons/chain'
import LatestBlocks from './components/blocksAndTransactions/latestBlocks'
import LatestTransactions from './components/blocksAndTransactions/latestTransactions'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>The PWR Chain Explorer</h1>
      <div id={styles.filter_container}>
        <button id={styles.selectfilter_btn}>
          All filters <DownwardArrow />
        </button>
        <input
          type='text'
          placeholder='Search by Address / Txn Hash / Block / Token / Domain Name'
        />
        <button id={styles.submit_btn}>
          <RightArrow />
          Enter
        </button>
      </div>

      <div id={styles.wrapper}>
        <div className={styles.grid_item_wrapper}>
          <div className={styles.inner_container_grid_item}>
            <Pwr />
            <div>
              PWR price
              <span className={styles.span_inner_container}>
                $1.098<span>(-4.19%)</span>
              </span>
            </div>
          </div>

          <div className={styles.inner_container_grid_item}>
            <Globe />
            <div>
              PWR market cap
              <span className={styles.span_inner_container}>$1,000,000</span>
            </div>
          </div>
        </div>
        <div className={styles.grid_item_wrapper}>
          <div id={styles.container}>
            <div>
              <Transactions />
              <div>
                Transactions
                <span className={styles.span_inner_container}>1,960.01 M</span>
              </div>
            </div>

            <div>
              Tps
              <span className={styles.span_inner_container}>5,200</span>
            </div>
          </div>

          <div id={styles.container2}>
            <div className={styles.inner_container_grid_item}>
              <Clock />
              <div>
                Blocks
                <span className={styles.span_inner_container}>10199</span>
              </div>
            </div>

            <div className={styles.inner_container_grid_item}>
              <Chain />
              <div>
                validators
                <span className={styles.span_inner_container}>191910</span>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.transaction_history_container}>
          TRANSACTION HISTORY IN 14 DAYS
          <div>
            840k{' '}
            <div id={styles.img_container_wrapper}>
              <div id={styles.img_container}>
                <Image
                  src='/Graph.png'
                  alt='graph'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <span>Apr 23</span>
                <span>Apr 30</span>
                <span>May 7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.blocks_transactions_container}>
        <LatestBlocks />
        <LatestTransactions />
      </div>
    </main>
  )
}
