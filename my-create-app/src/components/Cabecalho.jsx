import { Link, useLocation } from "react-router-dom";



export default function Cabecalho(){

    const rotaAtual = useLocation();

    const handleLogout = () => {

        sessionStorage.removeItem("token-usuario");
        sessionStorage.removeItem("dados-usuario");

        alert("Logout realizado!")

        window.location = '/login';
  }


    return(
        <div>
            <div>
                {sessionStorage.getItem("token-usuario") ? (
                <Link onClick={handleLogout}> Logout </Link>
                ) : (<Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>  </Link>
                )}  
            </div>
        </div>
    )
}
     
