import { Link } from "react-router-dom";


const estilo = {
    color:'blue',
    display: 'flex',
   
    listStyleType: 'none',
    
  justifyContent: 'space-around',

}
const li =  {
    backgroundColor: '#ccc',
    
}


function Menu(){
    return <>
        <ul style={estilo}>
            <li style={li}>
                <Link to="/">                
                    Produtos
                </Link>
            </li>
            <li style={li}>
                <Link to="/descrever">                
                    Descrever
                </Link>
            </li>
            <li style={li}>
                <Link to="/usuarios">
                    Usuários
                </Link>
            </li>
        </ul>
    </>
}
export default Menu;
