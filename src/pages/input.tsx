import React, { ChangeEvent } from 'react'
import { Button, Heading, Input } from '../components'

export function InputPage() {
    const [birds, setBirds] = React.useState('')

    const handleChangeBirds = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setBirds(value)
    }

    const handleSubmit = () => {
        // send request
    }

    return (
        <div>
            <Heading tag="h1">Input page</Heading>

            <form onSubmit={handleSubmit}>
                <Input label="Birds" error="invalid value" value={birds} onChange={handleChangeBirds} />
                <Button type="submit">hello</Button>
            </form>
        </div>
    )
}