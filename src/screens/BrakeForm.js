import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrakeBleedingForm from '../components/BrakeForm';
import Address from '../components/Address';

function BrakeForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div
                className='header2'
                style={{ height: '40vh', borderRadius: '0 0 10px 10px' }}>
                <div className='container'>
                    <Navbar />
                </div>
            </div>
            <BrakeBleedingForm />
            <Address />
        </div>
    );
}

export default BrakeForm;
