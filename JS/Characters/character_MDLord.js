class MDLord extends Character {
    constructor () {
        super();
        this.reputationNeeded = 50;

        this.convincedMessage = '';

        this.event[1] = { text: "Good evening, young prince. I guess you came here the prove me that you deserve to be our ruler. Okay than, I am ready to her you, but first do you want some wine?",
        options: [    
        { response: "Usually I don't drink, but unless you want me to drink with you, than I agree", next: 11, rep:  },
        { response: "No, I don't want to", next: 12, rep:  },
        ]}; 

            // ay bitch
            this.event[11] = { text: "wazzup man",
            options: [    
            { response: "yo mama's up", next: 14, rep: 10000 },
            { response: "You fucking normie, doritofarmer lookin'ass", next: 16, rep: -10000 },
            ]}; 

             //You fucking normie, doritofarmer lookin'ass
             this.event[16] = { text: "What did you just call me you little bitch",
             options: [    
             { response: "lol jk dude, just a prank.", next: 17, rep: 10000 },
             { response: "I called you a normie you little faggot dude", next: 12, rep: -10000 },
             ]}; 
 


           
            //yo mama's up
            this.event[14] = { text: "Aw shit dude, you fucking got me",
            options: [    
            { response: "ik dude you got got, famsquad", next: 15, rep: 10000 },
            { response: "You fucking normie, doritofarmer lookin'ass", next: 12, rep: -10000 },
            ]}; 

           
    }
}