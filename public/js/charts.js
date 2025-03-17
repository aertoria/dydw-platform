// "Customer Engagement" line chart
const ctxEngagement = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(ctxEngagement, {
  type: 'line',
  data: {
    labels: ['Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14'],
    datasets: [
      {
        label: 'Click-through',
        data: [0, 0, 1, 2, 2, 5, 8],
        borderColor: '#BADA55',
        backgroundColor: 'rgba(186, 218, 85, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Open Rate',
        data: [0, 0, 2, 3, 4, 6, 10],
        borderColor: '#6EEB83',
        backgroundColor: 'rgba(110, 235, 131, 0.2)',
        fill: true,
        tension: 0.1
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: '#444' }
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: '#444' }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#ccc'
        }
      }
    }
  }
});

// "Activation Funnel" bar chart (horizontal) to simulate a funnel
const ctxFunnel = document.getElementById('funnelChart').getContext('2d');
const funnelChart = new Chart(ctxFunnel, {
  type: 'bar',
  data: {
    labels: ['User Id', 'Email Opened', 'Goal Achieved', 'Email Sent'],
    datasets: [
      {
        label: 'Count',
        data: [80, 60, 30, 100], // Example funnel steps
        backgroundColor: [
          '#BADA55',
          '#6EEB83',
          '#6EEB83',
          '#BADA55'
        ]
      }
    ]
  },
  options: {
    indexAxis: 'y', // horizontal bar
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: '#444' }
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: '#444' }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});
