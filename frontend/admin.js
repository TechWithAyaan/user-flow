
const getData = async () =>{
const apiFetcher = await fetch("http://localhost:3000/users")
const data = await apiFetcher.json()
const {data:getUsers} = data
console.log("GET USERS:", getUsers)

const content = document.getElementById("container")

getUsers.forEach(user =>{
content.innerHTML += `
     <div class="card">
        <h2>${user.name}</h2>
        <p><span class="label">Email:</span> ${user.email}</p>
        <p><span class="label">Age:</span> ${user.age}</p>
      </div>
`
})


}



getData()