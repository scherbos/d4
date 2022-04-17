import React from 'react'
import { Heading } from '../components'
import { BirdsChart } from '../features/BirdsChart'

export function DashboardPage() {

    return (
        <div>
            <Heading tag="h1">Dashboard page</Heading>
            <BirdsChart />
        </div>
    )
}