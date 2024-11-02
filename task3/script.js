$(document).ready(init)

function init(){
    $("#btn").click(getPrice);
}

function getPrice(){ // Corrigido de getPrince para getPrice
    // Start de loading gif para a experiência do usuário
    $("#loading").html("<img src='loading.gif'>");
    $("#result").load("index.php .css-1bwgsh3", endLoading);
}

function endLoading() {
    $("#loading").html("");
}