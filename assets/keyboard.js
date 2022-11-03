const keys = document.querySelectorAll('.keyboard-body .key')
const txtP = document.getElementById('pressed')

let pressed = ''

// for every key on keyboard
keys.forEach(key => {

    // when current key is pressed
    key.addEventListener('click', () => {

        // get the original key value
        // and print it on TXT value of 1 second
        txtP.textContent = key.innerHTML
        setTimeout(() => {
            txtP.textContent = ''
        }, 1000);
    })
})
