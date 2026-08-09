
const inputForm = document.getElementById('input-form')

inputForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputColor = document.getElementById('input-color').value
    const inputScheme = document.getElementById('input-scheme').value

    fetch ('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6')
        .then(res => res.json())
        .then(data => console.log(data.colors[1].hex.value))
})
