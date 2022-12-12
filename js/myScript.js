
 document.getElementById('limitComment').addEventListener('input', txtCounter);

var outputMessage = document.getElementById('output');
var charWarnning = 15; // kada ostane 5 karaktera, obojiti poruku crvenom bojom
var txtAreaLimit = 20;

function txtCounter() {
    var charCount = document.getElementById('limitComment').value.length;
    var txtComment = document.getElementById('limitComment');

    if (charCount > txtAreaLimit) {
        txtComment.value = txtComment.value.substring(0, txtAreaLimit);
    }
    
    if (charCount - charWarnning > 0) {
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