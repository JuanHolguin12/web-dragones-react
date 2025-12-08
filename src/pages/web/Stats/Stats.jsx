import React, { useEffect, useState } from 'react'
/* import { position1, position2, position3 } from '../../../assets'; */
import { ENV } from '../../../utils';
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'

export function Stats() {
    /* const image_positions = [position1, position2, position3]; */
    const colors_leads = ["gold", "silver", "bronce"]
    const [data, setData] = useState([]);
    /*     const [filter, setFilter] = useState("");*/
    const [filtered, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedRama, setSelectedRama] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE}?key=${ENV.SHEETS.APIKEY}`
                );
                const result = await res.json();
                setData(result.values); // ✅ guardar solo las filas

            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);


    const applyFilters = () => {
        let result = data.slice(1); // toda la data menos encabezados

        // Filtrar por categoría (columna 3)
        if (selectedCategory !== "") {
            result = result.filter(row => row[3] === selectedCategory);
        }

        // Filtrar por rama (columna 4 por ejemplo)
        if (selectedRama !== "") {
            result = result.filter(row => row[4] === selectedRama);
        }

        setFilteredData(result);
    };
    const handleRama = (value) => {
        setSelectedRama(value);
    };
    const handleCategory = (value) => {
        setSelectedCategory(value);
    };

    const handleSortByAsistencias = (value) => {
        const sorted = [...filtered].sort((a, b) => {
            switch (value) {
                case "puntos":
                    return Number(b[5]) - Number(a[5]);
                case "triples":
                    return Number(b[6]) - Number(a[6]);
                case "asistencias":
                    return Number(b[7]) - Number(a[7]);
                case "rd":
                    return Number(b[8]) - Number(a[8]);
                case "ro":
                    return Number(b[9]) - Number(a[9]);
                case "":
                    return Number(b[5]) - Number(a[5]);
            }
        });

        setFilteredData(sorted);
    };


    useEffect(() => {
        if (data.length > 0) {
            applyFilters();
        }
    }, [selectedCategory, selectedRama, data]);
    //Recuperar los headers
    const heads = data.slice(0)

    // ✅ Verifica que haya datos antes de renderizar
    if (!data.length) return <div className='loader'><LineSpinner size="100" stroke="5" speed="1" color="#B93D17" /></div>;

    return (
        <main className='stats-page d-flex flex-column'>
            <section className='filter-container'>
                <div>
                    <select required onChange={(e) => handleCategory(e.target.value)} id='categorias'>
                        <option hidden disabled selected value="">Selecciona la categoria</option>
                        <option value="">Todos</option>
                        <option value="U18">U18</option>
                        <option value="U16">U16</option>
                    </select>
                </div>
                <div>
                    <select required onChange={(e) => handleRama(e.target.value)} id='ramas'>
                        <option hidden disabled selected value="">Selecciona la rama</option>
                        <option value="">Todos</option>
                        <option value="masc">Masc</option>
                        <option value="fem">Fem</option>
                    </select>
                </div>
                <div>
                    <select required onChange={(e) => handleSortByAsistencias(e.target.value)} id='tipo_estadistica'>
                        <option hidden disabled selected value="">Tipo de estadistica</option>
                        <option value="puntos">Puntos</option>
                        <option value="triples">Triples</option>
                        <option value="asistencias">Asistencias</option>
                        <option value="rd">Rebotes defensivos</option>
                        <option value="ro">Rebotes ofensivos</option>
                    </select>
                </div>
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

