//Create a function that tells the percentual relation of two given values
//Crie uma funçao que diga a relaçao de porcentagem entre dois números

function PercentualMaker(nominator, denominatior){
    var percentual = 100 * (nominator/denominatior)

    console.log(nominator + " corresponde a " + percentual + "% de " + denominatior)
};

PercentualMaker(60, 120)