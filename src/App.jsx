import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './pages/Home/Banner.jsx'
import Form from './pages/Home/Form.jsx'
import Info from './pages/Home/Info.jsx'
import Partners from './pages/Home/Partners.jsx'
import Reward from './pages/Home/Reward.jsx'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Info/>
      <Partners/>
      <Reward/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
