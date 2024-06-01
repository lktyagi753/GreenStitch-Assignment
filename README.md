# Greenstitch Progress Board

## Overview

The Greenstitch Progress Board is a dynamic to-do list application with three sections: Pending, In Progress, and Completed. Users can add tasks, move tasks between sections using buttons, and optionally use drag-and-drop functionality. Tasks moved to the Completed section include a timestamp.

## Features

- #### Add New Task
* #### Move Tasks Between Sections
* #### Drag and Drop

## Sections
### 1. Pending:
- Contains newly added tasks.
- Each task has a button to move it to In Progress.

### 2. In Progress:
- Contains tasks currently being worked on.
- Each task has a button to move it to Completed.

### 3. Completed:
- Contains completed tasks with a timestamp in the format "DD/MM/YY, HH".

## Installation
Follow these steps to set up and run the application locally:

### 1. Clone the Repository:
```js
git clone https://github.com/your-username/GreenStitch-Assignment.git
cd GreenStitch-Assignment
```

### 2. Install Dependencies:
```js
npm install
```

### 3. Start the Development Server:
```js
npm start
```

The application will start on http://localhost:3000.

## Usage
### 1. Adding a Task:
- In the Pending column, click the "+" button.
- Enter the task title and description in the prompt.
- The new task will appear in the Pending column.

### 2. Moving Tasks:
- In the Pending column, click the "Start" button on a task to move it to the In Progress column.
- In the In Progress column, click the "Complete" button on a task to move it to the Completed column. The task will display a timestamp.

### 3. Drag and Drop:
- Drag a task card from one column to another to move it between sections.
