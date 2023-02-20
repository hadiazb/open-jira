/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'

export const useFocus = (valueInput: string) => {
    const [focus, setFocus] = useState(false)

    const handleOnBlur = (): void => {
        !valueInput.length ? setFocus(false) : setFocus(true)
    }

    useEffect(() => {
        handleOnBlur()
    }, [])

    return {
        focus,
        setFocus,
        handleOnBlur,
    }
}
