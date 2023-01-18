import React, { useState } from 'react'

const Form = () => {

    const [value,setValue]=useState('')
  return (
    <div>
           <form>

            <label>email:</label>
            <input type={'text'} />
            <label>password:</label>
            <input type={'password'} />
            <button>submit</button>
           </form>
    </div>
  )
}

export default Form
