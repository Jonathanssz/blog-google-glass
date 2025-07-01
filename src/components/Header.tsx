
type Props = {
    link: string;
    desc: string;
}

function Header(Prop: Props) {

    return (
        <>
            <header id="cabecalho">
                <hgroup>
                    <h1>Google Glass</h1>
                    <h2>A revolução do Google está chegando</h2>
                </hgroup>

                <img id="icone" src={Prop.link} alt={Prop.desc} />

                <nav id="menu">
                    <h1>Menu Principal</h1>
                    <ul>
                        <li onMouseOver={mudaFoto('home')} onMouseOut={mudaFoto('padrao')}>
                            <a href="index.html">Home</a>
                        </li>
                        <li onMouseOver={mudaFoto('especificacoes')} onMouseOut={mudaFoto('padrao')}>
                            <a href="specs.html">Especificações</a>
                        </li>
                        <li onMouseOver={mudaFoto('fotos')} onMouseOut={mudaFoto('padrao')}>
                            <a href="fotos.html">Fotos</a>
                        </li>
                        <li onMouseOver={mudaFoto('multimidia')} onMouseOut={mudaFoto('padrao')}>
                            <a href="multimidia.html">Multimídia</a>
                        </li>
                        <li onMouseOver={mudaFoto('contato')} onMouseOut={mudaFoto('padrao')}>
                            <a href="fale-conosco.html">Fale conosco</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
