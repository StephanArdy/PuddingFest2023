// Connect to Firebase Database

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnwjKeL5JuQMnJKXGmviVjQ78Gaa_RfBM",
    authDomain: "puddingfest-2023.firebaseapp.com",
    databaseURL: "puddingfest-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "puddingfest-2023",
    storageBucket: "puddingfest-2023.appspot.com",
    messagingSenderId: "922568992173",
    appId: "1:922568992173:web:c16da836e53443869bad24"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference your DB
  let registrationFormDB = firebase.database().ref('registrationForm')

  document.getElementById('registration-form').addEventListener('submit', submitForm);
  


  // function submitForm
  function submitForm(e){
    e.preventDefault();

    let name = getElementVal('name');
    let email = getElementVal('email');
    let phone = getElementVal('phone');
    let ticket = getElementVal('ticket');

    // Form Validation
    let errorElement = document.getElementById('error')
    
   
    let messages = []
    
    // validate name
    if(name === '' || name === null){
      messages.push('Name is required')
    }
    
    if(name.length < 3){
      messages.push('Name must be longer than 3 letters')
    }
    
    // validate email
    
    if(!email.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      messages.push('Your email address is invalid')
    }
    
    // validate phone number
    
    if(!phone.match(/^08\d{8,12}$/)){
      messages.push("Phone number should start with '08' and between 10 to 14 digits")
    }
    
    if(messages.length > 0){
      e.preventDefault();
      errorElement.innerText = messages.join(', ')
      errorElement.style.display = "block";

      setTimeout(() => {
        errorElement.style.display = "none";
      }, 2000)
    } else{

      saveMessages(name, email, phone, ticket);
      // enable alert
      document.querySelector('.alert').style.display = "block";
      
      // remove the alert
      setTimeout(() => {
        document.querySelector('.alert').style.display = "none"; 
      }, 3000);
  
      // reset form input
      document.getElementById('registration-form').reset();
    }
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

  const saveMessages = (name, email, phone, ticket) => {
    let newRegistrationForm = registrationFormDB.push();

    newRegistrationForm.set({
      name : name,
      email : email,
      phone : phone,
      ticket : ticket,
    })
  }