const { app } = require("express")

const uploadFav = () => {
    app.post('https://deployment-lab-carter.herokuapp.com/posthalogame')
}




const subFav = () => {
    const button = document.getElementById('subBut')
    button.addEventListener('click', uploadFav )
}