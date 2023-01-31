/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import { Theme } from '../../../../styles/Theme'

import {
    StyledTypographyH1,
    StyledTypographyH2,
    StyledTypographyH3,
    StyledTypographyH4,
    StyledTypographyH5,
    StyledTypographyH6,
    StyledTypographyA,
    StyledTypographyP,
    StyledTypographySpan,
} from '../typography-styles'

export type UseTypography = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
    color?:
        | 'primary'
        | 'secondary'
        | 'dark'
        | 'danger'
        | 'warning'
        | 'light'
        | 'success'
        | 'warning'
}

export type StyledTypographyType =
    | typeof StyledTypographyH1
    | typeof StyledTypographyH2
    | typeof StyledTypographyH3
    | typeof StyledTypographyH4
    | typeof StyledTypographyH5
    | typeof StyledTypographyH6
    | typeof StyledTypographyA
    | typeof StyledTypographyP
    | typeof StyledTypographySpan

export const useTypography = ({ variant, color }: UseTypography) => {
    const { colors } = Theme()
    const [colorAux] = useState(colors)
    const [component] = useState({
        h1: StyledTypographyH1,
        h2: StyledTypographyH2,
        h3: StyledTypographyH3,
        h4: StyledTypographyH4,
        h5: StyledTypographyH5,
        h6: StyledTypographyH6,
        a: StyledTypographyA,
        p: StyledTypographyP,
        span: StyledTypographySpan,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [StyledTypography, setStyledTypography] = useState<any>(component[variant])
    const [StyledColor, setStyledColor] = useState(colorAux[color || 'dark'])

    useEffect(() => {
        setStyledTypography(component[variant])
        setStyledColor(colorAux[color || 'dark'])
    }, [variant, component, color, colorAux])

    return {
        StyledTypography,
        StyledColor,
    }
}
