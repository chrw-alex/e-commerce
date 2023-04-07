import FooterForm from './FooterForm/FooterForm'
import style from './Footer.module.css'
import Advantages from './Advantages/Advantages'
import FooterInfo from './FooterInfo/FooterInfo'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.feedback}>
        <div className={style.feedbackInner + ' container'}>
          <p className={style.discountText}>Хочешь <br /> узнавать про<br /> акции и скидки<br /> первым?</p>
          <FooterForm />
        </div>
      </div>
      <div className={style.advantages}>
        <div className='container'>
          <Advantages />
        </div>
      </div>
      <div className={style.info}>
        <div className='container'>
          <FooterInfo />
        </div>
      </div>
    </div>
  )
}

export default Footer