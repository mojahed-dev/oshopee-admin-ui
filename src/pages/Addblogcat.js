import React from 'react'
import CustomInput from '../components/CustomInput'

function Addblogcat() {
  return (
    <div>
        <h4 className="mb-4">Add Blog Category</h4>
        <div>
            <form action="">
                <CustomInput 
                    type='text'
                    label="Enter Blog Category"
                />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Blog Category</button>
            </form>
        </div>
    </div>
  )
}

export default Addblogcat