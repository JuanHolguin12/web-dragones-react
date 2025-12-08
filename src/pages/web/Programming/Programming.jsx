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
    }, [selectedCategory, selectedRama, saturday, sunday, monday, thusday]);


    const applyFilters = () => {
        let sat = saturday; // toda la data menos encabezados
        let sun = sunday;
        let mon = monday;
        let thu = thusday;
        // Filtrar por categoría (columna 3)
        if (selectedCategory !== "") {
            sat = sat.filter(row => row[6] === selectedCategory);
            sun = sun.filter(row => row[6] === selectedCategory);
            mon = mon.filter(row => row[6] === selectedCategory);
            thu = thu.filter(row => row[6] === selectedCategory);
        }

        // Filtrar por rama (columna 4 por ejemplo)
        if (selectedRama !== "") {
            sat = sat.filter(row => row[7] === selectedRama);
            sun = sun.filter(row => row[7] === selectedRama);
            mon = mon.filter(row => row[7] === selectedRama);
            thu = thu.filter(row => row[7] === selectedRama);
        }

        setFilteredSaturday(sat);
        setFilteredSunday(sun)
        setFilteredMonday(mon)
        setFilteredThusday(thu)
    };

    const handleRama = (value) => {
        setSelectedRama(value);
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
            <div className='d-flex gap-5 filter-container'>
                <div>
                    <label for="categorias">Categorias:</label>
                    <select onChange={(e) => handleCategory(e.target.value)} id='categorias'>
                        <option value="">Todos</option>
                        <option value="U18">U18</option>
                        <option value="U16">U16</option>
                        <option value="U12">U12</option>
                    </select>
                </div>
                <div>
                    <label for="ramas">Ramas:</label>
                    <select onChange={(e) => handleRama(e.target.value)} id='ramas'>
                        <option value="">Todos</option>
                        <option value="Masc">Masc</option>
                        <option value="Fem">Fem</option>
                        {selectedCategory === "U12" && (
                            <option value="Mixto">Mixto</option>
                        )}
                    </select>
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
