import '../assets/styles/specs.css'
import Header from '../components/Header'
import icone from '../assets/images/especificacoes.png'
import Footer from '../components/Footer'

function Especs() {

    return (
        <>
            <div id="interface">
                <Header link={icone} />
                <h1>Página de Especificações</h1>
                <Footer />
            </div>
        </>
    )
}

export default Especs
