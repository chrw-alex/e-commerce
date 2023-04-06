import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/user-slice'
import style from './Modal.module.css'

const Backdrop = ({ setIsAuthVisible }) => {

  const dispatch = useDispatch()
  const closeModal = () => {
    setIsAuthVisible(false)
    dispatch(userActions.updateError(''))
    dispatch(userActions.updateAuthStatus(false))
  }
  return (
    <div className={style.backdrop} onClick={closeModal}></div>
  )
}

const ModalWindow = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  )
}

const portalEl = document.getElementById('overlay')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setIsAuthVisible={props.setIsAuthVisible} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalEl
      )}
    </>
  )
}

export default Modal