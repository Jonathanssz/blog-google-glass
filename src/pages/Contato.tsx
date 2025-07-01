import '../assets/styles/form.css'
import Header from '../components/Header'
import icone from '../assets/images/contato.png'
import Footer from '../components/Footer'

function Contato() {

    return (
        <>
            <div id="interface">
                <Header link={icone} />
                <h1>Página de Contato</h1>
                <Footer />
            </div>
        </>
    )
}

export default Contato
