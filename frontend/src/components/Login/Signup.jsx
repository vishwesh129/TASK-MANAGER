import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
    return (
        <div>
            <Flex mt={"140px"} w={"70%"} ml={"350px"}>
                <Center>
                    <Box>
                        <Image w={"400px"} src='https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?w=740&t=st=1688667295~exp=1688667895~hmac=18c4d2ad1ddba49f67487eef5e4789b5646743493d8e0a8f6bebf4ee810f558a' alt='Task' />
                    </Box>
                    <Box backgroundColor={"gray.100"} p={"30px"} borderWidth='1px' overflow='hidden'>
                        <Heading>SIGN UP</Heading>
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='First name' />
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' />
                            <Button colorScheme='yellow' borderRadius={"25px"} size='md' mt={"20px"} >SIGNUP</Button>
                        </FormControl>
                        <Text mt={"5px"}>
                            Already on Retax? &nbsp;
                            <Link color="teal.500">
                                LOG IN
                            </Link>
                        </Text>
                    </Box>
                </Center>
            </Flex>
        </div>
    );
};

export default Signup;