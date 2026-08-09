
const inputForm = document.getElementById('input-form')
const colorOut = document.getElementById('color-out')

inputForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputColor = document.getElementById('input-color').value
    const inputScheme = document.getElementById('input-scheme').value

    fetch (`https://www.thecolorapi.com/scheme?hex=0047AB&mode=${inputScheme}&count=4`)
        .then(res => res.json())
        .then(function(data){ data.colors.forEach(function(color){
            colorOut.innerHTML += `<div>`
            console.log(color.hex.value)
        })
        })
})
