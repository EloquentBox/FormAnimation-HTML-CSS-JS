const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {                       //looping through text, we loop every single letter
    label.innerHTML = label.innerText
        .split('')                      // split it into an array
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)  // mapping it  to create an array with span around it
        .join('');                                  // then we join them back into string
})