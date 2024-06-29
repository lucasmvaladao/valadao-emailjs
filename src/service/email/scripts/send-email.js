    emailjs.init({
        publicKey: "dOaQAzj10moEoquKR"
    })


function handleEmail(){

    let templateParams = {
        name: "Lucas",
        user_email: "contatovaladao14@gmail.com",
        from_name: "Suporte de Valadão",
        message: "Conteúdo da mensagem aqui..."
    }

    emailjs.send("service_h533kzn", "template_szphxln", templateParams)
    .then(function(res){
        console.log("Email enviado com sucesso!", res.status, res.text)
    }), function(error){
        console.log("Erro ao enviar email!", error)
    }
}