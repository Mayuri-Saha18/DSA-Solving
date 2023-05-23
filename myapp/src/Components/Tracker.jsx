import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Tracker() {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('Salary');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();


    const record = { type, category, amount, date };

    try {
      // Send a POST request to the JSON server
      const response = await fetch('https://movie-server-2gd3.onrender.com/tracker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify(record),
      });

      // If the request was successful, reset the form
      if (response.ok) {
        setType('Income');
        setCategory('Salary');
        setAmount('');
        setDate('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const FormWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  });
  
  const InputWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  });
 
  const categoryOptions =
    type === 'Income'
      ? ['Salary', 'Gifts', 'Refunds', 'Other']
      : ['Food & Drinks', 'Shopping', 'Housing', 'Bills', 'Vehicle & Transport', 'Lifestyle'];

  return (
    <div>
    <Typography variant="h2" gutterBottom>
  Tracker
</Typography>
<FormWrapper onSubmit={handleSubmit}>
  <InputWrapper>
    <FormControl>
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type"
        value={type}
        label="Type"
        onChange={(event) => setType(event.target.value)}
      >
        <MenuItem value="Income">Income</MenuItem>
        <MenuItem value="Expense">Expense</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="category-label">Category</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        value={category}
        label="Category"
        onChange={(event) => setCategory(event.target.value)}
      >
        {categoryOptions.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <TextField
      id="amount"
      label="Amount in Rupees"
      type="number"
      value={amount}
      onChange={(event) => setAmount(event.target.value)}
    />
    <TextField id="date" label="Date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
  </InputWrapper>
  <Button variant="contained" type="submit">
    Create
  </Button>
</FormWrapper>

    </div>
  );
}

export default Tracker;
