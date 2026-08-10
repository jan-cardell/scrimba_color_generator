
const inputForm = document.getElementById('input-form')

inputForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputColor = document.getElementById('input-color').value
    const inputScheme = document.getElementById('input-scheme').value
    
    document.getElementById('color-set').style.backgroundColor= inputColor

    fetch (`https://www.thecolorapi.com/scheme?hex=${inputColor.slice(1)}&mode=${inputScheme}&count=4`)
        .then(res => res.json())
        .then(function(data){ data.colors.forEach(function(color, index){
            document.getElementById(`color${index}`).style.backgroundColor= color.hex.value
        })
        })
})
