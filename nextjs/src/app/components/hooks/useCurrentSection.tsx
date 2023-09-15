'use client'

import { ReactNode, createContext, useContext, useState } from "react"

// const CurrentSectionContext = createContext()

// export const CurrentSectionProvider = ({ children }: { children: ReactNode }) => {
//     const [isCurrent, setIsCurrent] = useState<'about' | 'experince' | 'projects'>('about')

//     return (
//         <CurrentSectionContext.Provider value={{ isCurrent, setIsCurrent }}>
//             {children}
//         </CurrentSectionContext.Provider>
//     )
// }

// export const useCurrentSection = () => useContext(CurrentSectionContext)