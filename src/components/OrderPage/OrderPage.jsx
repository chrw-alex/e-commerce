import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import style from './OrderPage.module.css'
import OrderItem from './OrderItem/OrderItem'
import ContactsInfo from './ContactsInfo/ContactsInfo'

const OrderPage = () => {

  const items = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const [deliveryWay, setDeliveryWay] = useState('courier')
  const [paymentWay, setPaymentWay] = useState('cash')
  const [totalWithDelivery, setTotalWithDelivery] = useState(0)

  const changeDeliveryWay = (e) => {
    setDeliveryWay(e.target.value)
  }

  const changePaymentWay = (e) => {
    setPaymentWay(e.target.value)
  }

  useEffect(() => {
    if (deliveryWay === 'courier') {
      setTotalWithDelivery(totalPrice + 20)
    } else if (deliveryWay === 'post') {
      setTotalWithDelivery((totalPrice * 1.05).toFixed(2))
    } else {
      setTotalWithDelivery(totalPrice)
    }
  }, [deliveryWay, totalPrice])

  return (
    <div className={style.order}>
      <div className='container'>
        <h1 className={style.title}>Оформление заказа</h1>
        <div className={style.info}>
          <div className={style.items}>
            {items.map((item => {
              return <OrderItem key={item.id} image={item.image} title={item.title} quantity={item.quantity} total={item.total} />
            }))}
          </div>
          <div className={style.total}>
            <p>
              Сумма заказа: ${totalPrice}
            </p>
          </div>
          <div className={style.details}>
            <div className={style.delivery}>
              <form className={style.form}>
                <p className={style.formTitle}>Выберите способ доставки</p>
                <div>
                  <div className={style.formInner}>
                    <div>
                      <input type='radio' id='courier' value='courier' name='delivery' onChange={changeDeliveryWay} checked={deliveryWay === 'courier'} />
                      <label htmlFor='courier'>Курьер</label>
                    </div>
                    <p>$20.00</p>
                  </div>
                  <div className={style.formInner}>
                    <div>
                      <input type='radio' id='post' value='post' name='delivery' onChange={changeDeliveryWay} checked={deliveryWay === 'post'} />
                      <label htmlFor='post'>Доставка почтой</label>
                    </div>
                    <p>5% от суммы заказа</p>
                  </div>
                  <div className={style.formInner}>
                    <div>
                      <input type='radio' id='pickup' value='pickup' name='delivery' onChange={changeDeliveryWay} checked={deliveryWay === 'pickup'} />
                      <label htmlFor='pickup'>Самовывоз</label>
                    </div>
                    <p>$0.00</p>
                  </div>
                </div>
              </form>
            </div>
            <div className={style.payment}>
              <form className={style.form}>
                <p className={style.formTitle}>Выберите способ оплаты</p>
                <div className={style.paymentFormInner}>
                  <input type='radio' id='cash' value='cash' name='payment' onChange={changePaymentWay} checked={paymentWay === 'cash'} />
                  <label htmlFor='cash'>Наличные</label>
                </div>
                <div className={style.paymentFormInner}>
                  <input type='radio' id='debet' value='debet' name='payment' onChange={changePaymentWay} checked={paymentWay === 'debet'} />
                  <label htmlFor='debet'>Дебетовая карта</label>
                </div>
                <div className={style.paymentFormInner}>
                  <input type='radio' id='credit' value='credit' name='payment' onChange={changePaymentWay} checked={paymentWay === 'credit'} />
                  <label htmlFor='credit'>Карта рассрочки</label>
                </div>
              </form>
            </div>
          </div>
          <div className={style.total}>
            <p>
              Итого: ${totalWithDelivery}
            </p>
          </div>
          <ContactsInfo />
        </div>
      </div>
    </div>
  )
}

export default OrderPage