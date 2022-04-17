import React from 'react'
import { Link, useMatch } from 'react-router-dom'

interface NavLinkProps {
    to: string
    children: React.ReactNode
}

export function NavLink({ to, children }: NavLinkProps) {
    const active = useMatch(to)

    return <Link to={to} className={active ? 'active' : undefined}>{children}</Link>
}