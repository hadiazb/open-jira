import { useState } from 'react'

export const useFocus = () => {
    const [focus, setFocus] = useState(false)

    const handleOnBlur = (valueInput: string) => {
        !valueInput.length ? setFocus(false) : setFocus(true)
    }

    return {
        focus,
        setFocus,
        handleOnBlur,
    }
}
