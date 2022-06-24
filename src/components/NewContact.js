import React from 'react';
import './Css/NewContact.css'
const NewContact = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold p-4'>Add Contact</h2>
            <div className='flex justify-center'>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                    <label for="name" class="form__label">Name</label>
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Phone Number" name="number" id='number' required />
                    <label for="number" class="form__label">Phone Number</label>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='btn'>Add Contact</button>
            </div>
        </div>
    );
};

export default NewContact;