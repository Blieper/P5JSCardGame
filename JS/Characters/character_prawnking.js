class Prawnking extends Character {
    
    constructor () {
        super();

        // Starting message

        this.event[1] = { text: "Hello young price.",
        options: [    
        { response: "Hello,strange creature with claws", next: 11, rep: 228 },
        { response: "Are you a prawn?", next: 12, rep: -1337 },
        ]};      
            //Hello,strange creature with claws
            this.event[11] = { text: "*stands from his throne* I am the mightiest Lord Super Prawn the VI",
            options: [    
            { response: "...Ookay, I came here to reunite your kingdom to my Great empire of Seafood", next: 111, rep: 1 },
            { response: "I actually don't care. I want your kingdom to be part of my Great Empire of Seafood.", next: 111, rep: -1 },
            ]};      
            //Are you a prawn?
            this.event[12] = { text: "Evidently I am",
            options: [    
            { response: "...Ookay, I came here to reunite your kingdom to my Great empire of Seafood", next: 111, rep: 1 },
            { response: "I actually don't care. I want your kingdom to be part of my Great Empire of Seafood.", next: 111, rep: -1 },
            ]};      
        //...Ookay, I came here to reunite your kingdom to my Great empire of Seafood
        //I actually don't care. I want your kingdom to be part of my Great Empire of Seafood.
        this.event[111] = { text: "*sits on his throne* I cant trust the whole kingdom to a random person. Prove me that you deserve to be our ruler!",
        options: [    
        { response: "*Bow than jump three times and spit on the floor*", next: 1111, rep: 9999 },
        { response: "Please, I really need this kingdom", next: 1112, rep: -100 },
        ]};      
            //*Bow than jump three times and spit on the floor*
            this.event[1111] = { text: "Oh my Prawn-mother!! This guy MUST be our ruler!",
            };   
            //Please, I really need this kingdom
            this.event[1112] = { text: "Go away! Unless you get some knowledge about our culture you won't become our ruler!",
           };      
    }
}
        