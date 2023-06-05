import { useRef, useState } from "react"
import getRandomNumber from "../utils/getRandomNumber"

const FormSearch = ({ setIdLocation }) => {

    const idLocationValue = useRef()

    const [inputIsEmpty, setInputIsEmpty] = useState(true) 

    const handleSubmit = e => {
        e.prevenDeafault()
        const inputValue = idLocationValue.current.value.trim()

        if(inputValue === '') {
          setInputIsEmpty(true)
          setTimeout(() => {
            setInputIsEmpty(false)
          }, 3000)
        } else {
          setIdLocation(inputValue)
        }
    }

  return (
      <>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Enter id location"
          type="text" 
          ref={idLocationValue}
        />
         <button>Search</button>
        </form>
          {
            inputIsEmpty && <h3>This field is required 👀</h3>
          }
      </>
        
  )
}

export default FormSearch