import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Pages/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <Box width={"100%"} backgroundColor={"red"}></Box>
        </div>
    );
};

export default Dashboard;