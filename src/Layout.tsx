import React from 'react'
import { Routes } from './Routes'
import { NavLink } from './components'

export function Layout() {
    return (
        <div className="App">
            <header className="header">D4 Birdwatcher</header>
            <nav className="navigation">
                <NavLink to="/input">Input</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <main className="content">
                <Routes></Routes>
            </main>
        </div>
    )
}