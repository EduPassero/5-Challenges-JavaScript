// Create a function that draws a frame with the given measures
// Crie uma funçao que desenha uma moldura com determinadas medidas

function FrameMaker(altura, largura){
    if(altura > 1 && largura > 1){
        var topBottomline = '+'
        var middleLine = '|'

        for(var x = 0; x < largura; x++){
            topBottomline += '-'
            middleLine += " "
        }

        topBottomline += '+'
        middleLine += '|'
        console.log(topBottomline)

        for(var y = 0; y<altura; y++){
            console.log(middleLine)
        }

        console.log(topBottomline)
    }
    else{
        console.log('As medidas são insuficientes para a moldura')
    }
}

FrameMaker(5, 15)