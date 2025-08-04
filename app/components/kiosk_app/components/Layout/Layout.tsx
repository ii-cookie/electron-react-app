import './Layout.css'
import Header from './Header'
import Lang_Change from './LangChange'
// import Footer from './Footer'
import SimpleFooter from './SimpleFooter'

const content: string =
  '图书馆开放时间：上午10:00-下午 09:00，节假日上午10:00-下午07:00，個别日子的特别開放時间（請参閱備註)上午 10:00-下午 09:00'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <Header />
      <main className="Page-content">{children}</main>
      <Lang_Change />
      <SimpleFooter FooterContent={content}></SimpleFooter>
    </div>
  )
}

export default Layout
