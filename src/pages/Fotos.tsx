import '../assets/styles/fotos.css'
import Header from '../components/Header'
import icone from '../assets/images/fotos.png'
import Footer from '../components/Footer'

function Fotos() {

    return (
        <>
            <div id="interface">
                <Header link={icone} />
                <h1>Página de Fotos</h1>
                <Footer />
            </div>
        </>
    )
}

export default Fotos
