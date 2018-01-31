class Prawnking extends Character {
    
    constructor () {
        super();

        this.convincedMessage = "Good answer. Very well, I accept, and shall join your kingdom.";
        this.reputationNeeded = 15;

        // Starting message

        this.event[1] = { text: "The lord waits for you to say something",
        options: [    
        { response: "Goeie, lord of Leeuwarden", next: 11, rep: 5 },
        { response: "Goeie, lord of Fryslan", next: 13, rep: 0 },
        { response: "Good day, lord of Friesland  ", next: 12, rep: -3 },
        ]};      
            //Goeie, lord of Leeuwarden
            this.event[11] = { text: "Goeie, young nobleman, I see you've learned a few things before coming here",
            options: [    
            { response: "You would be correct, because I wish for the region of Fryslan to join my kingdom ", next: 111, rep: 5 },
            { response: "That's right, that's because I wish for the region of Friesland to join my kingdom", next: 111, rep: -5 },
            ]};      
            //Are you a prawn?
            this.event[12] = { text: "Goeie young king, but I do believe I'm the lord of Leeuwarden",
            options: [    
            { response: "Why of course, My apologies. I came here to ask if you were willing to join my kingdom.", next: 111, rep: 5 },
            { response: "Are you sure? I thought this town is called Friesland?", next: 222, rep: -10 },
            ]};      

            //Are you a prawn?
            this.event[13] = { text: "Goeie young king, but I do believe I'm the lord of Leeuwarden",
            options: [    
            { response: "Why of course, My apologies. I came here to ask if you were willing to join my kingdom.", next: 111, rep: 10 },
            { response: "Are you sure? I thought this town is called Friesland?", next: 222, rep: -10 },
            ]};                  
        //...Ookay, I came here to reunite your kingdom to my Great empire of Seafood
        //I actually don't care. I want your kingdom to be part of my Great Empire of Seafood.
        this.event[111] = { text: "It is understandable that you wish for the region of Fryslan to join your kingdom, but do you even know it's origins?",
        options: [    
        { response: "I know that it's called Fryslan?", next: 1112, rep: -5 },
        { response: " It is said that a man named Friso settled here, which is where the name Fryslan comes from ", next: 1113, rep: 5 },
        ]};      

        this.event[1113] = { text: "you're right, now do you know how old this town is?",
        options: [    
        { response: "I believe the town is at least over twelvehundred years old", next: 1111, rep: 5 },
        { response: " It is twothousand and fourhundred years old ", next: 1114, rep: -5 },
        ]};      

            //*Bow then jump three times and spit on the floor*
            this.event[1111] = { text: "Good answer. Very well, I accept, and shall join your kingdom. ",
            };   
            //Please, I really need this kingdom
            this.event[1112] = { text: "Go away! Unless you get some knowledge about this lordship you won't become our ruler!",
           };   
           //end conversation
           this.event[222] = { text: "Yes I'm sure, come back when you know more about my lordship!"};

           this.event[1114] = { text: "Wrong answer, come back when you've refreshed your memory"};
            
    }

    update () {
        image(image_throne,0,0,width,width/1920 * 1080);
        image(image_lord,0,0,width, width/1920 * 1080);

        // Reputation change
        if (gameplay_replerp > 0.1) {
            gameplay_replerp += -gameplay_replerp * 0.0125;

            if (gameplay_replerp < 0.05) {
                gameplay_replerp = 0;
            }

            textAlign(CENTER, CENTER);
            textSize(48 * gameplay_replerp);
            //text(gameplay_repchange, width / 2, height / 2);
        }   

    }
}
        