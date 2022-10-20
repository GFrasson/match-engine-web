import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./nav.css";
import "./results.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <div className="nav-logo">
          <img src="../public/logo.png" />
        </div>

        <div className="nav-links">
          <a href="" target="_blank">
            Match
          </a>
          <a href="" target="_blank">
            Filtros
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="cow-registration">
          <h1 className="grid-title">Informações da vaca</h1>
          <form>
            <label className="form-label">Nome do Pai</label>
            <br />
            <input
              type="text"
              id="first_level_parent"
              name="first_level_parent"
            />
            <br />
            <label className="form-label">Nome do Avô</label>
            <br />
            <input
              type="text"
              id="second_level_parent"
              name="second_level_parent"
            />
          </form>
        </div>
        <div className="results">
          <h1 className="grid-title">Resultados</h1>
          <div className="table-wrapper">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Nome do Pai</th>
                  <th>Nome do Avô</th>
                  <th>Nome do Bisavô</th>
                  <th>PTA Leite</th>
                  <th>PTA Tipo</th>
                  <th>Índice de Úbere</th>
                  <th>Índice de Conformação</th>
                  <th>DPR</th>
                  <th>Vida Produtiva</th>
                  <th>Índice de Composto de Pernas</th>
                  <th>Índice de Beta Caseína</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dom</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
                <tr className="active-row">
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
                <tr>
                  <td>Dom</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
                <tr>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
                <tr>
                  <td>Dom</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
                <tr>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
