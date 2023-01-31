/* eslint-disable @typescript-eslint/no-explicit-any */
// import original module declarations
import 'styled-components/macro'

// and extend them!
declare module 'styled-components' {
    declare type HashOrString = Record<string | number | symbol, string> | string

    export type OverwriteWithTheme<T, O = T> = T extends Record<infer K, any>
        ? {
              [key in K]: T[key] extends object
                  ? OverwriteWithTheme<T[key], O>
                  : T[key] | ((theme: O) => string)
          }
        : never

    export type ThemeWithFunc = OverwriteWithTheme<DefaultTheme>
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            success: string
            danger: string
            warning: string
            info: string
            light: string
            dark: string
            white: string
        }

        font: {
            size: {
                xxs: string
                xs: string
                sm: string
                base: string
                md: string
                bg: string
                lg: string
                xl: string
            }
        }

        boxShadow: {
            customMd: string
            customCard: string
            input: string
            transparent: string
        }

        fontFamily: {
            montserrat: string | string[]
            helvetica: string | string[]
        }

        screens: {
            sm: string
            md: string
            lg: string
            xl: string
            '2xl': string
        }

        borderRadius: {
            none: string
            xs: string
            sm: string
            md: string
            lg: string
            large: string
        }
    }
}
