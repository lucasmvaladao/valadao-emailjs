//Inicialização do email.js
(()=> {
    emailjs.init({
        publicKey: "dOaQAzj10moEoquKR",
    })
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault() //Função que eu cancelo no meio do caminho


    emailjs.sendForm("service_h533kzn", "template_4gh1otn", this)
    .then(
        function() {
            console.log("success!")
            alert("Email enviado com sucesso")
        }
    ), function(err) {
        console.log("Fail", err)
        alert("Falha ao enviar o email, tente mais tarde!")
    }
})