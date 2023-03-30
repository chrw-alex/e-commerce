import { ReactComponent as Compare } from '../../../../assets/img/compare.svg'
import style from './ComparisonBtn.module.css'

const ComparisonBtn = () => {
  return (
    <div className={style.comparisonBtn}>
      <Compare className={style.icon} />
      <p>сравнение</p>
      <div className={style.amount}>5</div>
    </div>
  )
}

export default ComparisonBtn