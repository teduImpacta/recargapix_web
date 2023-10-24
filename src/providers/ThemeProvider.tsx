import {
  useState,
  type ReactNode,
  useCallback,
  createContext,
  useContext
} from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { theme, rpTheme, type Theme } from '../themes'

type ThemeContextProps = {
  handleTheme: (name: 'fault' | 'card') => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(rpTheme)

  const handleTheme = useCallback((name: 'fault' | 'card') => {
    const newSelectedTheme = name === 'fault' ? theme : rpTheme
    setSelectedTheme(newSelectedTheme)
  }, [])

  return (
    <StyledProvider theme={selectedTheme}>
      <ThemeContext.Provider
        value={{
          handleTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context)
    throw new Error('useTheme is missing called inside ThemeProvide!')

  return context
}
