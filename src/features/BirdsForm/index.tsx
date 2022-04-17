import React, { ChangeEvent, FormEvent } from 'react'
import { saveBirds } from '../../api'
import { Button, Input } from '../../components'

import './styles.css'

export function BirdsForm() {
    const [birds, setBirds] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)
    const disabled = birds == '' ?? error

    const handleChangeBirds = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        if (value.includes('.') || isNaN(Number(value))) {
            setError('Value should be an integer')
        } else {
            setError(null)
        }

        setBirds(value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        if (!error) {
            saveBirds({ amount: Number(birds), date: Date.now() })
                .then(data => console.log('saved', data))
        }
    }
    return (
        <form className="birds-form" onSubmit={handleSubmit}>
            <Input label="Birds" error={error} value={birds} onChange={handleChangeBirds} />
            <Button type="submit" disabled={disabled}>hello</Button>
        </form>
    )
}