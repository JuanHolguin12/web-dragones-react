import React from 'react'

import { Navbar, Footer } from '../components'

export function WebLayout(props) {
    const { children } = props
    return (
        <div>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>

    )
}
