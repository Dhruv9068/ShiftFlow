
# ShiftFlow

**ShiftFlow** is a platform designed to help businesses create and manage data pipelines effectively. With ShiftFlow, users can visually construct data pipelines, validate them as Directed Acyclic Graphs (DAGs), and share or reload saved pipelines seamlessly. The goal is to simplify data flow management and provide a smooth, visual experience for monitoring complex processes.

## Features

- **Pipeline Creation**: Easily create pipelines to track data flow for your business.
- **DAG Validation**: Check if your pipeline is a valid Directed Acyclic Graph (DAG).
- **Pipeline Storage and Sharing**: Save pipelines in JSON format and reload them when needed.
- **Upcoming Features**:  
  - Backend support to automate tasks directly from pipelines.
  - A new category focused on DSA visualization for better learning and understanding.

## Tech Stack

- **Frontend**:
  - **React.js** for building the user interface
  - **CSS** and **CSS frameworks** (Tailwind CSS) for styling
  - **React-Router-DOM** for navigation
  - **Zustand** for state management
  - **Axios** for handling API requests

- **Backend**:
  - **Python FastAPI** for handling backend tasks
  - **Firebase Hosting** and **Render** for backend deployment

- **Additional Tools**:
  - **GitHub** for version control
  - **Canva** for designing the web interface, visuals, and demonstration videos

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js and npm
- Python 3
- Firebase CLI (for hosting)
- Git (for version control)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dhruv9068/ShiftFlow/
   ```
2. **Navigate into the project directory**:
   ```bash
   cd shiftflow
   ```
3. **Install dependencies for the frontend**:
   ```bash
   npm install
   ```
4. **Install dependencies for the backend**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
5. **Run the development servers**:

   - Start the frontend:
     ```bash
     npm start
     ```
   - Start the backend:
     ```bash
     uvicorn main:app --reload
     ```

### Usage

After starting the servers, open your web browser and navigate to `http://localhost:3000` to begin using ShiftFlow. You can:

- Create, edit, and save pipelines.
- Validate them as DAGs.
- Load previously saved pipelines to the canvas.

## Demo

Check out ShiftFlow [here](http://shiftfl0w.web.app/).

## Future Enhancements

- Backend functionality to automate tasks directly from pipelines.
- DSA (Data Structures and Algorithms) visualization feature to help users understand each step of various algorithms in a more interactive way.

## Contributing

Welcome to all contributors! Please fork the repository, create a feature branch, and submit a pull request for review.



