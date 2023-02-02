/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

export const useFocus = () => {
    const [focus, setFocus] = useState(false)

    const handleOnBlur = (valueInput: string): void => {
        !valueInput.length ? setFocus(false) : setFocus(true)
    }

    return {
        focus,
        setFocus,
        handleOnBlur,
    }
}
