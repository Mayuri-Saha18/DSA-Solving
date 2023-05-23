import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState, useEffect } from 'react';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Descending');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://movie-server-2gd3.onrender.com/tracker')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1);
  };

  const handleDeleteTransaction = (id) => {
    fetch(`https://movie-server-2gd3.onrender.com/tracker/${id}`, { method: 'DELETE' })
      .then(() => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
        setFilteredTransactions(filteredTransactions.filter(transaction => transaction.id !== id));
      });
  };

  const handleEditTransaction = (id, updatedTransaction) => {
    fetch(`https://movie-server-2gd3.onrender.com/tracker/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTransaction)
    })
      .then(() => {
        setTransactions(transactions.map(transaction => transaction.id === id ? updatedTransaction : transaction));
        setFilteredTransactions(filteredTransactions.map(transaction => transaction.id === id ? updatedTransaction : transaction));
      });
  };

  const handlePageChange = (event) => {
    setCurrentPage(parseInt(event.target.textContent));
  };

  const transactionsPerPage = 4;
  const numPages = Math.ceil(filteredTransactions.length / transactionsPerPage);
  const pageButtons = [];
  for (let i = 1; i <= numPages; i++) {
    pageButtons.push(
      <button key={i} className={i === currentPage ? 'active' : ''} onClick={handlePageChange}>{i}</button>
    );
  }

  const filteredAndSortedTransactions = filteredTransactions
    .filter(transaction => typeFilter === 'All' || transaction.type === typeFilter)
    .sort((a, b) => sortOrder === 'Descending' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date));

  const startingIndex = (currentPage - 1) * transactionsPerPage;
  const endingIndex = startingIndex + transactionsPerPage;
  const displayedTransactions = filteredAndSortedTransactions.slice(startingIndex, endingIndex);

  return (
    <Box>
    <h2>Transaction History</h2>
    <FormControl>
      <InputLabel id="typeFilter">Filter by Type:</InputLabel>
      <Select labelId="typeFilter" id="typeFilter" value={typeFilter} onChange={handleTypeFilterChange}>
        <MenuItem value="All">All</MenuItem>
        <br />
        <MenuItem value="Income">Income</MenuItem>
        <br />
        <MenuItem value="Expense">Expense</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
      <InputLabel id="sortOrder">Sort by Date:</InputLabel>
      <Select labelId="sortOrder" id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
        <MenuItem value="Descending">Descending</MenuItem>
        <br />
        <MenuItem value="Ascending">Ascending </MenuItem>
      </Select>
    </FormControl>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTransactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDeleteTransaction(transaction.id)}>Delete</Button>
                <Button variant="contained" color="info" onClick={() => handleEditTransaction(transaction.id, transaction)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box className="pagination">
      {pageButtons}
    </Box>
  </Box>
);
};

export default History;

