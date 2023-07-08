import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changePage = ()=>{
        navigate("/login");
    }
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const user = { fullname, email, password }

        fetch("http://localhost:3030/user/signup", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    alert("Signup successful, Please Login");
                    navigate("/login");
                }))
            .catch((err) => console.error(err))
    }

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
                            <FormLabel htmlFor='fullname' >Full Name</FormLabel>
                            <Input id='fullname' type='text' value={fullname} onChange={(e) => { setFullname(e.target.value) }} placeholder='Full Name' />
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input id='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input id='password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                            <Button colorScheme='yellow' borderRadius={"25px"} size='md' mt={"20px"} onClick={handleSignup}>SIGNUP</Button>
                        </FormControl>
                        <Text mt={"5px"}>
                            Already on Retax? &nbsp;
                            <Button color="teal.500" onClick={changePage}>
                                LOG IN
                            </Button>
                        </Text>
                    </Box>
                </Center>
            </Flex>
        </div>
    );
};

export default Signup;