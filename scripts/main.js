var naglowek = document.querySelector('h1');
if (naglowek.textContent !== 'Ten pas') {
    alert('Co?');
    naglowek.textContent = 'Hipopotam wylądował.';
}//else {alert('To już?','Tak?');}
document.querySelector('h1').onclick = function () {
    alert('Więcej z tego nie wyciśniesz.');
    naglowek.textContent = 'Ten pass';
}
var obrazek = document.querySelector('#pas');
/*obrazek.onclick=function(){
    obrazek.setAttribute('src','https://i.pinimg.com/originals/ea/7c/1a/ea7c1a0eafbb80a597d27122c456f7ca.gif');
}
obrazek.setAttribute('src','images/pasek.svg');*/
obrazek.onclick = function () {
    var srcc = obrazek.getAttribute('src');
    if (srcc === 'images/pasek.svg') {
        obrazek.setAttribute('src', 'https://i.pinimg.com/originals/ea/7c/1a/ea7c1a0eafbb80a597d27122c456f7ca.gif');
    } else {
        obrazek.setAttribute('src', 'images/pasek.svg');
    }
}
var guzik = document.querySelector('#G');
var guziczek =document.querySelector('#g');
var storedName;
function nazwisko(){
    storedName = prompt('Nazwisko?');
    localStorage.setItem('nazwisko', storedName);
}
if (!localStorage.getItem('nazwisko')) {
    nazwisko();
} else {
    var storedName = localStorage.getItem('nazwisko');
}
guzik.onclick = function () {
    alert(storedName + ' śmierdzi.');
}
guziczek.onclick=function(){
    nazwisko();
}
var kurtyna=document.getElementById("kurtyna");
var gęś=document.getElementById("gęś");
gęś.onclick=function(){
    gęś.style.color='white';
    kurtyna.style.height='100%';
}