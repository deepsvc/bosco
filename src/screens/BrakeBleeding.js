import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Address from '../components/Address';
import BrakeDet from '../components/BrakeDet';

function BrakeBleeding() {
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
            <BrakeDet />
            <Address />
        </div>
    );
}

export default BrakeBleeding;
