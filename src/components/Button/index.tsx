import React from 'react'
import './styles.css'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    children: React.ReactNode
}

export function Button({ type = 'button', children }: ButtonProps) {
    return (
        <button type={type} className="button">{children}</button>
    )
}