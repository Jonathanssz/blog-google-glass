import { useState } from 'react'

type Props = {
    link: string;
    desc: string;
}

function Header(Prop: Props) {

    const padrao: string = "_imagens/glass-oculos-preto-peq.png";

    /* function mudaFoto(foto: string) {
        if (foto == "padrao") {
            Prop.link = padrao;
        } else {
            document.getElementById("icone").src = "_imagens/" + foto + ".png";
        }
    } */

    return (
        <>
            <header id="cabecalho">
                <hgroup>
                    <h1>Google Glass</h1>
                    <h2>A revolução do Google está chegando</h2>
                </hgroup>

                <img id="icone" src={Prop.link} alt={Prop.desc} />

                {/* <nav id="menu">
                    <h1>Menu Principal</h1>
                    <ul>
                        <li onmouseover="mudaFoto('home')" onmouseout="mudaFoto('padrao')">
                            <a href="index.html">Home</a>
                        </li>
                        <li onmouseover="mudaFoto('especificacoes')" onmouseout="mudaFoto('padrao')">
                            <a href="specs.html">Especificações</a>
                        </li>
                        <li onmouseover="mudaFoto('fotos')" onmouseout="mudaFoto('padrao')">
                            <a href="fotos.html">Fotos</a>
                        </li>
                        <li onmouseover="mudaFoto('multimidia')" onmouseout="mudaFoto('padrao')">
                            <a href="multimidia.html">Multimídia</a>
                        </li>
                        <li onmouseover="mudaFoto('contato')" onmouseout="mudaFoto('padrao')">
                            <a href="fale-conosco.html">Fale conosco</a>
                        </li>
                    </ul>
                </nav> */}
            </header>
        </>
    )
}

export default Header;
