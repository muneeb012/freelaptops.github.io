// Function to share content on WhatsApp
function shareOnWhatsApp(message) {
    // Replace 'message' with the content you want to share
    // Encode the message for URL
    var encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp share URL
    var whatsappURL = 'https://api.whatsapp.com/send?text=' + encodedMessage;

    // Open the WhatsApp share URL in a new window
    window.open(whatsappURL, '_blank');

}

// Add event listener to the button
document.getElementById('whatsappButton').addEventListener('click', function () {
    // Call the shareOnWhatsApp() function when the button is clicked
    let link = "https://youtube.com/";
    shareOnWhatsApp(
    `The Applications for the Students Laptop Scheme 2024 Is Available
    This scheme is open to all students who for financial reasons are not in a position 
    to purchase a laptop of their own and are in need of laptop in their level of education.
    In 2024 Over 960,000 students will be given free laptop to enhance their learning
    Application has began and students that have applied have started getting their laptops
    
    Register and apply here
    `+ link);
});
