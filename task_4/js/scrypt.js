const ChangeLink = document.querySelector('#linkChange');
function ChangeA(event) {
    let textVule = prompt('Введите новый текст ссылки');
    if ((textVule != '') && (textVule != null)) {ChangeLink.textContent = textVule}
    else {
        alert('Вы ничего не ввели!')
    event.preventDefault();}
    
}

ChangeLink.addEventListener('click', ChangeA);
