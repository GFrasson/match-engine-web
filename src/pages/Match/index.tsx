import { Navbar } from "../../components/Navbar";

import "./styles.css";

export function Match() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="cow-registration">
                    <h1 className="grid-title">Informações da vaca</h1>
                    <form className="genealogy-form">
                        <div className="form-group">
                            <label className="form-label">Nome do Pai</label>   
                            <input
                                type="text"
                                id="first_level_parent"
                                name="first_level_parent"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nome do Avô</label>    
                            <input
                                type="text"
                                id="second_level_parent"
                                name="second_level_parent"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nome do Bisavô</label>    
                            <input
                                type="text"
                                id="third_level_parent"
                                name="third_level_parent"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="selection_profile_id">Perfil de seleção</label>
                            <select name="selection_profile_id" id="selection_profile_id">
                                <option value="">a</option>
                                <option value="">a</option>
                                <option value="">a</option>
                            </select>
                        </div>
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
