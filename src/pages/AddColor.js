import React from 'react'
import CustomInput from '../components/CustomInput'

function AddColor() {
  return (
    <div>
        <h4 className="mb-4">Add Color</h4>
        <div>
            <form action="">
                <CustomInput 
                    type='color'
                    label="Enter Color"
                />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-4'>Add Color</button>
            </form>
        </div>
    </div>
  )
}

export default AddColor