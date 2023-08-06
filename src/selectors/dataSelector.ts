import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useEffect, useState } from "react"

function useFilteredData(query: string) {
    const data = useSelector((state: RootState) => state.notes)
    const [filtered, setFiltered] = useState(data)
    useEffect(() => {
        setFiltered(data.filter((item) => item.status === query))
    }, [data])    
    return filtered
    
}

export default useFilteredData