import React from 'react'
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import { InputPage } from './pages/input'
import { DashboardPage } from './pages/dashboard'

export function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/input" element={<InputPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/" element={<Navigate to="/input" />} />
        </ReactRouterRoutes>
    )
}