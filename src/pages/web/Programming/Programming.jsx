import React, { useEffect, useState } from 'react'
import { ENV } from '../../../utils';
import { LineSpinner } from 'ldrs/react';
import { CardProgramming } from '../../../components/CardProgramming';

export function Programming() {
    /* List per days */
    const [saturday, setDataSaturday] = useState([]);
    const [sunday, setDataSunday] = useState([]);
    const [monday, setDataMonday] = useState([]);
    const [thusday, setDataThusday] = useState([]);
    /* filters per days */
    const [filterSaturday, setFilteredSaturday] = useState([]);
    const [filterSunday, setFilteredSunday] = useState([]);
    const [filterMonday, setFilteredMonday] = useState([]);
    const [filterThusday, setFilteredThusday] = useState([]);
    /*  */
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedRama, setSelectedRama] = useState("");
    const [selectedName, setSelectedName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const saturday = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE_PROGRAMMING.saturday}?key=${ENV.SHEETS.APIKEY}`)
                const saturday_res = await saturday.json();
                setDataSaturday(saturday_res.values.slice(1)); // ✅ guardar solo las filas
                //setFilteredData(result.values.slice(1));
                const sunday = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE_PROGRAMMING.sunday}?key=${ENV.SHEETS.APIKEY}`)
                const sunday_res = await sunday.json();
                setDataSunday(sunday_res.values.slice(1)); // ✅ guardar solo las filas
                const monday = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE_PROGRAMMING.monday}?key=${ENV.SHEETS.APIKEY}`)
                const monday_res = await monday.json();
                setDataMonday(monday_res.values.slice(1)); // ✅ guardar solo las filas
                const thusday = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE_PROGRAMMING.thusday}?key=${ENV.SHEETS.APIKEY}`)
                const thusday_res = await thusday.json();
                setDataThusday(thusday_res.values.slice(1)); // ✅ guardar solo las filas

            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        if (saturday.length > 0) {
            applyFilters();
        }
        if (sunday.length > 0) {
            applyFilters();
        }
        if (monday.length > 0) {
            applyFilters();
        }
        if (thusday.length > 0) {
            applyFilters();
        }
        if (selectedName > 0) {
            applyFilters()
        }
    }, [selectedCategory, selectedRama, saturday, sunday, monday, thusday, selectedName]);


    const applyFilters = () => {

        // Función que aplica TODOS los filtros a un array de filas
        const filterDay = (data) => {
            return data
                // Filtrar por categoría
                .filter(row =>
                    selectedCategory === "" || selectedCategory === "todos" || row[6] === selectedCategory
                )
                // Filtrar por rama
                .filter(row =>
                    selectedRama === "" || selectedRama === "todos" || row[7] === selectedRama
                )
                // Filtrar por equipo (col 2 y col 5)
                .filter(row => {
                    if (selectedName.trim() === "") return true;
                    const term = selectedName.toLowerCase();
                    return (
                        row[2].toLowerCase().includes(term) ||
                        row[5].toLowerCase().includes(term)
                    );
                });
        };

        // Aplicamos la misma función a cada día
        setFilteredSaturday(filterDay(saturday));
        setFilteredSunday(filterDay(sunday));
        setFilteredMonday(filterDay(monday));
        setFilteredThusday(filterDay(thusday));
    };


    const handleRama = (value) => {
        setSelectedRama(value);
    };
    const handleName = (value) => {
        setSelectedName(value);
    };
    const handleCategory = (value) => {
        if (selectedRama == "Mixto") {
            setSelectedRama(""); // resetear select de ramas
        }
        setSelectedCategory(value);
    };


    if (!saturday.length) return <div className='loader'><LineSpinner size="100" stroke="5" speed="1" color="#B93D17" /></div>;

    return (
        <main className='padding-sections programming-page'>
            <div className='d-flex filter-container'>
                <div>
                    <select required onChange={(e) => handleCategory(e.target.value)} id='categorias'>
                        <option value="" disabled selected hidden>Seleccione una categoria</option>
                        <option value="todos">Todos</option>
                        <option value="U18">U18</option>
                        <option value="U16">U16</option>
                        <option value="U12">U12</option>
                    </select>
                </div>
                <div>
                    <select required onChange={(e) => handleRama(e.target.value)} id='ramas'>
                        <option  value="" disabled selected hidden>Seleccione una rama</option>
                        <option value="todos">Todos</option>
                        <option value="Masc">Masc</option>
                        <option value="Fem">Fem</option>
                        {selectedCategory === "U12" && (
                            <option value="Mixto">Mixto</option>
                        )}
                    </select>
                </div>
                <div>
                    <input placeholder='Nombre del equipo' onChange={(e) => handleName(e.target.value)} id='name' />
                </div>
            </div>
            <section className='programming-section'>
                <div className='jornada d-flex justify-content-center align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Sábado 13 de Diciembre - Jornada 1</p>
                </div>
                <div className='content-programming'>
                    <div className='programming'>
                        {filterSaturday.length < 1 ?
                            <p className='programming__empty-status'>No hay información de partidos</p>
                            :
                            filterSaturday.map((row) => (
                                <CardProgramming info={row} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='programming-section'>
                <div className='jornada d-flex justify-content-center align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Domingo 14 de Diciembre - Jornada 2</p>
                </div>
                <div className='content-programming'>
                    <div className='programming'>
                        {filterSunday.length < 1 ?
                            <p className='programming__empty-status'>No hay información de partidos</p>
                            :
                            filterSunday.map((row) => (
                                <CardProgramming info={row} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='programming-section'>
                <div className='jornada d-flex justify-content-center align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Lunes 15 de Diciembre - Jornada 3</p>
                </div>
                <div className='content-programming'>
                    <div className='programming'>
                        {filterMonday.length < 1 ?
                            <p className='programming__empty-status'>No hay información de partidos</p>
                            :
                            filterMonday.map((row) => (
                                <CardProgramming info={row} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='programming-section'>
                <div className='jornada d-flex justify-content-center align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Martes 16 de Diciembre - Jornada 4</p>
                </div>
                <div className='content-programming'>
                    <div className='programming'>
                        {filterThusday.length < 1 ?
                            <p className='programming__empty-status'>No hay información de partidos</p>
                            :
                            filterThusday.map((row) => (
                                <CardProgramming info={row} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
