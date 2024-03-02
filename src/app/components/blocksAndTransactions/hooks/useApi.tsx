import axios from 'axios'
import { useState, useEffect } from 'react'

type data = {
  completed: boolean
  id: number
  title: string
  userId: number
}

const useApi = (url: string) => {
  const [data, setData] = useState<data[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error) {
        setError('Error while fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useApi
