import React from 'react'

import './styles.css'

interface HeadingProps {
    children: React.ReactNode
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ tag, children, ...rest }: HeadingProps) {

    return React.createElement(
        tag,
        {
            className: 'heading',
            ...rest,
        },
        children
    )
}