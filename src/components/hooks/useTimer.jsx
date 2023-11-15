import { useState, useEffect } from 'react'

function useTimer () {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    timer > 0 && setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)
  }, [timer])

  return { timer, setTimer }
}

export default useTimer
