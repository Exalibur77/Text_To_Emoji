
function onButtonClicking(){

    const encryptionButton = document.querySelector("#enc-btn");
    const decryptionButton = document.querySelector("#dec-btn");

    const encDiv = document.querySelector("#encryption");
    const decDiv = document.querySelector("#decryption");

    const arrowImage = document.querySelector(".fa-solid");

    encryptionButton.addEventListener("click" , ()=>{

        encDiv.style.display = "block";
        decDiv.style.display = "none";
        encryptionButton.style.backgroundColor = "#333";
        decryptionButton.style.backgroundColor = "#222";
        arrowImage.style.rotate = "360deg";

    })

    decryptionButton.addEventListener("click" , ()=>{

        decDiv.style.display = "block";
        encDiv.style.display = "none";
        arrowImage.style.rotate = "180deg";
        decryptionButton.style.backgroundColor = "#333";
        encryptionButton.style.backgroundColor = "#222";

    })


}

onButtonClicking();