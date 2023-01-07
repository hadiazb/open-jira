import { ReactElement } from 'react'

import { useTypography } from './hook'

export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
    children?: React.ReactNode
    className?: string
    target?: boolean
    href?: string
    color?:
        | 'primary'
        | 'secondary'
        | 'dark'
        | 'danger'
        | 'warning'
        | 'light'
        | 'success'
        | 'warning'
    typeFont?: 'primary' | 'secondary'
    onClick?: () => void
}

const Typography: React.FC<TypographyProps> = ({
    children,
    variant,
    className,
    color,
    href,
    target,
    onClick,
    typeFont,
}): ReactElement => {
    const { StyledTypography, StyledColor } = useTypography({ variant, color })

    return (
        <StyledTypography
            as={variant}
            target={target ? '_blank' : ''}
            href={href}
            style={{ color: StyledColor }}
            onClick={onClick}
            variant={variant}
            className={className}
            typeFont={typeFont}
        >
            {children}
        </StyledTypography>
    )
}

export default Typography
