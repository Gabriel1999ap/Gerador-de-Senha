let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')
let toasts = document.getElementById('toasts')
const notification = 'Senha Copiada com Sucesso✅'

let charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}
function criaNotificacao() {
  const notify = document.createElement('div')
  notify.classList.add('toast')

  notify.innerText = notification
  toasts.appendChild(notify)

  setTimeout(() => {
    notify.remove()
  }, 3000)
}
function generatePassword() {
  let pass = ''

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }
  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

/* function copyPassword() {
  alert('Senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha)
} */

function copyPassword() {
  navigator.clipboard.writeText(novaSenha).then(() => criaNotificacao())
}
