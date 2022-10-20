import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";

import api from "../../services/api";

import "./styles.css";

interface SelectionProfile {
    id: string;
    name: string;
}

interface BullMatch {
    register_id: string;
    name: string;
    gender: string;
    first_level_parent: string;
    second_level_parent: string;
    third_level_parent: string;
    bull_features: {
        ptal: number;
        udder_index: number;
        beta_casein: number;
        legs_composition: number;
        dpr: number;
        ptat: number;
        productive_life: number;
        conformation_index: number;
    }
}

export function Match() {
    const [firstLevelParentName, setFirstLevelParentName] = useState("");
    const [secondLevelParentName, setSecondLevelParentName] = useState("");
    const [thirdLevelParentName, setThirdLevelParentName] = useState("");
    const [selectionProfiles, setSelectionProfiles] = useState<SelectionProfile[]>([]);
    const [selectedProfileId, setSelectedProfileId] = useState("");
    const [bullsMatched, setBullsMatched] = useState<BullMatch[]>([]);

    useEffect(() => {
        async function listSelectionProfiles() {
            const response = await api.get("/selection-profiles");
            setSelectionProfiles(response.data);
        }

        listSelectionProfiles();
    }, []);

    useEffect(() => {
        async function matching() {
            try {
                const response = await api.get(
                    `/selection-profiles/${selectedProfileId}?cow_first_level_parent=${firstLevelParentName}&cow_second_level_parent=${secondLevelParentName}&cow_third_level_parent=${thirdLevelParentName}`
                );
    
                setBullsMatched(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (firstLevelParentName && secondLevelParentName && thirdLevelParentName && selectedProfileId) {
            matching();
        }

    }, [selectedProfileId]);

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
                                onChange={(event) => setFirstLevelParentName(event.target.value)}
                                value={firstLevelParentName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nome do Avô</label>    
                            <input
                                type="text"
                                id="second_level_parent"
                                name="second_level_parent"
                                onChange={(event) => setSecondLevelParentName(event.target.value)}
                                value={secondLevelParentName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nome do Bisavô</label>    
                            <input
                                type="text"
                                id="third_level_parent"
                                name="third_level_parent"
                                onChange={(event) => setThirdLevelParentName(event.target.value)}
                                value={thirdLevelParentName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="selection_profile_id">Perfil de seleção</label>
                            <select 
                                name="selection_profile_id" 
                                id="selection_profile_id" 
                                onChange={(event) => setSelectedProfileId(event.target.value)}
                            >
                                {
                                    selectionProfiles.map((selectionProfile) => {
                                        return (
                                            <option
                                                key={selectionProfile.id}
                                                value={selectionProfile.id}
                                            >{selectionProfile.name}</option>
                                        );
                                    })
                                }
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
                                <th>ID Registro</th>
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
                                {
                                    bullsMatched.map((bullMatched) => {
                                        return (
                                            <tr key={bullMatched.register_id}>
                                                <td>{bullMatched.register_id}</td>
                                                <td>{bullMatched.name}</td>
                                                <td>{bullMatched.first_level_parent}</td>
                                                <td>{bullMatched.second_level_parent}</td>
                                                <td>{bullMatched.third_level_parent}</td>
                                                <td>{bullMatched.bull_features.ptal}</td>
                                                <td>{bullMatched.bull_features.ptat}</td>
                                                <td>{bullMatched.bull_features.udder_index}</td>
                                                <td>{bullMatched.bull_features.conformation_index}</td>
                                                <td>{bullMatched.bull_features.dpr}</td>
                                                <td>{bullMatched.bull_features.productive_life}</td>
                                                <td>{bullMatched.bull_features.legs_composition}</td>
                                                <td>{bullMatched.bull_features.beta_casein}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
