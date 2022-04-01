// Select Add and remove row buttons
const addRow = document.querySelector('#addRow');
const removeRow = document.querySelector('.removeRow');
// Select the parent div to  the row
const rowInit = document.querySelector('#rowInit');

// Define dynamic row to be generated
const rowContent = `                    
    <div class="mb-3 col-md-4">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="text" class="form-control" placeholder="Full Name">
    </div>
    <div class="mb-3 col-md-4">
        <label for="exampleFormControlInput1" class="form-label">Age</label>
        <input type="text" class="form-control" placeholder="Age">
    </div>
    <div class="mb-3 col-md-4">
        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
        <input type="text" class="form-control" placeholder="Phone">
    </div> 
    <div id="removeAnObject">                        
        <button type="button" class="removeRow btn btn-sm btn-danger float-end">Remove</button>
    </div>              
        `;
            
  
  loadEventListeners();

  function loadEventListeners() {
      addRow.addEventListener('click', addRowToDiv);
      rowInit.addEventListener('click', removeRowFromDiv);
      
  }

  // Add a dynamic row
  function addRowToDiv(){
                                      
      const rowDiv = document.createElement('div');
      rowDiv.className = 'row';
      rowDiv.innerHTML = rowContent;
      rowInit.appendChild(rowDiv);                
  }

  // Remove a dynamic Row
  function removeRowFromDiv(e){
      if(e.target.parentElement.id === 'removeAnObject') {                   
          e.target.parentElement.parentElement.remove();
      }
  }