const textAbout = document.getElementById('textAbout')
const buttonAbout = document.getElementById('buttonAbout')

//VISIBILIDADE DO ABOUT
function visibilidadeAbout() {
  if (textAbout.style.display == 'none') {
    textAbout.style.display = 'flex'
  }
  else {
    textAbout.style.display = 'none'
  }
}