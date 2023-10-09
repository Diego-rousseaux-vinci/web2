
const message = "est l'heure actuelle";
addDateTime(message);
function addDateTime(message) {
    const dateTimeNow = new Date();
    const formattedDateTime = `${dateTimeNow.toLocaleDateString()} ${dateTimeNow.toLocaleTimeString()}`;
    const popupMessage = `${formattedDateTime} : ${message}`;

    
    console.log(popupMessage);

    
    alert(popupMessage);
}



