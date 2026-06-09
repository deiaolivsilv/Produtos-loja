import { Link } from "react-router-dom";


function Produtos(){
    return <>
        <h2> Produtos</h2>


        <li>
            <li> 
                <img src="#"  alt="foto produto 1"/> 
                <Link to="/produto"> Produto 1</Link>
            </li>


        </li>
    </>
}
export default Produtos;
