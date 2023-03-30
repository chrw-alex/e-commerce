import Header from './Header/Header'
import style from './Layout.module.css'
import TopBar from './TopBar/TopBar'

const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <TopBar />
    </div>
  )
}

export default Layout