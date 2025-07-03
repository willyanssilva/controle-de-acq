const scriptURL = 'https://script.google.com/macros/s/AKfycbwScHu4cUVNVFnsYR7wzY_oh8EDB8xcjZ3ZH1uJqLzsFESFdEam_gu2VAHmEZCci-YX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  
  .then(response => alert("Obrigado! Seu formulário foi enviado." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})