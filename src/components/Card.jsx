import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px #00000027;
    padding: 8px;
    color: #000;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const TextContent = styled.div``;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`;

function bgcolorChange(props) {
    return props.isDragging
        ? "lightgreen"
        : props.isDraggable
            ? props.isBacklog
                ? "#F2D7D5"
                : "#DCDCDC"
            : props.isBacklog
                ? "#F2D7D5"
                : "#EAF4FC";
}

export default function Card({ task, index, columnId, moveToNextColumn }) {
    const handleMoveToNextColumn = () => {
        moveToNextColumn(task.id);
    };

    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                        <span>
                            <small>
                                #{task.id}{" "}
                            </small>
                        </span>
                    </div>
                    <div style={{fontSize: '1.5rem', fontWeight:'600', display: "flex", justifyContent: "center", padding: 2 }}>
                        <TextContent>{task.title}</TextContent>
                    </div>
                    {task.description && (
                        <div style={{fontSize: '0.9rem', display: "flex", justifyContent: "center", padding: 2 }}>
                            <TextContent>{task.description}</TextContent>
                        </div>
                    )}
                    {task.timestamp && (
                        <div style={{ display: "flex", justifyContent: "center", padding: 2 }}>
                            <TextContent>{task.timestamp}</TextContent>
                        </div>
                    )}
                    {(columnId === "1" || columnId === "2") && (
                        <button style={{borderRadius: '10px', border:'none', padding:'2px 0', boxShadow: 'inset 3px 3px 6px #00000016, 3px 3px 6px #00000032', fontSize:'1.1rem', cursor: 'pointer'}} onClick={handleMoveToNextColumn}>
                            {columnId === "1" ? "Start" : "Complete"}
                        </button>
                    )}
                    {provided.placeholder}
                </Container>
            )}
        </Draggable>
    );
}
