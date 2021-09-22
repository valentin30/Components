import styles from './index.module.scss'

export const Toggle = ({ className, ...props }) => {
    return (
        <label className={[styles['toggle'], className].join(' ')}>
            <input type='checkbox' {...props} />
            <span className={styles['slider']}></span>
        </label>
    )
}
