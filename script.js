
emailjs.init("yAgGwNzt2nGsnM3HSW38W")
document.querySelector('.btn-primary').addEventListener('click', async function() {
    const message = document.getElementById('message').value.trim();
    const senderEmail = document.getElementById('email').value.trim();
    
    if (!message || !senderEmail) {
        alert('Please enter both your email and a message before sending!');
    } else {
        try {
            console.log("trying to send email...");
            console.log("Service ID:", "service_76yxp0r");
            console.log("Template ID:", "template_u3rwibq");
            console.log("Message:", message);
            console.log("Sender Email:", senderEmail);
            const response = await emailjs.send("service_76yxp0r", "template_u3rwibq", {
                message: message,
                email: senderEmail,
            });

            if (response.status === 200) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send the message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message.');
        }
    }
});





function Header() {
    return (
        <header>
            <h1>Eva-Coffee</h1>
            <p className="tagline">Perfect for your grinder.</p>
            <p>Select your grinder:</p>
            <a href="/VariaPage">
                <button className="btn-primary">Varia VS3</button>
            </a>  
            <button className="btn-primary">Niche zero</button>
        </header>
    );
}

export default Header;
