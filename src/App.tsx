import "./App.css";
import "./nav.css";
import "./results.css";

function App() {

  return (
    <div className="App">
      <nav>
        <div className="nav-logo">
          <img src="/logo.png" />
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
            <label className="form-label">Nome do Pai⠀⠀</label>   
            <input
              type="text"
              id="first_level_parent"
              name="first_level_parent"
            />
            <br />
            <br />
            <label className="form-label">Nome do Avô⠀⠀</label>    
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
    </div>
  );
}

export default App;
