import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const Analytics = () => {
  const [incomeData, setIncomeData] = useState({});
  const [expenseData, setExpenseData] = useState({});

  useEffect(() => {
    axios.get('https://movie-server-2gd3.onrender.com/tracker?type=Income')
      .then((response) => {
        const data = response.data;
        const labels = data.map((item) => item.category);
        const amounts = data.map((item) => item.amount);
        const colors = ['#6baed6', '#3182bd', '#08519c', '#084081'];
        setIncomeData({
          labels: labels,
          datasets: [
            {
              data: amounts,
              backgroundColor: colors,
              hoverBackgroundColor: colors,
            },
          ],
        });
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('https://movie-server-2gd3.onrender.com/tracker?type=Expense')
      .then((response) => {
        const data = response.data;
        const labels = data.map((item) => item.category);
        const amounts = data.map((item) => item.amount);
        const colors = [
          '#1f77b4',
          '#ff7f0e',
          '#2ca02c',
          '#d62728',
          '#9467bd',
          '#8c564b',
        ];
        setExpenseData({
          labels: labels,
          datasets: [
            {
              data: amounts,
              backgroundColor: colors,
              hoverBackgroundColor: colors,
            },
          ],
        });
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Analytics</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Income Chart</h2>
          <Doughnut data={incomeData} />
        </div>
        <div className="col-md-6">
          <h2>Expense Chart</h2>
          <Doughnut data={expenseData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
