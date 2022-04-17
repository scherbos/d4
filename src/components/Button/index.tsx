import React from 'react'
import './styles.css'

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    onClick?: () => void
}

export function Button({ type = 'button', children, disabled, onClick }: ButtonProps) {
    return (
        <button type={type} className="button" disabled={disabled} onClick={onClick}>{children}</button>
    )
}