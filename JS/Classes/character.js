
class Character {

    constructor () {
        this.event = []; 
    }

}

// Example character
class John extends Character {
    
    constructor () {
        super();
        
        this.event[0] = { text: "Hello, how are you?",
                    options: 
                    [    
                        { response: "Bad", next: 1, f: function(){this.moveTo(100,100,0.1);} },
                        { response: "Good", next: 2 },
                    ]
                    };
        this.event[1] = { text: "Why, what's wrong?",
                    options: 
                    [    
                         { response: "My dog ran away", next: 3},                              
                         { response: "I broke up with my girlfriend", next: 4},
                    ]
                    };           

    }

}
    