function sendEmail() {
    var emailText = "<html><h4>Hurray! We got a new lead. Below are the details.</h4>" + "<h5>First Name: " + FirstName + "</h5><h5>Last Name: " + LastName + "</h5><h5>Email Address: " + Email + "</h5><h5>Message: " + Message + "</h5></html>";
    var subjectText = "New Lead - " + FirstName + " " + LastName;
    Email.send({
    Host: "smtp.gmail.com",
    Username : "nishat2786h@gmail.com, zaheen21020@gmail.com, ahmedwaqar.maliks@gmail.com",
    Password : "password",
    To : 'nishat2786h@gmail.com',
    From : "nishat2786h@gmail.com",
    Subject : "hello",
    Body : emailText,
    }).then(
      message => alert("mail sent successfully")
    );}

