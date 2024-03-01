'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

type posts = {
  id: number
  userId: number
  title: string
}

const LatestBlocks = () => {
  const [posts, setPosts] = useState<posts[]>([])

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          const posts = response.data

          setPosts(posts.slice(1, 6))
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    getData()
  }, [])

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((value) => {
            return <li>{value.title}</li>
          })}
        </ul>
      ) : (
        <Player
          src='https://lottie.host/88ef5ab9-8831-4fe3-88f7-8c0be9d7bee4/3dWYX4n7gB.json'
          autoplay
          loop
          speed={1}
          id='loading'
        />
      )}
    </div>
  )
}

export default LatestBlocks
