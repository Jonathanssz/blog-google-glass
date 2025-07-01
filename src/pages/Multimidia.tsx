import '../assets/styles/media.css'
import Header from '../components/Header'
import icone from '../assets/images/multimidia.png'
import Footer from '../components/Footer'

function Multimidia() {

    return (
        <>
            <div id="interface">
                <Header link={icone} />
                <h1>Página de Multimídia</h1>
                <Footer />
            </div>
        </>
    )
}

export default Multimidia
