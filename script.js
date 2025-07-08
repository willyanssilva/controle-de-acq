const scriptURL = 'https://script.google.com/macros/s/AKfycbwScHu4cUVNVFnsYR7wzY_oh8EDB8xcjZ3ZH1uJqLzsFESFdEam_gu2VAHmEZCci-YX/exec';
const form = document.forms['contact-form'];
let enviado = false;

form.addEventListener('submit', e => {
  if (enviado) {
    e.preventDefault();
    return;
  }
  
  enviado = true;
  
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert("Obrigado! Seu formulário foi enviado.");
    form.reset(); // Limpa o formulário
    enviado = false; // Reabilita o envio
  })
  .catch(error => {
    console.error('Error!', error.message);
    enviado = false; // Reabilita o envio em caso de erro
  });
});




