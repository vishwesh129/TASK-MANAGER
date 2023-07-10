import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Heading, Input, Select } from '@chakra-ui/react';
import Navbar from '../../Pages/Navbar';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");

    const token = localStorage.getItem("token")

    const fetchData = () => {
        fetch("http://localhost:3030/todo", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleTask = () => {
        const new_task = {
            desc, status
        }
        fetch("http://localhost:3030/todo/create", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(new_task)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setTasks(tasks => [...tasks, new_task]);
                fetchData();
                setDesc('');
                setStatus('');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        return formattedDate;
    }

    const handleDelete = (id)=>{
        console.log("deleting id" , id)
        fetch(`http://localhost:3030/todo/delete/${id}` , {
            method : 'DELETE',
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
            .then((res)=>{
                // console.log("printing res" , res);
                setTasks(tasks => tasks.filter((ele)=>ele.id !== id))
                // console.log("after setTasks printing res" , res);
                fetchData();
                // console.log("after fetch data printing res" , res);
            })
            .catch(err => {
                console.log("Something went wrong")
                console.log(err);
            })
    }
    return (
        
        <div>
            <Navbar />
            {token ? (
                <div>
                    <Heading mb={5} mt={5}>Tasks</Heading>

                    <Center>
                        <Box boxShadow='outline' p='4' rounded='md' bg='white' w={"30%"}>
                            <Input mt={2} placeholder='description' type='text' name="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                            <Select placeholder='Select option' value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                <option value='pending' >pending</option>
                                <option value='completed'>completed</option>
                            </Select>
                            <Button mt={2} onClick={handleTask}>Add Task</Button>
                        </Box>
                    </Center>

                    <Center mt={"30px"}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
                            {tasks.map((task, index) => {
                                const formattedDate = formatDate(task.date);
                                return (
                                    <div key={index}>
                                        <Box maxW='md' borderWidth='2px' borderRadius='lg' overflow='hidden' backgroundColor={"yellow.50"} p={"10px 70px"}>
                                            <Heading as='h2' size='xl' noOfLines={1}>
                                                {task.desc}
                                            </Heading>
                                            <Heading as='h2' size='lg' noOfLines={1}>
                                                {task.status}
                                            </Heading>
                                            <Heading as='h2' size='md' noOfLines={1}>
                                                {formattedDate}
                                            </Heading>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button onClick={()=>handleDelete(task._id)}>Delete</Button>
                                        </Box>
                                    </div>
                                )
                            })}
                        </div>
                    </Center>


                </div>
            )
                :
                <Heading>Please Login</Heading>
            }
        </div>
    );
};

export default Tasks;