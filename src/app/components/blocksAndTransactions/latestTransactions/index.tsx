'use client'

import Link from 'next/link'

import useApi from '../hooks/useApi'
import RightArrow from '../components/rightArrow'
import styles from '../styles.module.css'
import File from './components/file'
import Spinner from '../components/spinner'
import { slice_strng } from '../utils'

const LatestTransactions = () => {
  const { data, loading, error } = useApi(
    'https://jsonplaceholder.typicode.com/todos'
  )

  return (
    <div className={styles.container}>
      <h3>Latest Transactions</h3>

      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <ul>
            {data.slice(1, 5).map((value, index) => {
              return (
                <li key={index}>
                  <div>
                    <File />
                    <div className={styles.inner_container}>
                      <span>0x7796a..</span>
                      10 secs ago
                    </div>
                  </div>
                  <div>{slice_strng(value.title)}</div>
                  <div>0.49867 PWR</div>
                </li>
              )
            })}
          </ul>
        )}
        <Link href='#'>
          view all transactions
          <RightArrow />
        </Link>
      </div>
    </div>
  )
}

export default LatestTransactions
