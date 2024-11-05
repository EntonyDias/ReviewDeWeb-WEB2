const textAbout = document.getElementById('textAbout')
const buttonAbout = document.getElementById('buttonAbout')

//VISIBILIDADE DO ABOUT
function visibilidadeAbout() {
  if (textAbout.style.display == 'flex') {
    textAbout.style.display = 'none'
    buttonAbout.textContent = '⬆️Sobre⬆️'
  }
  else {
    textAbout.style.display = 'flex'
    buttonAbout.textContent = '⬇️Sobre⬇️'
  }
}

