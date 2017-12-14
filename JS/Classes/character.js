
class Character {

    constructor () {
        this.event = []; 
    }

}

// Example character
class John extends Character {
    
    constructor () {
        super();
        
        this.event[1] = { text: "Hello, how are you?",
        options: [    
        { response: "Bad", next: 11, rep: 0 },
        { response: "Good", next: 12, rep: 0 },
        ]};

            // Bad
            this.event[11] = 
            { text: "Why, what's wrong?",
            options:[    
            { response: "My dog ran away", next: 111},                              
            { response: "I broke up with my girlfriend", next: 112},
            ]};  

                // "My dog ran away"
                this.event[111] = 
                { text: "Oh that's terrible, what's it's name?",
                options:[    
                { response: "Jerry", next: 1111, rep: 1},                              
                { response: "That's none of your business.", next: 1112, rep: 1},
                { response: "Your mom.", next: 1113, rep: 1},               
                ]};  
                    
                    // "Jerry"
                    this.event[1111] = 
                    { text: "Lol who the fuck calls his dog Jerry.",
                    };   

                    // "That's none of your business."
                    this.event[1112] = 
                    { text: "Well sorry for asking...",
                    };  

                    // "That's none of your business."
                    this.event[1113] = 
                    { text: "Well sorry for asking...",
                    };   

                // "I broke up with my girlfriend"
                this.event[112] = 
                { text: "Why, what's wrong?",
                options:[    
                { response: "My dog ran away", next: 3},                              
                { response: "I broke up with my girlfriend", next: 4},
                ]};   

            // Good
            this.event[12] = { text: "Done anything recently?",
            options: [    
            { response: "Yeah, I went to the cinema!", next: 1, rep: -1 },
            { response: "Good", next: 2, rep: 1 },
            ]};
       

    }

}
    