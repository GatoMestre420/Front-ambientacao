import React from "react";
import CepConsultar from "./components/pages/cep/cep.consultar";
import ProdutoListar from "./components/pages/produto/produto-listar";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/pages/produto/listar"}>Listar Produtos</Link></li>
          <li><Link to={"/pages/produto/cadastrar"}>Cadastrar Produtos</Link></li>
        </ul>
      </nav>
      <Routes>
          
        <Route path="/pages/produto/listar" element={<ProdutoListar></ProdutoListar>} />
        <Route path="/pages/produto/cadastrar" element={<ProdutoCadastrar></ProdutoCadastrar>} />
      </Routes>
      <footer>
        <p>
          Desenvolvido por Luan Curt
        </p>
      </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
