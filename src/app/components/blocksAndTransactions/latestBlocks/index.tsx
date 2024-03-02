'use client'

import Link from 'next/link'
import { Player } from '@lottiefiles/react-lottie-player'

import useApi from '../hooks/useApi'
import RightArrow from '../components/rightArrow'
import styles from '../styles.module.css'
import Block from './components/block'
import Spinner from '../components/spinner'
import { slice_strng } from '../utils'

const LatestBlocks = () => {
  const { data, loading, error } = useApi(
    'https://jsonplaceholder.typicode.com/todos'
  )

  return (
    <div className={styles.container}>
      <h3 style={{ textAlign: 'center' }}>Latest Block</h3>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>error</p>
        ) : (
          <ul>
            {data.slice(1, 5).map((value, index) => {
              return (
                <li key={index}>
                  <div>
                    <Block />
                    <div className={styles.inner_container}>
                      <span>17214042</span>
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
          view all blocks
          <RightArrow />
        </Link>
      </div>
    </div>
  )
}

export default LatestBlocks
