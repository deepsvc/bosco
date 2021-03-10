import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import WheelTruingForm from '../components/WheelForm';
import Address from '../components/Address';

function WheelForm() {
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
            <WheelTruingForm />
            <Address />
        </div>
    );
}

export default WheelForm;
