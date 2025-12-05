import React, { useEffect, useState } from 'react'
/* import { position1, position2, position3 } from '../../../assets'; */
import { ENV } from '../../../utils';
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'

export function Stats() {
    /* const image_positions = [position1, position2, position3]; */
    const colors_leads = ["gold", "silver", "bronce"]
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [filtered, setFilteredData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE}?key=${ENV.SHEETS.APIKEY}`
                );
                const result = await res.json();
                setData(result.values); // ✅ guardar solo las filas
                setFilteredData(result.values.slice(1));

            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);
    const handleSelect = (value) => {
        //const value = "U18"
        let newData = ""
        if (value == "") {
            newData = data.slice(1)
        } else {
            newData = data.filter(row => row[3] === value);
        }
        setFilteredData(newData)

    };
    //Recuperar los headers
    const heads = data.slice(0)

    // ✅ Verifica que haya datos antes de renderizar
    if (!filtered.length) return <div className='loader'><LineSpinner size="100" stroke="5" speed="1" color="#B93D17" /></div>;

    return (
        <main className='stats-page d-flex flex-column'>
            <section className='filter-container'>
                <select onChange={(e) => handleSelect(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="U18">U18</option>
                    <option value="U16">U16</option>
                </select>
                <select>
                    <option value="">Todos</option>
                    <option value="fem">Fem</option>
                    <option value="masc">Masc</option>
                </select>
            </section>
            <section className="table-stats d-flex justify-content-center">
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>Pos.</th>
                            {heads[0].map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.slice(0).map((row, i) => (
                            <tr key={i}>
                                <td>
                                    {i < 3 ? (
                                        <div className="d-flex flex-row justify-content-center align-items-center container-leads">
                                            <i class={`fa-solid fa-medal ${colors_leads[i]}`}>
                                            </i>
                                            <p>{i + 1}</p>
                                        </div>) : ("")}
                                    {/* {i < 3 ? (<img src={image_positions[i]} alt={`imagen de la posicion #${i+1}`} />) : ("")} */}
                                </td>
                                {row.map((cell, j) => (
                                    <td key={j}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

