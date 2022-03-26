import { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
      setVisible(!visible)
    } 

    useImperativeHandle(ref, () => {
      return {
        toggleVisibility
      }
    })

    return (
      <div style={{textAlign: "center", marginBottom: "4rem"}}>
        <div style={hideWhenVisible}>
          <button className='btn btn-success btn-sm' onClick={toggleVisibility}>{props.buttonLabelShow}</button>
        </div>
        <div style={showWhenVisible}>
          <button className='btn btn-danger btn-sm' onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'CANCELAR CARGA DE DATOS'}</button>
          {props.children}
        </div>
      </div>
    ) 
})

export default Togglable