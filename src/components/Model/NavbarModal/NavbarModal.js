import React , {useState} from 'react'
import './NavbarModal.css'
export default function NavbarModal({title , children }) {
  const [isOpen , setOpen]=useState(false)
  return (
    <div className='AccordionOutterBox text-white bg-neutral-900'>
    <div 
        className={`accordion-title text-white ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
    >
      <h3 style={{ marginTop: '0px', marginBottom: "1px", fontSize: "14px", fontWeight: "normal" }} >{title}</h3>
    </div>
    <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
    </div>


</div>
  )
}
