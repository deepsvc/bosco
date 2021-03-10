import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Address from '../components/Address';
import WheelDet from '../components/WheelDet';

function WheelTurning() {
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
            <WheelDet />
            <Address />
        </div>
    );
}

export default WheelTurning;
