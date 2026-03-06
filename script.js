function pesan(){

let game = document.getElementById("game").value;
let id = document.getElementById("idgame").value;
let nominal = document.getElementById("nominal").value;

if(id == ""){
alert("Masukkan ID Game!");
return;
}

document.getElementById("hasil").innerHTML =
"Pesanan berhasil! <br> Game: " + game +
"<br>ID: " + id +
"<br>Paket: " + nominal;

}
