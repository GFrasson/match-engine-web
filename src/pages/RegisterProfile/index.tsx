import "./styles.css";
import { Navbar } from '../../components/Navbar/index';
import Select from 'react-select';

export function RegisterProfile() {

    const optionsSelect = [
        { value: '>', label: '>' },
        { value: '>=', label: '>=' },
        { value: '<', label: '<' },
        { value: '<=', label: '<=' },
        { value: '=', label: '=' }
      ]

      
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <div className="profile-registration">
                <h1 className="grid-title">Informações do Perfil de Seleção</h1>
                <form>
                    <label className="form-label">Nome</label> 
                    <div style={{display: "flex"}}>  
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">PTA Leite</label>
                    <div style={{display: "flex"}}>   
                        <div style={{width: '100px'}}>
                            <Select options={optionsSelect}/>
                        </div>
                        <input
                        type="text"
                        id="pta_leite"
                        name="pta_leite"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">PTA Tipo</label> 
                    <div style={{display: "flex"}}>
                        <Select options={optionsSelect} />
                        <input
                        type="text"
                        id="pta_tipo"
                        name="pta_tipo"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Úbere</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="text"
                        id="ind_ubere"
                        name="ind_ubere"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Conformação</label>
                    <div style={{display: "flex"}}>   
                        <Select options={optionsSelect} /> 
                        <input
                        type="text"
                        id="ind_conf"
                        name="ind_conf"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">DPR</label> 
                    <div style={{display: "flex"}}>   
                        <Select options={optionsSelect} />
                        <input
                        type="text"
                        id="dpr"
                        name="dpr"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Vida Produtiva</label>
                    <div style={{display: "flex"}}> 
                        <Select options={optionsSelect} />   
                        <input
                        type="text"
                        id="vida_prod"
                        name="vida_prod"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Composto de Pernas</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="text"
                        id="ind_composto"
                        name="ind_composto"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indicador de Beta Caseína</label>
                    <div style={{display: "flex"}}>
                        <Select options={optionsSelect} />
                        <input
                        type="checkbox"
                        id="ind_beta"
                        name="ind_beta"
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Consanguinidade</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="text"
                        id="consang"
                        name="consang"
                        />
                    <label className="form-label">%</label> 
                    </div>
                     
                </form>
                </div>
            </div>
        </div>
    );
}
