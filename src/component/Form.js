import React, { useState } from 'react'

const Form = () => {

    const [value,setValue]=useState('')
  return (
    <div>
           <form>
            <input type={'text'} />
            <button>submit</button>
           </form>
    </div>
  )
}

export default Form
