import { Outlet } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import "./css/Global_Reset.scss"




export default function App(){
  return(
      <div>
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
      </div>
  )

}
