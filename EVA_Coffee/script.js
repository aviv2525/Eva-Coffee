document.querySelector('button[type="Send"]').addEventListener('click', function() {
    const message = document.getElementById('Massegse').value.trim();
    if (!message) {
        alert('Please enter a message before sending!');
    } else {
        alert('Message sent successfully!');
        // Here you could also add code to actually send the message.
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
