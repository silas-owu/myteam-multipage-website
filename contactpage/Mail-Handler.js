const sendEmail =()=>{
    Email.send({
      Host : "smtp.gmail.com",
      Username : "owusilasyp00@gmail.com",
      Password : "oboi18",
      To : 'owusilasyp00@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Feedbacks",
      Body : "Name: " + $('#name').val()
      + "<br> Email: " + $('#email').val()
      + "<br> Company-name:" + $('#company-name').val()
      + "<br> Title:" + $('#title').val()
      + "<br> Message: " + $('#message').val()
  }).then(
    message => alert("Message sent successfully"))
  }