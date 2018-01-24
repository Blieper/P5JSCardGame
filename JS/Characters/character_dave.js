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
                { response: "No it's quite alright, I'll be taking my leave now", next: 12 },
                ]}; 

                //few more questions
                this.event[17] = { text: "What would you like to ask milord?",
                options: [    
                { response: "How old is this kingdom?", next: 19 },
                { response: "How long ago was this town founded?", next: 21 },
                { response: "What is this region called?", next: 22 },
                { response: "No it's quite alright, I'll be taking my leave now", next: 12 },
                ]}; 
                
                //Fries, sounds mighty interesting I say
                this.event[111] = { text: "Thank you milord",
                options: [    
                { response: "Not a problem citizen", next: 16 },
                {response : "I'll be on my way now", next: 12},
                ]}; 

               
                //How old is this kingdom?
                this.event[19] = { text: "Well milord, we're not quite sure. But our historians believe it's existed for at least twothousand and fourhundred years",
                options: [    
                { response: "Mighty interesting, could I ask another question?", next: 17 },
                { response: "Thank you for telling me this, I'll be on my way now.", next: 12 },
                ]}; 

                //how old is this city?
                this.event[21] = { text: "Historians believe this town is at least over 1200 years old milord",
                options: [    
                { response: "Mighty interesting, could I ask another question?", next: 17 },
                { response: "Thank you for telling me this, I'll be on my way now.", next: 12 },
                ]}; 

                //What is this region called?
                this.event[22] = { text: "This region is called Fryslan milord" ,
                options: [    
                { response: "Why is it called that?", next: 23 },
                { response: "Thank you for telling me this, I'll be on my way now", next: 12 },
                ]}; 

                this.event[23] = { text: "They say that in ancient times a man named Friso settled in the region, which is where the name comes from" ,
                options: [    
                { response: "Thank you, i've still got a few more questions", next: 17 },
                { response: "Thank you for telling me this, I'll be on my way now.", next: 12 },
                ]}; 



                

        

                //end conversation
            this.event[12] = { text: "Very well sire"};   


           
    }

    update () {
        image(image_peasant,0,0,width, width/1920 * 1080);
    }
}