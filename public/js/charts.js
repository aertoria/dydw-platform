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
    maintainAspectRatio: true,
    responsive: true,
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

const ctxFunnel = document.getElementById('funnelChart').getContext('2d');

const funnelData = {
  labels: ['Emails Sent', 'Emails Opened', 'Links Clicked', 'Goals Achieved'],
  datasets: [
    {
      label: 'Users',
      data: [100, 75, 40, 20], // Example values
      backgroundColor: ['#BADA55', '#9DCB50', '#6EEB83', '#49A078'],
      borderRadius: 8, // Adds rounded bars for better visuals
    }
  ]
};

const funnelChart = new Chart(ctxFunnel, {
  type: 'bar',
  data: funnelData,
  options: {
    indexAxis: 'y', // Horizontal bar chart
    maintainAspectRatio: false,
    responsive: true,
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
