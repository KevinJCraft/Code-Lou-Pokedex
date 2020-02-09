import { useEffect } from "react"
import { useHistory } from 'react-router'

const useOutsideClick = (ref) => {

    const history = useHistory()

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            history.push('/')
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })
}

export default useOutsideClick