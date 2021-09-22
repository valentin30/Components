import { NetworkContextProvider } from './Network/NetworkContext'
import { ObserverContextProvider } from './Observer/ObserverContext'

export const Contexts = (props) => (
    <NetworkContextProvider>
        <ObserverContextProvider>{props.children}</ObserverContextProvider>
    </NetworkContextProvider>
)
