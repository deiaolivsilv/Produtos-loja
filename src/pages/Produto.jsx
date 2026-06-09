import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Produto(){
    const [titulo, setTitulo] = useState()
    const [foto, setFoto] = useState()
    const [preco, setPreco] =useState()

 const {id} = useParams()

    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products/'+id)
                const dados = await resposta.json()
                setTitulo(dados.title)
                setPreco(dados.price)
                setFoto(dados.images)
            }     
            buscarDados()
        }
    , [])


    return <>
    <h2>{titulo}</h2>
    <img src={foto} />

    <p>Preço do produto: {preco}</p>
    <p >"description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",</p>
    </>
}


export default Produto;
