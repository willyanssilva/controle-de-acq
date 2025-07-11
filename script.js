const scriptURL = 'https://script.google.com/macros/s/AKfycbz6iSRLUO_Ru6HGWdjcwlAW1iNSSm-vLnn0B2onwUXOcYg4-uCBWhTSicCT0L6CD3zG/exec';
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






