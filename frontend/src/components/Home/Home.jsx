import { Button, Center, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllRoutes from '../../AllRoutes';

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
                        <Link to={"/tasks"}>
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