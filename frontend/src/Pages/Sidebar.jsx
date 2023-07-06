import { Box, Button, ButtonGroup, Center, Flex, Grid, Heading, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiHome,
    FiCalendar
} from 'react-icons/fi';
import { CgCheckO } from "react-icons/cg";

const Sidebar = () => {
    return (
        <div>
            <Center backgroundColor={'gray.100'} pb={"10px"}>
                <Flex minWidth='max-content' alignItems='center' gap='2' mt={"10px"} w={"95%"} >
                    <Box p='2'>
                        <Link to={"/dashboard"}>
                            <Heading size='lg'>TASK MANAGER</Heading>
                        </Link>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap='2'>
                        <Link to={"/signup"}>
                            <Button colorScheme='yellow' borderRadius={"25px"} size='lg'>Sign Up</Button>
                        </Link>
                        <Link to={"/login"}>
                            <Button colorScheme="yellow" borderRadius={"25px"} size='lg'>Log in</Button>
                        </Link>
                    </ButtonGroup>
                </Flex>
            </Center>

            <Grid h={"90vh"}>
                <Box mr={"0px"} w={"15%"} backgroundColor={'yellow.100'}>
                    <Link to={"/dashboard"}>
                        <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                            <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={FiHome} />
                            <p>Dashboard</p>
                        </Button>
                    </Link>
                    <Link to={"/tasks"}>
                        <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                            <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={CgCheckO} />
                            <p>Tasks</p>
                        </Button>
                    </Link>
                    <Link to={"/calendar"}>
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
                </Box>
            </Grid>


        </div>
    );
};

export default Sidebar;