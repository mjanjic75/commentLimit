var outputMessage = document.getElementById('output');
var charWarnning = 15; // kada ostane 5 karaktera, obojiti poruku crvenom bojom
var txtAreaLimit = 20;

function txtCounter() {
    var charCount = document.getElementById('limitComment').value.length;
    var txtComment = document.getElementById('limitComment');

    if (charCount > txtAreaLimit) {
        txtComment.value = txtComment.value.substring(0, txtAreaLimit);
        outputMessage.innerHTML = 'Preostali broj karaktera je 0!';
    }
    else {
        outputMessage.innerHTML = `Preostalo ${txtAreaLimit - charCount} karaktera`;
    }
}