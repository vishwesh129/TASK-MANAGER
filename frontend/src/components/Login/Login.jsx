import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = () => {
        const user = { email, password }
        fetch("http://localhost:3030/user/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                    localStorage.setItem("token", data.token)
                }
                alert("Login Successful")
                navigate("/dashboard");
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <Flex mt={"170px"} w={"70%"} ml={"400px"}>
                <Center>
                    <Box>
                        <Image w={"300px"} src='https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?w=740&t=st=1688667295~exp=1688667895~hmac=18c4d2ad1ddba49f67487eef5e4789b5646743493d8e0a8f6bebf4ee810f558a' alt='Task' />
                    </Box>
                    <Box backgroundColor={"gray.100"} p={"30px"} borderWidth='1px' overflow='hidden'>
                        <Heading>LOG IN</Heading>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input id='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                            <FormLabel>Password</FormLabel>
                            <Input id='password' placeholder='Password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <Button colorScheme='yellow' borderRadius={"25px"} size='md' mt={"20px"} onClick={handleLogin}>LOGIN</Button>
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

export default Login;