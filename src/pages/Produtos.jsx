
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




function Produtos(){


    const [produtos, setProdutos] = useState([])


    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products')
                const dados = await resposta.json()
                setProdutos(dados.products)
                console.log(dados)
            }     
            buscarDados()
        }
    , [])


    return <>
        <h2> Produtos</h2>


        <ul>
        {produtos.map(
            (prod) => (
                <li> 
                    <img src={prod.thumbnail} alt="foto produto 1"/> 
                    <Link to={`/produto/${prod.id}`}> Produto {prod.id}</Link>
                </li>
            )
          )}
         


        </ul>
    </>
}
export default Produtos;
