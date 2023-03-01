function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    
    const serviceID = "service_blbqfxn";
    const templateID = "template_nzvhwzd";

    emailjs
    .send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name"),
            document.getElementById("email"),
            document.getElementById("message")
            console.log(res)

            alert("Message Sent!")
        }
    )
    .catch((err) => console.log(err));
}