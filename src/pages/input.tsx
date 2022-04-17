import React from 'react'
import { Heading } from '../components'
import { BirdsForm } from '../features/BirdsForm'

export function InputPage() {
    return (
        <div>
            <Heading tag="h1">Input page</Heading>
            <BirdsForm />
        </div>
    )
}