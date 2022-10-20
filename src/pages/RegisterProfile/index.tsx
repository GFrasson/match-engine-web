import React, {FormEvent, useEffect, useState} from "react";
import "./styles.css";
import { Navbar } from '../../components/Navbar/index';
import Select from 'react-select';

import api from '../../services/api';


export function RegisterProfile() {

    const [nome, setNome] = useState('');
    const [ptaLeite, setPtaLeite] = useState(0.0);
    const [operadorPtaLeite, setOperadorPtaLeite] = useState('')
    const [ptaTipo, setPtaTipo] = useState(0.0);
    const [operadorPtaTipo, setOperadorPtaTipo] = useState('')
    const [indUbere, setIndUbere] = useState(0.0);
    const [operadorIndUbere, setOperadorIndUbere] = useState('')
    const [indConf, setIndConf] = useState(0.0);
    const [operadorIndConf, setOperadorIndConf] = useState('')
    const [dpr, setDpr] = useState(0.0);
    const [operadorDpr, setOperadorDpr] = useState('')
    const [vidaProd, setVidaProd] = useState(0.0);
    const [operadorVidaProd, setOperadorVidaProd] = useState('')
    const [indCompPerna, setIndCompPerna] = useState(0.0);
    const [operadorIndCompPerna, setOperadorIndCompPerna] = useState('')
    const [indBetaCaseina, setIndBetaCaseina] = useState(false);
    const [operadorIndBetaCaseina, setOperadorIndBetaCaseina] = useState('')
    const [consanguinidade, setConsanguinidade] = useState(0.0);
    const [operadorConsanguinidade, setOperadorConsanguinidade] = useState('')
    
    const optionsSelect = [
        { value: '>', label: '>' },
        { value: '>=', label: '>=' },
        { value: '<', label: '<' },
        { value: '<=', label: '<=' },
        { value: '=', label: '=' }
    ]

      
    const onSubmit =  (event: FormEvent) => {
        event.preventDefault();

        api.post("/selection-profile", {
            name: nome,
            forms: [
                {
                    profile_items: {
                        productive_life: vidaProd
                    },
                    operator: operadorVidaProd
                },
                {
                    profile_items: {
                        conformation_index: indConf
                    },
                    operator: operadorIndConf
                },
                {
                    profile_items: {
                        consanguinity: consanguinidade
                    },
                    operator: operadorConsanguinidade
                },
                {
                    profile_items: {
                        ptat: ptaTipo
                    },
                    operator: operadorPtaTipo
                },
                {
                    profile_items: {
                        legs_composition: indCompPerna
                    },
                    operator: operadorIndCompPerna
                },
                {
                    profile_items: {
                        dpr: dpr
                    },
                    operator: operadorDpr
                },
                {
                    profile_items: {
                        beta_casein: indBetaCaseina ? 1 : 0
                    },
                    operator: '='
                },
                {
                    profile_items: {
                        udder_index: indUbere
                    },
                    operator: operadorIndUbere
                },
                {
                    profile_items: {
                        ptal: ptaLeite
                    },
                    operator: operadorPtaLeite
                },
            ]
        })

    }

    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <div className="profile-registration">
                <h1 className="grid-title">Informações do Perfil de Seleção</h1>
                <form onSubmit={onSubmit}>
                    <label className="form-label">Nome</label> 
                    <div style={{display: "flex"}}>  
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        onChange={(event) => setNome(event.target.value)}
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
                        type="number"
                        id="pta_leite"
                        name="pta_leite"
                        onChange={(event) => setPtaLeite(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">PTA Tipo</label> 
                    <div style={{display: "flex"}}>
                        <Select options={optionsSelect} />
                        <input
                        type="number"
                        id="pta_tipo"
                        name="pta_tipo"
                        onChange={(event) => setPtaTipo(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Úbere</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="number"
                        id="ind_ubere"
                        name="ind_ubere"
                        onChange={(event) => setIndUbere(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Conformação</label>
                    <div style={{display: "flex"}}>   
                        <Select options={optionsSelect} /> 
                        <input
                        type="number"
                        id="ind_conf"
                        name="ind_conf"
                        onChange={(event) => setIndConf(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">DPR</label> 
                    <div style={{display: "flex"}}>   
                        <Select options={optionsSelect} />
                        <input
                        type="number"
                        id="dpr"
                        name="dpr"
                        onChange={(event) => setDpr(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Vida Produtiva</label>
                    <div style={{display: "flex"}}> 
                        <Select options={optionsSelect} />   
                        <input
                        type="number"
                        id="vida_prod"
                        name="vida_prod"
                        onChange={(event) => setVidaProd(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indíce de Composto de Pernas</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="number"
                        id="ind_composto"
                        name="ind_composto"
                        onChange={(event) => setIndCompPerna(Number(event.target.value))}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Indicador de Beta Caseína (A2A2)</label>
                    <div style={{display: "flex"}}>
                        <input
                        className="checkBoxBeta"
                        type="checkbox"
                        id="ind_beta"
                        name="ind_beta"
                        onChange={(event) => setIndBetaCaseina(event.target.checked)}
                        />
                    </div>
                    <br />
                    <br />
                    <label className="form-label">Consanguinidade</label>
                    <div style={{display: "flex"}}>    
                        <Select options={optionsSelect} />
                        <input
                        type="number"
                        id="consang"
                        name="consang"
                        onChange={(event) => setConsanguinidade(Number(event.target.value))}
                        />
                    <label className="form-label">%</label> 
                    </div>
                    <button
                        type='submit'
                        className="submitButton"
                    >
                        Salvar
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
}
