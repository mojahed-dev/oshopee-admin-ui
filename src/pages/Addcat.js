import React from 'react'
import CustomInput from '../components/CustomInput'

function Addcat() {
  return (
    <div>
        <h4 className="mb-4 title">Add Product Category</h4>
        <div>
            <form action="">
                <CustomInput 
                    type='text'
                    label="Enter Product Category"
                />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Category</button>
            </form>
        </div>
    </div>
  )
}

export default Addcat