var app = new function() {
  this.el = document.getElementById('FirstName');
  this.el1 = document.getElementById('LastName');
  this.el2 = document.getElementById('PhoneNumber');
  this.el3 = document.getElementById('Email');
  this.el4 = document.getElementById('StreetAddress');
  this.el5 = document.getElementById('Notes');
  this.FirstName = [];
  this.LastName = [];
  this.PhoneNumber = [];
  this.Email = [];
  this.StreetAddress = [];
  this.Notes = [];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'contact available';
	var list   = document.getElementById('cl');
    if (data) {
      if (data > 1) {
        name = 'contacts available';
      }
      el.innerHTML = data + ' ' + name ;
	  list.style.display = "block";
	  el.style.color = "Green";
    } else {
      el.innerHTML = 'No ' + name; 
	  list.style.display = "none";
	  el.style.color = "Red";
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.FirstName.length > 0) {
      for (i = 0; i < this.FirstName.length; i++) {
        data += '<tr class="active">';
        data += '<td>' + this.FirstName[i] + '</td>';
        data += '<td>' + this.LastName[i] + '</td>';
        data += '<td>' + this.PhoneNumber[i] + '</td>';
        data += '<td>' + this.Email[i] + '</td>';
        data += '<td>' + this.StreetAddress[i] + '</td>';
        data += '<td class="width_notes">' + this.Notes[i] + '</td>';
        data += '<td><button class="btn btn-primary" onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.FirstName.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-firstName');
    el1 = document.getElementById('add-lastName');
    el2 = document.getElementById('add-phoneNumber');
    el3 = document.getElementById('add-email');
    el4 = document.getElementById('add-streetaddress');
    el5 = document.getElementById('add-notes');
    // Get the value
    var val_firstName = el.value;
    var val_lastName = el1.value;
    var val_phoneNumber = el2.value;
    var val_email = el3.value;
    var val_streetAddress = el4.value;
    var val_notes = el5.value;
    if (val_firstName && val_lastName && val_phoneNumber && val_email && val_streetAddress && val_notes) {
      // Add the new value
      this.FirstName.push(val_firstName.trim());
      this.LastName.push(val_lastName.trim());
      this.PhoneNumber.push(val_phoneNumber.trim());
      this.Email.push(val_email.trim());
      this.StreetAddress.push(val_streetAddress.trim());
      this.Notes.push(val_notes.trim());
      // Reset input value
      el.value = '';
      el1.value = '';
      el2.value = '';
      el3.value = '';
      el4.value = '';
      el5.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el  = document.getElementById('edit-firstname');
    var el1 = document.getElementById('edit-lastname');
    var el2 = document.getElementById('edit-phonenumber');
    var el3 = document.getElementById('edit-email');
    var el4 = document.getElementById('edit-streetaddress');
    var el5 = document.getElementById('edit-notes');
    // Display value in the field
    el.value = this.FirstName[item];
    el1.value = this.LastName[item];
    el2.value = this.PhoneNumber[item];
    el3.value = this.Email[item];
    el4.value = this.StreetAddress[item];
    el5.value = this.Notes[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var val_firstName = el.value;
      var val_lastName = el1.value;
      var val_phoneNumber = el2.value;
      var val_email = el3.value;
      var val_streetAddress = el4.value;
      var val_notes = el5.value;  
      if (val_firstName && val_lastName && val_phoneNumber && val_email && val_streetAddress && val_notes) {
        // Edit value
        self.FirstName.splice(item, 1, val_firstName.trim());
        self.LastName.splice(item, 1, val_lastName.trim());
        self.PhoneNumber.splice(item, 1, val_phoneNumber.trim());
        self.Email.splice(item, 1, val_email.trim());
        self.StreetAddress.splice(item, 1, val_streetAddress.trim());
        self.Notes.splice(item, 1, val_notes.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.FirstName.splice(item, 1);
    this.LastName.splice(item, 1);
    this.PhoneNumber.splice(item, 1);
    this.Email.splice(item, 1);
    this.StreetAddress.splice(item, 1);
    this.Notes.splice(item, 1);
	
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
function searchFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("info_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

