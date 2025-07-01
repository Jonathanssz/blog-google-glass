import { useState } from 'react'
import home from '../assets/images/home.png'
import especificacoes from '../assets/images/especificacoes.png'
import fotos from '../assets/images/fotos.png'
import multimidia from '../assets/images/multimidia.png'
import contato from '../assets/images/contato.png'

type Props = {
    link: string;
}

function Header(Prop: Props) {

    const [icone, setIcone] = useState(Prop.link);

    function mudaFoto(foto: string) {
        setIcone(foto);
    }

    return (
        <>
            <header id="cabecalho">
                <hgroup>
                    <h1>Google Glass</h1>
                    <h2>A revolução do Google está chegando</h2>
                </hgroup>

                <img id="icone" src={icone} alt="Google Glass Ícones" />

                <nav id="menu">
                    <h1>Menu Principal</h1>
                    <ul>
                        <li onMouseOver={() => mudaFoto(home)} onMouseOut={() => mudaFoto(Prop.link)}>
                            <a href="index.html">Home</a>
                        </li>
                        <li onMouseOver={() => mudaFoto(especificacoes)} onMouseOut={() => mudaFoto(Prop.link)}>
                            <a href="specs.html">Especificações</a>
                        </li>
                        <li onMouseOver={() => mudaFoto(fotos)} onMouseOut={() => mudaFoto(Prop.link)}>
                            <a href="fotos.html">Fotos</a>
                        </li>
                        <li onMouseOver={() => mudaFoto(multimidia)} onMouseOut={() => mudaFoto(Prop.link)}>
                            <a href="multimidia.html">Multimídia</a>
                        </li>
                        <li onMouseOver={() => mudaFoto(contato)} onMouseOut={() => mudaFoto(Prop.link)}>
                            <a href="fale-conosco.html">Fale conosco</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
