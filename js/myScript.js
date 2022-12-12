var charWarnning = 140; // kada ostane 5 karaktera, obojiti poruku crvenom bojom
var txtAreaLimit = 150;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('limitComment').addEventListener('input', txtCounter);
    document.getElementById('output').innerHTML = `Preostalo ${txtAreaLimit} karaktera!`;
    document.forms[0].reset();
});

function txtCounter() {
    var outputMessage = document.getElementById('output');
    var charCount = document.getElementById('limitComment').value.length;
    var txtComment = document.getElementById('limitComment');

    if (charCount > txtAreaLimit) {
        txtComment.value = txtComment.value.substring(0, txtAreaLimit);
        charCount = txtAreaLimit;
        // ako se "pejstuje" npr. 30 karaktera, biće inače prikazano
        // da je preostalo -10, pa je potrebno postaviti vrednost na 0 u liniji 30
    }

    if (charCount - charWarnning >= 0) {
        // outputMessage.classList.add('red');
        // outputMessage.classList.remove('black');
        outputMessage.classList.add('text-danger');
        outputMessage.classList.remove('text-black');
    }
    else {
        // outputMessage.classList.add('black');
        // outputMessage.classList.remove('red');
        outputMessage.classList.add('text-black');
        outputMessage.classList.remove('text-danger');
    }

    outputMessage.innerHTML = `Preostalo ${txtAreaLimit - charCount} karaktera!`;
}