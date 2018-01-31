class MDPeasant1 extends Character {
    constructor () {
        super();
       
        this.event[1] = { text:"Hello Domnul, it's always nice to see new faces in our city. What brought you here?",
        options: [    
        { response: "Domnul, what does it mean?", next: 11},
        ]}; 

            // DOMNUL, what does it mean?
            this.event[11] = { text: "That stands for 'Sir' in moldavian, that is the best way to turn to a person with proper respect",
            options: [    
            { response: "Interesting, I will remember this, could you give me some more information about moldavian culture?", next: 12},
            ]}; 

             //Interesting, I will remember this, could you give me some more information about moldavian culture?
             this.event[12] = { text: "Sure, Domnul, ask me whatever you want about moldavian cuture",
             options: [    
             { response: "Could you tell me how moldavian people meet guests?", next: 31},
             { response: "Please, tell me about moldavian national food and drinks", next: 41},
             { response: "Tell me about your national holidays", next: 51},
             { response: "I think I have enough information.", next: 60},
             ]}; 
 
                //Could you tell me how moldavian people meet guests?
                this.event[31] = { text: "Moldavian people really like guests. Drinking a glass of wine with the homeowner is the best way to demonstrate that you trust him/her.",
                options: [    
                { response: "I will keep that in mind.", next: 12},
                { response: "What if I refuse?", next: 32},
                ]}; 

                //What if I refuse?
                this.event[32] = { text: "There is nothing bad if you are not a drinking person, but that's definitely going to influence home owner's attitude toward you",
                options: [    
                { response: "I will keep that in mind.", next: 12},
                ]}; 
           

                //Please, tell me about moldavian national food and drinks
                this.event[41] = { text: "Moldavian people drink homemade wine and eat Mamaliga, which is a national moldavian dish.",
                options: [    
                { response: "Got it!", next: 12},
                ]}; 


                //Tell me about your national hollydays
                this.event[51] = { text: "New Year is very important which is on the 31st of December. Furthermore, we do celebrate Christmas, but in Moldova it takes place on the 7th of January.",
                options: [    
                { response: "Thank you for this information.", next: 12},
                ]}; 


                this.event[60] = { text: "It was a pleasure to help you"}
               
                 


    }

    update () {
        image(image_room,0,0,width,width/1920 * 1080);
        image(image_peasant,0,0,width, width/1920 * 1080);
    }
}