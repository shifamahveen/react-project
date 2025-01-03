import { createContext } from 'react';
import Parent from './hooks/Parent';

// create context
export const GlobalVar = createContext();

const App = () => {
  return (
      <GlobalVar.Provider value="xyz" >
        <Parent />
      </GlobalVar.Provider>
  )
}

export default App;