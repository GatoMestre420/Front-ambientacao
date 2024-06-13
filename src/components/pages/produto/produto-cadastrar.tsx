import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { useNavigate } from "react-router-dom";

function ProdutoCadastrar(){

    const[nome, setNome] = useState("");
    const[descricao, setDescricao] = useState("");
    const[quantidade, setQuantidade] = useState("");
    const[valor, setvalor] = useState("");
    const navigate = useNavigate();

    function cadastrarProduto(e : any){

        e.preventDefault();
        const produto : Produto = {
            nome: nome,
            descricao: "Comida",
            quantidade: 150,
            valor: 15,
        };
    
        fetch("http://localhost:5240/produto/cadastrar/" , {
            method : "POST",
            headers: {
                "Content-Type": "application/jason",
            },
            body: JSON.stringify(produto), 
        })
          .then((resposta) => resposta.json())
          .then((produto : Produto) => {
            setNome("");
            navigate("/pages/produto/cadastrar");
            
      });
    
    }

    return (
        <div>
            <h1>cadastrar Produto</h1>
            <form onSubmit={cadastrarProduto}>
                <label>Nome: </label>
                <input type="text"
                value={nome} 
                onChange={(e : any) => setNome(e.target.value) }
                required 
                />{" "}
                <button type="submit">Cadastrar Produto</button>
            </form>

            <form onSubmit={cadastrarProduto}>
                <label>Descrição: </label>
                <input type="text"
                value={descricao} 
                onChange={(e : any) => setDescricao(e.target.value) }
                required 
                />{" "}
                <button type="submit">Cadastrar Produto</button>
            </form>

            <form onSubmit={cadastrarProduto}>
                <label>Quantidade: </label>
                <input type="text"
                value={quantidade} 
                onChange={(e : any) => setQuantidade(e.target.value) }
                required 
                />{" "}
                <button type="submit">Cadastrar Produto</button>
            </form>

            
            <form onSubmit={cadastrarProduto}>
                <label>Valor: </label>
                <input type="text"
                value={valor} 
                onChange={(e : any) => setvalor(e.target.value) }
                required 
                />{" "}
                <button type="submit">Cadastrar Produto</button>
            </form>

        </div>
    );
}

export default ProdutoCadastrar;