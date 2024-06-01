import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [inReview, setInReview] = useState([]);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || source.droppableId === destination.droppableId) return;

        deletePreviousState(source.droppableId, draggableId);

        const task = findItemById(draggableId, [...incomplete, ...completed, ...inReview]);

        setNewState(destination.droppableId, task);
    };

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "1":
                setIncomplete(removeItemById(taskId, incomplete));
                break;
            case "2":
                setInReview(removeItemById(taskId, inReview));
                break;
            case "3":
                setCompleted(removeItemById(taskId, completed));
                break;
        }
    }

    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "1":   // Pending
                updatedTask = { ...task, completed: false };
                setIncomplete([updatedTask, ...incomplete]);
                break;
            case "2":  // In Progress
                updatedTask = { ...task, completed: false };
                setInReview([updatedTask, ...inReview]);
                break;
            case "3":  // Completed
                updatedTask = { ...task, completed: true, timestamp: new Date().toLocaleString() };
                setCompleted([updatedTask, ...completed]);
                break;
        }
    }

    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    function addTask(newTask) {
        setIncomplete([newTask, ...incomplete]);
    }

    function moveToInProgress(taskId) {
        const task = findItemById(taskId, incomplete);
        if (task) {
            setIncomplete(removeItemById(taskId, incomplete));
            setInReview([{ ...task, completed: false }, ...inReview]);
        }
    }

    function moveToCompleted(taskId) {
        const task = findItemById(taskId, inReview);
        if (task) {
            setInReview(removeItemById(taskId, inReview));
            setCompleted([{ ...task, completed: true, timestamp: new Date().toLocaleString() }, ...completed]);
        }
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{ textAlign: "center" }}>GREENSTITCH PROGRESS BOARD</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "1300px",
                    margin: "0 auto 50px auto"
                }}
            >
                <Column title={"Pending"} tasks={incomplete} id={"1"} btn={true} addTask={addTask} moveToNextColumn={moveToInProgress} />
                <Column title={"In Progress"} tasks={inReview} id={"2"} btn={false} moveToNextColumn={moveToCompleted} />
                <Column title={"Completed"} tasks={completed} id={"3"} btn={false} />
            </div>
        </DragDropContext>
    );
}
