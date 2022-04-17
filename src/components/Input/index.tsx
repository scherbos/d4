import React, { ChangeEventHandler } from 'react'

import './styles.css'

interface InputProps {
    label?: React.ReactNode
    error?: string
    value: string | number
    onChange: ChangeEventHandler
}

export function Input({ value, onChange, label, error }: InputProps) {
    return (
        <div className="input">
            {label && <label className="input-label">{label}</label>}
            <input type="text" className={`input-field${error ? ' error' : ''}`} value={value} onChange={onChange} />
            {error && <span className="input-error">{error}</span>}
        </div>
    )
}