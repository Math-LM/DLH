//Ned to make sure the page is ready
$(document).ready(init)//.ready(init) quando a funcao document estiver pronta, ira chamar a variavel init
function init(){
    $("#btn").click(getWeather);//getWeather function depois de clicar em button <button onclick="getWeather()"></button>
}

function getWeather(){
    $("#output").load("index.php .wr-value--temperature--c:first");
}