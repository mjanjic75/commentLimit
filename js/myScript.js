function txtCounter() {
    var charMax = 15;
    var charsRemaining = charMax - document.getElementById('limitComment').value.length;

    console.log();

    if (charsRemaining < 0) {
        output.innerHTML = 'Preostali broj karaktera je manji od nule!';
    }
    else {
        output.innerHTML = `Preostalo ${charsRemaining} karaktera`;
    }
}