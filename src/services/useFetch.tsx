import React, { useState } from 'react'
import { MountedRef } from '../types'
import { IResponse, IError, IsLoading } from '../types/index'

const useFetch = (
  url: string,
  options?: {}
): [IResponse, IError, IsLoading] => {
  const isMounted = React.useRef<MountedRef>(true)
  const [response, setResponse] = useState<IResponse>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  React.useEffect(() => {
    if (isMounted.current) {
      if (!url) {
        return
      }

      setIsLoading(true)

      const fetchData = async function () {
        return await fetch(url, options)
          .then(res => res.json())
          .then(jsonData => {
            setResponse({ data: jsonData })
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err)
            setIsLoading(false)
            setError(true)
          })
      }
      fetchData()
    }

    return () => {
      isMounted.current = false
    }
  }, [url, options])

  return [response, error, isLoading]
}

export { useFetch }
