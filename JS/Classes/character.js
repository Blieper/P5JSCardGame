
class Character {

    constructor () {
        this.event = []; 
<<<<<<< HEAD
        this.conversationTime = 60;
=======
        this.reputation = 0;
        this.reputationNeeded = 100;
>>>>>>> e6e05d5b4303f66f8916557df40ab0748974f75f
    }

}

// Example character
class John extends Character {
    
    constructor () {
        super();

        this.event[1] = { text: "Hello young price.",
        options: [    
        { response: "Stfu you prawn", next: 11, rep: 10000 },
        { response: "Are you a prawn?", next: 12, rep: -10000 },
        ]};      

            // "Stfu you prawn"
            this.event[11] = { text: "Excuse me?",
            options: [    
            { response: "Me too thanks", next: 111, rep: 0 },
            { response: "What?", next: 112, rep: 0 },
            ]};      
 
                // "Me too thanks"
                this.event[111] = { text: "I see you're a man of my culture",
                options: [    
                { response: "yes", next: 1111, rep: 0 },
                { response: "no", next: 1112, rep: 0 },
                ]}; 
 
                    // "yes"
                    this.event[1111] = { text: "Cool!",
                    }; 
 
                    // "no"
                    this.event[1112] = { text: "Oh.",
                    }; 

                // "What?"
                this.event[112] = { text: "Huh?",
                options: [    
                { response: "Me too thanks", next: 1121, rep: 0 },
                { response: "What?", next: 1122, rep: 0 },
                ]}; 
 
                    // "Me too thanks"
                    this.event[1121] = { text: "Thanks",
                    }; 

                    // "What?"
                    this.event[1122] = { text: "Prawns",
                    }; 

            // "Are you a prawn?"
            this.event[12] = { text: "Excuse me?",
            options: [    
            { response: "Stfu you prawn", next: 11, rep: 0 },
            { response: "Are you a prawn", next: 12, rep: 0 },
            ]};        

    }

}
        