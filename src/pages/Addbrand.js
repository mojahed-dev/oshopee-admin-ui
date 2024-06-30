import React from 'react'
import CustomInput from '../components/CustomInput'

function Addbrand() {
  return (
    <div>
        <h4 className="mb-4">Add Brand</h4>
        <div>
            <form action="">
                <CustomInput 
                    type='text'
                    label="Enter Brand Name"
                />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Addbrand