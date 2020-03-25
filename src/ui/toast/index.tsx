import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './index.module.sass'

toast.configure({
    position: toast.POSITION.TOP_CENTER,
    closeButton: false,
    transition: Slide,
    progressClassName: styles.progressBar,
})

export const notify = (message: string) => toast(message)