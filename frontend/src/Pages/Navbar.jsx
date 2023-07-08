import { Avatar, Box, Button, Center, Flex, Heading, Icon, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiHome,
    FiCalendar
} from 'react-icons/fi';
import { CgCheckO } from "react-icons/cg";

const Navbar = () => {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        // Redirect to the login page after logout
    };
    return (
        <div>
            <Center backgroundColor={'gray.100'} pb={"10px"}>
                <Flex minWidth='max-content' alignItems='center' gap='2' mt={"10px"} w={"95%"} >
                    <Box p='2'>
                        <Link to={"/dashboard"}>
                            <Heading size='lg'>TASK MANAGER</Heading>
                        </Link>
                    </Box>

                    <Flex>
                        {/* <Link to={"/dashboard"}>
                            <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                                <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={FiHome} />
                                <p>Dashboard</p>
                            </Button>
                        </Link> */}
                        <Link to={"/tasks"}>
                            <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                                <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={CgCheckO} />
                                <p>Tasks</p>
                            </Button>
                        </Link>
                        <Link to={"/calender"}>
                            <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                                <Icon
                                    mr="4"
                                    fontSize="16"
                                    _groupHover={{
                                        color: 'white',
                                    }}
                                    as={FiCalendar}
                                />
                                <p>Calendar</p>
                            </Button>
                        </Link>
                        <Link to={"/resources"}>

                            <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                                <Icon
                                    mr="4"
                                    fontSize="16"
                                    _groupHover={{
                                        color: 'white',
                                    }}
                                    as={FiCalendar}
                                />
                                <p>Resources</p>
                            </Button>
                        </Link>
                    </Flex>
                    <Spacer />
                    {token && (
                        <Link to={"/login"}>
                            <Button size='lg' variant='ghost' onClick={handleLogout}>
                                Logout
                            </Button>
                        </Link>
                    )}
                    <Stack direction='row'>
                        <Link to={"/signup"}>
                            <Avatar src='https://bit.ly/broken-link' />
                        </Link>

                    </Stack>
                </Flex>
            </Center>




        </div>
    );
};

export default Navbar;