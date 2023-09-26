import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

function NavigationBar() {
    return (
        <div className='navbar'>
            <Box className='container'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/experience" className='link'>Experience</Link>
            </Box>
        </div>
    )
}

export default NavigationBar;