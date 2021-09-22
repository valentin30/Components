import styles from './index.module.scss'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const generatePropsFromProps = (props) => {
    const { type = 'primary', size = 'normal', fullWidth, loading, disabled, fancy, className, ...rest } = props
    const stylesArray = [styles['button'], styles[type], styles[size]]
    if (loading) {
        stylesArray.push(styles['loading'])
    }
    if (fullWidth) {
        stylesArray.push(styles['full-width'])
    }
    if (fancy && !loading && !disabled) {
        stylesArray.push(styles['hover-effect'])
    }
    stylesArray.push(className)

    return {
        className: stylesArray.join(' '),
        disabled: disabled || loading,
        ...rest
    }
}

export const Button = (props) => (
    <button {...generatePropsFromProps(props)}>
        {props.children}
        <AiOutlineLoading3Quarters className={styles['loader']} />
    </button>
)
