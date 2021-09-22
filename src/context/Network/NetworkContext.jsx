import { createContext, useEffect, useState } from 'react'

export const NetworkContext = createContext({ effectiveType: '', downlink: 0, rtt: 0 })

export const connection = navigator.connection ?? navigator.mozConnection ?? navigator.webkitConnection

export const NetworkContextProvider = (props) => {
    const [state, setState] = useState({
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
    })

    useEffect(() => {
        const changeHandler = () => {
            setState({ effectiveType: connection.effectiveType, downlink: connection.downlink, rtt: connection.rtt })
        }

        connection.addEventListener('change', changeHandler)

        return () => {
            connection.removeEventListener('change', changeHandler)
        }
    }, [])

    return <NetworkContext.Provider value={state}>{props.children}</NetworkContext.Provider>
}
