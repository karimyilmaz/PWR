import styles from './styles.module.css'

type buttonProps = {
  text: string
  hasBlueBg?: true
}

const Button = ({ text, hasBlueBg }: buttonProps) => {
  return (
    <button
      id={styles.btn}
      style={{
        background: hasBlueBg ? '#112FF8' : '#F2F3F7',
        color: hasBlueBg ? '#fff' : '#000',
      }}
    >
      {text}
    </button>
  )
}

export default Button
