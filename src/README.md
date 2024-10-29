# ShiftFlow

## Overview

ShiftFlow is a comprehensive application designed to help visualize and manage data flows using an intuitive graphical interface. It includes both a front-end built with React and a backend powered by FastAPI. Below are the details for setting up and running the project.

## Frontend Setup

### Libraries and Tools

To get started with the front-end, you will need the following libraries and tools:

1. **React**: A JavaScript library for building user interfaces.
2. **Tailwind CSS**: A utility-first CSS framework for styling your application.
3. **react-typing-effect**: A React component for creating typing effect animations.
4. **react-flow-renderer**: A library for building interactive node-based editors.
5. **react-flow**: Provides additional functionality for React Flow.
6. **prop-types**: Type-checking for React props.
7. **zustand**: A small, fast, and scalable state management solution.
8. **react-toastify**: A library for displaying toast notifications.
9. **animate.css**: A library for animations.

### Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd shiftflow
    ```

2. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Run the development server**:

    ```bash
    npm start
    ```

## Backend Setup

### Libraries and Tools

For the backend, we use FastAPI to build the API. The following Python libraries are needed:

1. **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python.
2. **networkx**: A library for the creation, manipulation, and study of complex networks of nodes and edges.
3. **pydantic**: Data validation and settings management using Python type annotations.
4. **unicorn**: A web server for running FastAPI applications.

### Installation

1. **Install the necessary Python packages**:

    ```bash
    pip install fastapi networkx pydantic
    ```

2. **Run the FastAPI server using `uvicorn`**:

    ```bash
    uvicorn main:app --reload
    ```

### Example Code Snippet

