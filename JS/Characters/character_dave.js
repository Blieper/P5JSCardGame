class Dave extends Character {
    constructor () {
        super();

        this.event[1] = { text: "goendei my lord",
        options: [    
        { response: "what might 'goendei' mean?", next: 11 },
        { response: "I do not wish to talk right now", next: 12 },
        ]};  

            //what might 'goendei'' mean?
            this.event[11] = { text: "It means good day in our language my liege",
            options: [    
            { response: "What is your language called?", next: 14 },
            { response: "What an odd way of saying good day", next: 15 },
            ]}; 

                //What is your language called?
                this.event[14] = { text: "Fries, milord",
                options: [    
                { response: "Sounds odd", next: 15 },
                { response: "Fries, sounds mighty interesting I say", next: 111 },
                {response : "Thank you for telling me this, but i'll be on my way now", next: 12},
                ]}; 

                //odd
                this.event[15] = { text: "Why is that milord?",
                options: [    
                { response: "I don't know", next: 16 },
                { response: "It just sounds quite odd", next: 16 },
                ]}; 

                this.event[16] = { text: "If you say so milord, anything else I can help with?",
                options: [    
                { response: "yes, I'd like to ask a few more questions", next: 17 },
                { response: "No it's quite alright, i'll be taking my leave now", next: 12 },
                ]}; 

                //few more questions
                this.event[17] = { text: "What would you like to ask milord?",
                options: [    
                { response: "How old is this kingdom?", next: 19 },
                { response: "How long ago was this town created?", next: 17 },
                { response: "No it's quite alright, i'll be taking my leave now", next: 12 },
                ]}; 

                this.event[111] = { text: "Thank you milord",
                options: [    
                { response: "Not a problem citizen.", next: 16 },
                {response : "I'll be on my way now", next: 12},
                ]}; 

               

                this.event[19] = { text: "Well milord, we're not quite sure. But our historians believe it's existed for at least twothousand and fourhundred years",
                options: [    
                { response: "", next: 19 },
                { response: "How long ago was this town created?", next: 17 },
                { response: "No it's quite alright, i'll be taking my leave now", next: 12 },
                ]}; 



                

        

                //end conversation
            this.event[12] = { text: "Very well sire"};   


           
    }

    update () {
        image(image_peasant,0,0,width, width/1920 * 1080);
    }
}