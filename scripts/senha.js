document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores digitados pelo usuário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    Swal.fire({
        icon: 'success',
        title: 'E-mail enviado!',
        text: 'Um e-mail com a nova senha será enviado para o endereço fornecido.',
        confirmButtonText: 'OK'
    }).then(function() {
        // Limpar o formulário após o envio (opcional)
        document.getElementById("forgotPasswordForm").reset();
    });
});