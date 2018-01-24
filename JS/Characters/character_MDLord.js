class MDLord extends Character {
    constructor () {
        super();
        this.reputationNeeded = 20;

        this.convincedMessage = 'Young lord, you know a lot about our cuture and now I can trust you. People of Moldova are going to be happy under your rule. ';

        this.event[1] = { text: "Good evening, young prince. I guess you came here the prove me that you deserve to be our ruler. Okay than, I am ready to her you, but first do you want some wine?",
        options: [    
        { response: "Usually I don't drink, but unless you want me to drink with you, Domnul, than I agree", next: 11, rep:10 },
        { response: "Usually I don't drink, but unless you want me to drink with you, than I agree", next: 11, rep:5 },
        { response: "No, I don't want to", next: 12, rep:-1 },
        ]}; 

            // Usually I don't drink, but unless you want me to drink with you, than I agree 
            this.event[11] = { text: "Good, that's the best wine made from my own wine collection.",
            options: [    
            { response: "That tastes really good. I guess it would be even better with a piece of Mamaliga", next: 21, rep:5 },
            { response: "That tastes good. I like it", next: 22, rep:2 },
            { response: "I tried better wine, is it really the best wine in your collection", next: 23, rep:-5 },
            ]};

            //No, I don't want to
            this.event[12] = { text: "As you wish, Domnul, probably you would like to try some traditional moldavian dishes?",
            options: [    
            { response: "Yes, sure I would like to try Mamaliga", next: 21, rep:5 },
            { response: "I would like a burger, no ketchup please", next: 66, rep:-100 },
            { response: "No, I don't think it's going to be tasty", next: 66, rep:-10 },
            ]}; 

            //I tried better wine, is it really the best wine in your collection
            this.event[23] = { text: "It's a pitty you didn't like my wine. Probably you would like to try some traditional moldavian dishes?",
            options: [    
            { response: "Yes, sure I would like to try Mamaliga", next: 21, rep:5 },
            { response: "I would like a burger, no ketchup please", next: 66, rep:-100 },
            { response: "No, I don't think it's going to be tasty", next: 66, rep:-10 },
            ]}; 

            //That tastes good. I like it
            this.event[22] = { text: "I am happy you liked it. Probably you would like to try some traditional moldavian dishes?",
            options: [    
            { response: "Yes, sure I would like to try Mamaliga", next: 21, rep:5 },
            { response: "I would like a burger, no ketchup please", next: 66, rep:-100 },
            { response: "No, I don't think it's going to be tasty", next: 66, rep:-10 },
            ]}; 

             //Yes, sure I would like to try Mamaliga
             this.event[21] = { text: "Luckily court cooks prepared Mamaliga just for you.",
             options: [    
             { response: "That would be a pleasure to try it. Right now I want to discuss national holidays that Cuturia is going to inherit from Moldova if it becomes part of my kingdom.", next: 41, rep: 5 },
             { response: "No thank you. Right now I want to discuss national holidays that Cuturia is going to inherit from Moldova if it becomes part of my kingdom.", next: 41, rep: 2 },
             ]}; 
             
             //That would be a pleasure to try it. Right now I want to discuss national hollidays that Cuturia is going to inherit from Moldova if it becomes part of my kingdom.
             this.event[41] = { text: "You are completely right. Tell me what would be the national hollydays if Moldova joins your kingdom?",
             options: [    
             { response: "New Year on the 31st of December and Christmas on the 7th of January", next: 42, rep: 5 },
             { response: "New Year on the 31st of December and Christmas on the 25th of December", next: 43, rep: 1 },
             { response: "What if we just forget about your holidays and keep only Culturia holidays, it's better in my opinion.", next: 66, rep: -5 },
             ]}; 

             //New Year on 31 of December and Christmas on 7th of January
             this.event[42] = { text: "That would be perfect for us.",
             options: [    
                { response: "Good ,I hope you accept joining Moldova to Culturia?", next: 50, rep: 1 },
             ]}; 

             //New Year on 31 of December and Christmas on 25th of December
             this.event[43] = { text: "You completely forgot about our Christmas which is on 7th of January!",
             options: [    
                { response: "No need to pay attention to your Christmas, we've got our Christmas which is better", next: 66, rep: -20 },
                { response: "Oh, yes and 7th of January is going to be a holiday too. I hope you accept joining Moldova to Culturia? ", next: 50, rep: 1 },
             ]}; 

             this.event[66] = { text: "You don't respect our culture at all, go away and turn back only when you get more knowledge about Moldovian culture."}
             
             this.event[50] = { text: "I don't think you are ready to become the ruler of Moldova, get back when you get some more knowledge about our culture."}
           
    }

    update () {
        image(image_lord,0,0,width, width/1920 * 1080);
    }
}