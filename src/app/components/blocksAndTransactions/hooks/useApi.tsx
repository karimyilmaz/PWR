import axios from 'axios'
import { useState, useEffect } from 'react'

const useApi = (url: string) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      console.log(url)

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
