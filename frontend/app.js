const dataPost = async () => {
    console.log("data post chal")

    const inpName = document.getElementById("inp1")
    const inpEmail = document.getElementById("inp2")
    const inpPass = document.getElementById("inp3")

    const api = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inpName.value,
            email: inpEmail.value,
            password: inpPass.value
        })
    })

    // clear inputs properly
    inpName.value = ""
    inpEmail.value = ""
    inpPass.value = ""
}