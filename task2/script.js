var URL = "index.php";
//essa funcao 'getTxt(){}'ira "send a request to the server"
async function getTXT(){
    var answer = await fetch(URL);
    //retreive our targetted value from the answer given back from the server
    //await = espera pela resposta da requisao feita, se nao utilizar o site pode bloquear
    var returnedValue = await answer.text();

    document.getElementById("txtContent").innerHTML = returnedValue;
}