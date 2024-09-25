import React, { useState } from 'react';
import axios from 'axios';
import './StudentGoals.css';

const StudentGoals = () => {
  const [goal, setGoal] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [name, setName] = useState('');
  const [goals, setGoals] = useState([]);


  const handleNameChange = (e) => { // New handler for name
    setName(e.target.value);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to the API
      const response = await axios.post('http://localhost:4000/api/goals', {
        name,
        goal,
        dueDate,
      });
      
      // Add the new goal to the state
      setGoals((prevGoals) => [...prevGoals, response.data.goal]);

      // Reset the input fields
      setName('');
      setGoal('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const handleDelete = async (index) => {
    try {
      // Make DELETE request to the API
      await axios.delete(`http://localhost:4000/api/goals/${index}`);
      // Remove the goal from the state
      setGoals((prevGoals) => prevGoals.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  return (
    <div className="student-goals-page-wrapper">
      <div className="student-goals-item">
        <h1 className="goals-headline">Student Goals</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
            className="input-name"
          />
          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={handleGoalChange}
            required
            className="input-goal"
          />
          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            required
            className="input-date"
          />
          <button type="submit" className="add-goal-button">Add Goal</button>
        </form>

        <ul className="list-of-goals">
  {goals.map((g, index) => (
    <li key={index} className="goal-item">
      <button onClick={() => handleDelete(index)} className="delete-button">DELETE</button>
      <div className="goal-info">
        <div className="name-text">{`${g.name}`}</div>
        <div className="goal-text">{`Goal: ${g.goal}`}</div>
        <div className="due-date-text">{`Due: ${g.dueDate}`}</div>
      </div>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default StudentGoals;