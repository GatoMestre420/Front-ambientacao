import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import axios from "axios";

//Consultar os produtos da API e exibir na tela
// - Resolver o problema de CORS (API)
// - Como exibir uma array na tela utilizando React



function ProdutoListar() {

    const[produtos, setProdutos] = useState<Produto[]>([]);

  //Executar algum código no carregamento do componente
  useEffect(() => {
    console.log("O componente foi carregado...");
    //FETCH ou AXIOS
    fetch("http://localhost:5240/produto/listar/")
      .then((resposta) => resposta.json())
      .then((produtos : Produto[]) => {
        setProdutos(produtos);
      });
  }, []);

  function deletar(id: string){
    axios.delete(`http://localhost:5240/produto/deletar/${id}`)
    .then(resposta => {
      console.log(resposta)
    });
  }


  return (
    <div>
      <h1>Listar Produtos</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>valor</th>
                <th>Quantidade</th>
                <th>Criado Em</th>
            </tr>
        </thead>
        <tbody>
            {produtos.map(produto => (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.valor}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.criadoEm}</td>
                    <td>
                      <button onClick={() => {deletar(produto.id!);
                      }}>Deletar</button>
                    </td>
                </tr>
            ))}
  
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoListar;
