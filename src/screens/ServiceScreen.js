import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CustomForm from '../components/CustomForm';
import Address from '../components/Address';

function ServiceScreen() {
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
            <CustomForm />
            <Address />
        </div>
    );
}

export default ServiceScreen;
