document.addEventListener("DOMContentLoaded", function() {
    
    fetch('otheranimals.json')
      .then(response => response.json())
      .then(data => {
        // Populating section content
        const section = document.querySelector('section');
        section.innerHTML = `
          <h1>${data.OtherAnimals.title}</h1>
          <div class="container">
            <div class="c2">
              <p>${data.OtherAnimals.content}</p>
            </div>
          </div>
        `;
  
        // Populating animal cards
        const animals = data.Animals;
        animals.forEach(animal => {
          section.innerHTML += `
            <div class="center">
              <div class="card">
                <img src="${animal.image}" style="width:100%">
                <h1><b>${animal.name}</b></h1>
                <div class="container2">
                  <p>${animal.description}</p>
                </div>
              </div>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  