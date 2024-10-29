const freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 }
];
function calculateAverageStartingPrice() {  //calculated the average price
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return (total / freelancers.length).toFixed(2);
}

function renderFreelancers() { //used chatgpt to explain to me how and why every line works. tried to google it and too many different examples for rendering.
  const freelancerList = document.getElementById('freelancer-list');
  freelancerList.innerHTML = '';
  freelancers.forEach(freelancer => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${freelancer.name}</td>
          <td>${freelancer.occupation}</td>
          <td>$${freelancer.price}</td>
      `;
      freelancerList.appendChild(row);
  });
  
  document.getElementById('average-price').textContent = `$${calculateAverageStartingPrice()}`;
}

renderFreelancers();