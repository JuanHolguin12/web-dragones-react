import React, { useEffect, useState } from 'react'
import { position1,position2, position3 } from '../../../assets';

export function Stats() {
    const image_positions = [position1, position2, position3];
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sheetId = "10UrkLpHRY5rcbJQNjJVBbgttTyVEkHa19U1yeTJdIqs";
                const apiKey = "AIzaSyAL_7SRVolZks1x7YxoK3dxLxyZ9kVJTII";
                const range = "Jugadores";

                const res = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
                );
                const result = await res.json();
                setData(result.values); // ✅ guardar solo las filas
                console.log(result.values);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);

    // ✅ Verifica que haya datos antes de renderizar
    if (!data.length) return <p>Cargando datos...</p>;

    return (
        <section className="table-stats d-flex justify-content-center">
            <table>
                <thead>
                    <tr>
                        <th className='positions-leads'>Posición</th>
                        {data[0].map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.slice(1).map((row, i) => (
                        <tr key={i}>
                            <td>
                                {i < 3 ? (<img src={image_positions[i]} alt="imagen"/>) : ("")}
                            </td>
                            {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
