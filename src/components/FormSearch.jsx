import { useRef, useState } from "react"
import getRandomNumber from "../utils/getRandomNumber"

const FormSearch = ({ setIdLocation }) => {

  const idLocationValue = useRef()

  const [inputIsEmpty, setInputIsEmpty] = useState(true)

  const handleSubmit = e => {

    //aqui estaba mal escrito preventDefault haciendo que se afecta
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim()
    console.log(inputValue)
    if (inputValue === '') {
      setIdLocation(getRandomNumber(126))
    } else {
      setIdLocation(inputValue)
    }
  }

  return (
    <>
      {
        inputIsEmpty ? <h3>This field is required 👀</h3> : <div></div>
      }
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter id location"
          type="text"
          ref={idLocationValue}
        />
        <button>Search</button>
      </form>
    </>

  )
}

export default FormSearch