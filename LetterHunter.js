// Create a function that tells how many times a letter appears in a sentence
//Crie uma funçao que diga quantas vezes uma letra aparece em determinada frase
function LetterHunter(letter, sentence){
    var appearances = 0;

    for(var i = -1; i <= sentence.length; i++){
        if(letter.toUpperCase() == sentence.toUpperCase()[i]){
            appearances++;
        }
    }

    console.log('The letter ' + letter + " appears " + appearances + (appearances === 1 ? " time" : " times") + " in the sentence " + sentence)
}

LetterHunter("a", "How Long is a chinese name")