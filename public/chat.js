async function send(){

let input=document.getElementById("message");

let chat=document.getElementById("chat");

chat.innerHTML += "<p>Moi : "+input.value+"</p>";

let res=await fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:input.value
})
});


let data=await res.json();

chat.innerHTML += "<p>♤ MADARA IA : "+data.reply+"</p>";

input.value="";

}