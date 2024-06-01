import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 10px;
    width: 400px;
    height: 900px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
`;

export default function Column({ title, tasks, id, btn, addTask, moveToNextColumn }) {
    const handleClick = () => {
        const taskTitle = prompt('Enter your task title');
        const taskDescription = prompt('Enter your task description');
        if (taskTitle) {
            const newTask = {
                id: new Date().getTime(),
                title: taskTitle,
                description: taskDescription,
                completed: false
            };
            addTask(newTask);
        }
    };

    return (
        <Container className="column">
            <Title
                style={{
                    backgroundColor: "lightblue",
                    position: "sticky",
                    top: "0",
                }}
            >
                {title}
            </Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <Card key={index} index={index} task={task} columnId={id} moveToNextColumn={moveToNextColumn} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
            {btn && <button style={{width:'20%', borderRadius: '10px', border:'none', padding:'2px', boxShadow: 'inset 3px 3px 6px #00000016, 3px 3px 6px #00000032', fontSize:'1.1rem', cursor: 'pointer'}} onClick={handleClick}>+</button>}
        </Container>
    );
}
