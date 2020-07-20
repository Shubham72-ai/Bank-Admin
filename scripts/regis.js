$(document).ready(function($) {
        
    $("#register-form").validate({
    rules: {
        name: "required",                    
        password: {
            required: true,
            minlength: 5
        },
       city: "required",
      gender: "required"
     
    },
    messages: {
        name: "Please enter your Name",                   
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
      city: "Please enter your city",
      gender: "This field is required"
    },
    submitHandler: function(form) {
        window.location = "index.html";       

    }
    
});
});






