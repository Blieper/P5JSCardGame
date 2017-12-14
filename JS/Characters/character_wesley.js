class Wesley extends Character {
    
    constructor () {
        super();

        // Starting message

        this.event[1] = { text: "Hello young price.",
        options: [    
        { response: "Stfu you prawn", next: 11, rep: 10000 },
        { response: "Are you a prawn?", next: 12, rep: -10000 },
        ]};      

    }
}
        