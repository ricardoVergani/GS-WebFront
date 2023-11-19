import "../css/Home.scss"
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Climatizacao from "../img/climatizacao.jpg"
import Conforto from "../img/confortoo.png"
import Seguranca from "../img/segurancaa.png"
import Facilidade from "../img/facilidade.png"

export default function Home() {
    document.title = "Home";
    
    if (sessionStorage.getItem("token-usuario")){
    return (
      <>
        <div className="geral">
            <div className="header-1">
              <Cabecalho/>
            </div>

            <div className="container">
              <header>
                <img src={Climatizacao} alt="climatizacao" />
              </header>
              <nav>
                <h1>O que é a solução? </h1>
                  <p> A solução é um sensor DHT22 nomeado SalaSafe MedGuard que mede a temperatura e humidade das salas e as envia para um aplicativo, onde possam ser verificadas e controladas. </p>
                <h1>O que ela fará?</h1>
                  <p> O sensor medirá os paramêtros citados acima e os enviará para um aplicativo de celular simples e intuitivo, as salas com sensores serão exibidas na tela em ordem de gravidade, se alguma sala estiver com os paramêtros desregulados, aalertar seriam emitidos para que a situação possa ser resolvida. </p>
                <h1>Como funcionará? </h1>
                  <p> O produto funcionará por meio de um ESP32 integrado a rede Wi-Fi para que possa receber os dados, a temperatura e humidade serão medidas por um sensor chamado DHT22, envia a nuvem os valores recebidos e os exibe no Front-End da aplicação. </p>
              </nav>

              <h1 className="marca"> SalaSafe MedGuard </h1>
              <h2>Solução simples e inovadora para a melhorar significativa do conforto em hospitais, para pacientes e médicos. Intuitivo, fácil de ser utilizado, e implementado. </h2>
              <button>Mais informações</button>
            </div>

            <div className="vantagens">
              <h1> Vantagens </h1>
            </div>
            <div className="cards">
                    <div className="card">
                        <h2> 01 </h2>
                        <img src={Conforto} alt="conforto" />
                        <p> O produto oferece mais conforto a todos presentes em ambientes hospitalares, diminuindo estresse e irritações.  </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 02 </h2>
                        <img src={Seguranca} alt="" />
                        <p> Salas cirurgicas podem ser constantemente monitoradas, para que os parametros de temperatura e humidade sejam ideais </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 03</h2>
                        <img src={Facilidade } alt="" />
                        <p> Pacientes em repouso com necessidade específica de temperatura podem ser checados mais facilmente. </p>
                        <button> Saiba mais </button>
                    </div>
                </div>


                <footer>
                  <Rodape/>
                </footer>
              </div>
      </>
    )}
  } 