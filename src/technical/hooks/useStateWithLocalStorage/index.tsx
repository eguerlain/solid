import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// Storage with effect  https://www.robinwieruch.de/local-storage-react

export function useStateWithLocalStorage<T>(localStorageKey: string): [T | null, Dispatch<SetStateAction<T | null>>] {
    const [value, setValue] = useState<T | null>(
        JSON.parse(localStorage.getItem(localStorageKey) || "null") // getItem might return null. As JSON.parse needs string to parse, using "null" as a fallback
    )

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    }, [value, localStorageKey])

    return [value, setValue]
}
