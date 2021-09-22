import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { Image } from './components/Image'
import { ImageFallback } from './components/Image/Image'
import { Toggle } from './components/Toggle'

export const App = (props) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [state])
    return (
        <div>
            <h3>Buttons</h3>
            <h4>Types: </h4>
            <div className='row'>
                <Button type='default'>Button</Button>
                <Button type='secondary'>Button</Button>
                <Button>Button</Button>
            </div>
            <h4>Sizes: </h4>
            <div className='row'>
                <Button size='large'>Button</Button>
                <Button size='normal'>Button</Button>
                <Button size='small'>Button</Button>
            </div>
            <h4>Effects: </h4>
            <div className='row'>
                <Button type='secondary' fancy>
                    Button
                </Button>
                <Button fancy>Button</Button>
            </div>
            <h4>Loading: </h4>
            <div className='row'>
                <Button type='default' loading>
                    Button
                </Button>
                <Button type='secondary' loading>
                    Button
                </Button>
                <Button loading>Button</Button>
            </div>
            <h3>Toggle</h3>
            <Toggle />
            <h3>Images</h3>
            <h4>Componens:</h4>
            <div className='row same-height'>
                <ImageFallback style={{ maxWidth: '300px', height: '180px' }} />
                <ImageFallback style={{ maxWidth: '300px', height: '180px' }} showButtonForDemo />
            </div>
            <p>
                When the internet connection is low images are not loaded, insted the user gets to choose which to load
            </p>
            <h4>Demo:</h4>
            <p>If you open the network tab:</p>
            <p>
                you will see that images are lazy loaded (downloading start when the image is 300px away from the
                viewport)
            </p>
            <p>and if you change the throttling setting to the lowwest one images will not load</p>
            <Image
                maxWidth='300px'
                maxHeight='300px'
                src='https://pixewall.com/wp-content/uploads/2021/03/4K-Wallpapers-UHD-Wallpapers.jpg'
                alt='Original Alt'
            />
            <p style={{ height: '700px' }}></p>
            <Image
                maxWidth='300px'
                maxHeight='300px'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg'
                alt='Original Alt'
            />
            <p style={{ height: '700px' }}></p>
            <Image
                maxWidth='300px'
                maxHeight='300px'
                src='https://wallpaperaccess.com/full/508751.jpg'
                alt='Original Alt'
            />
            <p></p>
        </div>
    )
}
