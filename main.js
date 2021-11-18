const { app } = require("express")

const uploadFav = () => {
    app.post('https://deployment-lab-carter.herokuapp.com/posthalogame')
}

const haloText = () => {
    let haloName = document.getElementById('sub').textContent
    
}
//see movie list to finish

const subFav = () => {
    const button = document.getElementById('subBut')
    button.addEventListener('click', haloText )
}