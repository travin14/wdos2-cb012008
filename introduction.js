// Load the JSON data from the file
fetch('introduction.json')
  .then(response => response.json())
  .then(data => {
    // Populate the Introduction section
    document.querySelector('title').textContent = data.Introduction.title;

    // Populate the Parks section
    const parksSection = document.getElementById('section-intro');
    data.Parks.forEach(park => {
      const parkHTML = `
        <div class="center">
          <div class="card">
            <img src="${park.image}" style="width:100%">
            <div class="container2">
              <h1><b>${park.name}</b></h1>
              <p>${park.description}</p>
            </div>
          </div>
        </div>
      `;
      parksSection.insertAdjacentHTML('beforeend', parkHTML);
    });

    // Populate the Summary section
    const summarySection = document.querySelector('.center table');
    data.Summary.parks.forEach(summary => {
      const summaryHTML = `
        <tr>
          <td>${summary.name}</td>
          <td><img src="${summary.image}"> ${summary.animal}</td>
          <td>${summary.facts}</td>
        </tr>
      `;
      summarySection.insertAdjacentHTML('beforeend', summaryHTML);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
