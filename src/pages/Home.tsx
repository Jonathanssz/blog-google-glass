import Head from '../components/Head_title'
import Header from '../components/Header'
import icone from '../assets/images/glass-oculos-preto-peq.png'
import '../assets/styles/estilo.css'

function Home() {
  
  return (
    <>
      <Head title="Tudo sobre Google Glass" />
      <div id="interface">
        <Header link={icone} desc="Google Glass óculos preto pequeno" />
      </div>
    </>
  )
}

export default Home
