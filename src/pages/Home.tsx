import Header from '../components/Header'
import icone from '../assets/images/glass-oculos-preto-peq.png'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div id="interface">
        <Header link={icone} />
        <h1>Página Home</h1>
        <Footer />
      </div>
    </>
  )
}

export default Home
