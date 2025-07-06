import React, { createContext, useContext, useState, ReactNode } from 'react'

interface PoemContextType {
  toggleAllStrophes: (() => void) | null
  allStrophesVisible: boolean
  setToggleFunction: (fn: (() => void) | null) => void
  setAllStrophesVisible: (visible: boolean) => void
}

const PoemContext = createContext<PoemContextType | undefined>(undefined)

export function PoemProvider({ children }: { children: ReactNode }) {
  const [toggleAllStrophes, setToggleAllStrophes] = useState<(() => void) | null>(null)
  const [allStrophesVisible, setAllStrophesVisible] = useState(true)

  const setToggleFunction = (fn: (() => void) | null) => {
    setToggleAllStrophes(() => fn)
  }

  return (
    <PoemContext.Provider
      value={{
        toggleAllStrophes,
        allStrophesVisible,
        setToggleFunction,
        setAllStrophesVisible,
      }}>
      {children}
    </PoemContext.Provider>
  )
}

export function usePoemContext() {
  const context = useContext(PoemContext)
  if (context === undefined) {
    throw new Error('usePoemContext must be used within a PoemProvider')
  }
  return context
}
