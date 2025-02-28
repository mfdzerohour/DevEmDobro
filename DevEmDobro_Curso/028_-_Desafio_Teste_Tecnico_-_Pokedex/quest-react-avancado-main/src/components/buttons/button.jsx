import React from 'react';

import './button.css' 






export const Input = (props) => {
    return (
        <label className='label'>
            <p>Switch Theme</p>
            <input className='toggle-input'
                {...props}
            />
            <div className='slider'>
                <button className='toggle-button'/>
            </div>
        </label>
        
    )
}
