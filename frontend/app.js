

const dataPost = async () =>{
    console.log("data post chal")
const inpName = document.getElementById("inp1").value
const inpEmail = document.getElementById("inp2").value
const inpNum = document.getElementById("inp3").value

    const api = await fetch("http://localhost:3000/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:inpName,
            email:inpEmail,
            age:inpNum
        })
    })

    inpName.value = ""
    inpEmail.value = ""
    inpNum.value = ""
}