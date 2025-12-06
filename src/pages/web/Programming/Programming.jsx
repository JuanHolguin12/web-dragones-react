import React, { useEffect, useState } from 'react'
import { ENV } from '../../../utils';
import { LineSpinner } from 'ldrs/react';
import { CardProgramming } from '../../../components/CardProgramming';

export function Programming() {
    const [data, setData] = useState([]);
    const [filtered, setFilteredData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${ENV.SHEETS.SHEETID}/values/${ENV.SHEETS.RANGE_PROGRAMMING}?key=${ENV.SHEETS.APIKEY}`
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
    console.log(filtered);
    if (!data.length) return <div className='loader'><LineSpinner size="100" stroke="5" speed="1" color="#B93D17" /></div>;

    return (
        <main className='padding-sections'>
            <section className='programming-section'>
                <div className='jornada d-flex justify-content-center align-items-center'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>Sábado 13 de Diciembre - Jornada 1</p>
                </div>
                <div className='content-programming'>
                    <span className='category-span'>Categoria U18</span>
                    <div className='programming p-4'>
                        {data.slice(1).map((row) => (
                            <CardProgramming info={row} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
