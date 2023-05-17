import style from './WorkingHours.module.css'

const WorkingHours = () => {
  return (
    <div className={style.workingHours}>
      <div className={style.time}>09:00 - 18:00</div>
      <div className={style.days}>
        <span>Пн</span>
        <span>Вт</span>
        <span>Ср</span>
        <span>Чт</span>
        <span>Пт</span>
      </div>
    </div>
  )
}

export default WorkingHours