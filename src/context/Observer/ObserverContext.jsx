import { createContext, useEffect, useRef } from 'react'

export const ObserverContext = createContext({
    imageObserver: new IntersectionObserver(() => {})
})

const options = {
    rootMargin: '300px',
    threshold: 0.01
}

const callback = (entries, self) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            self.unobserve(entry.target)
        }
    })
}

export const ObserverContextProvider = (props) => {
    const imageObserverRef = useRef(new IntersectionObserver(callback, options))

    useEffect(() => {
        const imageObserver = imageObserverRef.current

        return () => {
            imageObserver.disconnect()
        }
    }, [])

    return (
        <ObserverContext.Provider value={{ imageObserver: imageObserverRef.current }}>
            {props.children}
        </ObserverContext.Provider>
    )
}
