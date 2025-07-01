import Head from '../components/Head_title'
import Header from '../components/Header'
import icone from '../assets/images/glass-oculos-preto-peq.png'
import Footer from '../components/Footer'
import '../assets/styles/estilo.css'

function Home() {
  
  return (
    <>
      <Head title="Tudo sobre Google Glass" />
      <div id="interface">
        <Header link={icone} />
        <Footer />
      </div>
    </>
  )
}

export default Home
