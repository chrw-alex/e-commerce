import Header from './Header/Header'
import TopBar from './TopBar/TopBar'
import Footer from './Footer/Footer'
import style from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={style.layout}>
      <Header />
      <TopBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout