var pet = {
    words: '...',
    speak: function(say) {
        console.log(say + ' ' + this.words)
    }
}

// pet.speak(' Miao ')

var dog = {
    words: 'Wang'
}

pet.speak.call(dog, 'Speak')