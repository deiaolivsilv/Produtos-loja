import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Produto(){
    const [titulo, setTitulo] = useState()
    const [foto, setFoto] = useState()
    const [preco, setPreco] =useState()
    const [ produto, setProduto] = useState({})
    const [estoque, setEstoque] = useState()


 const {id} = useParams()

    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products/'+id)
                const dados = await resposta.json()
                setProduto(dados)
                setTitulo(dados.title)
                setPreco(dados.price)
                setFoto(dados.images)
                setEstoque(dados.stock)
            }

            buscarDados()
        }
    , [])


    return <>
    <h2>{titulo}</h2>


<div className="caixa">
    <img src={foto}/>

    <div className="descricaoProd">

        <p className="preco">Preço do produto: {preco}</p>
        <p className="descricao">{produto.description} </p>
        <p>Estoque: {estoque}</p>
    </div>
</div>

   
    </>




}


export default Produto;
