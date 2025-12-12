import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";



//LAYOUT
import { WebLayout } from '../layout/WebLayout'
//PAGES
import { Home, AboutUs, FIB, Stats, News, Programming } from '../pages/web'


export function AuthRouter() {

    // eslint-disable-next-line no-unused-vars
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }
    return (
        <Routes>
            <Route path='/' element={loadLayout(WebLayout, Home)} />
            <Route path='/sobre_nosotros' element={loadLayout(WebLayout, AboutUs)} />
            <Route path='/festival_internacional' element={loadLayout(WebLayout, FIB)} />
            <Route path='/estadisticas' element={loadLayout(WebLayout, Stats)} />
            <Route path='/news/*' element={loadLayout(WebLayout, News)} />
            <Route path='/programacion' element={loadLayout(WebLayout, Programming)} />
        </Routes>
    )
}
