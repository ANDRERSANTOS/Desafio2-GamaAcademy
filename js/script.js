const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})
const form2 = document.getElementById('form2')

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let Quantidade = document.getElementById('number').value;
  let data = {
    nome,
    Quantidade,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content2 = document.getElementById('content2')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto ;)</p>`

  content2.innerHTML = carregando


  setTimeout(() => {
    content2.innerHTML = pronto
  }, 1000)

})
