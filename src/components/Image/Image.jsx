import { useContext, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { IoMdImages } from 'react-icons/io'
import { ObserverContext } from '../../context/Observer/ObserverContext'
import { NetworkContext } from '../../context/Network/NetworkContext'
import { Button } from '../Button'

export const ImageFallback = (props) => {
    const { effectiveType } = useContext(NetworkContext)
    const lowConnection = effectiveType === '2g' || effectiveType === 'slow-2g'

    return (
        <div style={props.style} className={styles['loader']}>
            <IoMdImages />
            {(lowConnection || props.showButtonForDemo) && (
                <Button onClick={props.onUserAllow} size='small' type='default' loading={props.loading}>
                    load image
                </Button>
            )}
        </div>
    )
}

export const Image = (props) => {
    const style = { style: { maxWidth: props.maxWidth, maxHeight: props.maxHeight } }
    const [loading, setLoading] = useState(true)
    const [userAllowed, setUserAllowed] = useState(false)
    const { imageObserver } = useContext(ObserverContext)
    const { effectiveType } = useContext(NetworkContext)
    const image = useRef()

    const loadImageHandler = () => {
        setLoading(false)
    }

    useEffect(() => {
        const lowConnection = effectiveType === '2g' || effectiveType === 'slow-2g'
        if (lowConnection) {
            if (!userAllowed) {
                return
            }
        }
        imageObserver.observe(image.current)
        const img = image.current

        return () => {
            imageObserver.unobserve(img)
        }
    }, [imageObserver, effectiveType, userAllowed])

    return (
        <div className={[props.className, styles['root']].join(' ')}>
            {loading && <ImageFallback {...style} onUserAllow={() => setUserAllowed(true)} loading={userAllowed} />}
            <img
                ref={image}
                {...style}
                data-src={props.src}
                alt={props.alt}
                onLoad={loadImageHandler}
                decoding='async'
                className={[styles['image'], loading && styles['loading']].join(' ')}
            />
        </div>
    )
}
