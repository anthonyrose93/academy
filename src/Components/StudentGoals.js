import React, { useState } from 'react';
import axios from 'axios';
import './MainStyles.css';

const StudentGoals = () => {
  const [goal, setGoal] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [goals, setGoals] = useState([]);

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
        goal,
        dueDate,
      });
      
      // Add the new goal to the state
      setGoals((prevGoals) => [...prevGoals, response.data.goal]);

      // Reset the input fields
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
    <div className="main-style-page-wrapper">
      <div className="main-style-item">
        <h1>Student Goals</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={handleGoalChange}
            required
          />
          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            required
          />
          <button type="submit">Add Goal</button>
        </form>

        <h2>Your Goals</h2>
        <ul>
          {goals.map((g, index) => (
            <li key={index}>
              <button onClick={() => handleDelete(index)}>x</button>
              {` Goal: ${g.goal} (Due: ${g.dueDate})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentGoals;