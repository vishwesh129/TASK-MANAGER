import { Button, Center, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Sidebar from '../../Pages/Sidebar';
import AllRoutes from '../../AllRoutes';
import Sidebar from '../../Pages/Sidebar';

const Home = () => {
    const [start, setStart] = useState(false);

    const handleStart = () => {
        setStart(true);
    }

    return (
        <div>
            {
                !start ?
                    <div>
                        <Center>
                            <Heading mt={"10%"} color={'blue.900'}> Welcome to Vishwesh's Task Manager Application</Heading>
                        </Center>
                        <Link to={"/sidebar"}>
                            <Button size='lg' colorScheme='green' mt='50px' onClick={handleStart}>Get Started</Button>
                        </Link>
                    </div>

                    :
                    <div>
                        <AllRoutes />
                    </div>
            }
        </div>
    );
};

export default Home;