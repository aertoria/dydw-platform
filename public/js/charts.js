const engagementCtx = document.getElementById('engagementChart').getContext('2d');
new Chart(engagementCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#7a8bff',
        backgroundColor: 'rgba(122, 139, 255, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Engagement Score',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: '#4150ff',
        backgroundColor: 'rgba(65, 80, 255, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#b0b8c8',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Monthly User Engagement',
        color: '#b0b8c8',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#445066'
        },
        ticks: {
          color: '#b0b8c8'
        }
      },
      x: {
        grid: {
          color: '#445066'
        },
        ticks: {
          color: '#b0b8c8'
        }
      }
    }
  }
});

const funnelCtx = document.getElementById('funnelChart').getContext('2d');

// Create gradient for funnel bars
const funnelGradient = funnelCtx.createLinearGradient(0, 0, 400, 0);
funnelGradient.addColorStop(0, '#7a8bff');
funnelGradient.addColorStop(1, '#2a2a3a');

new Chart(funnelCtx, {
  type: 'bar',
  data: {
    labels: ['Visited', 'Signed Up', 'Activated', 'Engaged', 'Retained'],
    datasets: [{
      data: [1000, 700, 500, 300, 200],
      backgroundColor: [
        'rgba(122, 139, 255, 0.9)',
        'rgba(106, 121, 255, 0.9)',
        'rgba(89, 102, 255, 0.9)',
        'rgba(73, 84, 255, 0.9)',
        'rgba(65, 80, 255, 0.9)'
      ],
      borderColor: '#2a2a3a',
      borderWidth: 1,
      borderRadius: 4
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'User Journey Funnel',
        color: '#b0b8c8',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#445066'
        },
        ticks: {
          color: '#b0b8c8'
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: '#b0b8c8'
        }
      }
    }
  }
});
