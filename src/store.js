
import React from 'react'

export const ModeContext = React.createContext(null)

export default ({ children }) => {
    const [mode, setMode] = useState("WW");
    const [fmode, setFmode] = useState("GC");
  
    const [btnCtrl, setBtnCtrl] = useState(-1);
    const [btn2Ctrl, setBtn2Ctrl] = useState(-1);

  return <ModeContext.Provider>{children}</ModeContext.Provider>
}