fetch('home.json')
.then(response => response.json())
.then(data => {
  const objectives = document.getElementById('objectives');
  objectives.innerHTML = `
    <h1>${data.objectives.title}</h1>
    <div class="center">
      <div class="card">
        <img src="${data.objectives.image}" style="width:100%">
        <div class="container2">
          <ul>
            ${data.objectives.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  const experiences = document.getElementById('experiences');
  experiences.innerHTML = `
    <h1>${data.experiences.title}</h1>
    <div class="center">
      <div class="card">
        <img src="${data.experiences.image}" style="width:100%">
        <div class="container2">
          <ol>
            ${data.experiences.items.map(item => `<li>${item}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;
})
.catch(error => console.error('Error fetching data:', error));
const contentDiv = document.getElementById('content');
const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
let originalContent;

editBtn.addEventListener('click', () => {
  // Toggle edit mode
  contentDiv.classList.add('edit-mode');
  
  // Save original content
  originalContent = contentDiv.innerHTML;
  
  // Show save and cancel buttons, hide edit button
  saveBtn.style.display = 'inline-block';
  cancelBtn.style.display = 'inline-block';
  editBtn.style.display = 'none';
});

saveBtn.addEventListener('click', () => {
  // Save changes
  originalContent = contentDiv.innerHTML;
  
  // Exit edit mode
  contentDiv.classList.remove('edit-mode');
  
  // Hide save and cancel buttons, show edit button
  saveBtn.style.display = 'none';
  cancelBtn.style.display = 'none';
  editBtn.style.display = 'inline-block';
});

cancelBtn.addEventListener('click', () => {
  // Revert to original content
  contentDiv.innerHTML = originalContent;
  
  // Exit edit mode
  contentDiv.classList.remove('edit-mode');
  
  // Hide save and cancel buttons, show edit button
  saveBtn.style.display = 'none';
  cancelBtn.style.display = 'none';
  editBtn.style.display = 'inline-block';
});
