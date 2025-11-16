// Validation simple du formulaire
function validerFormulaire() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
        return false; // empêche l’envoi du formulaire
    }

    alert("Message envoyé avec succès !");
    return true;