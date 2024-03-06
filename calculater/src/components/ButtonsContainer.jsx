import React from 'react'
import styles from './ButtonsContainer.module.css'

function ButtonsContainer({onButtonClick}) {

    const ButtonsNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.',]

  return (
    <div>
      <div className={styles.buttonContainer}>

            {ButtonsNames.map((buttonName) => (
            <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
            ))
            }
        
      </div>
      
    </div>
  )
}

export default ButtonsContainer
