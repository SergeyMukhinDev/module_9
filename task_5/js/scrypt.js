const btnSubmit = document.querySelector('#buttonSubmit');
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
        console.log(document.querySelector('#inputDuplicate').value);
        document.querySelector('#inputDuplicate').value = '';
        document.querySelector('#duplicateField').textContent = '';
        })
function duplicate () {
    document.querySelector('#duplicateField').textContent = document.querySelector('#inputDuplicate').value;
}
const inputDup = document.querySelector('#inputDuplicate');
inputDup.addEventListener('keypress', duplicate);

