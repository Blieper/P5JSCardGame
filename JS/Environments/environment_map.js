class Environment_Map extends Environment {
    
        constructor () {
            super();
    
            this.buttonCityopia = new Clickable(500,220,50,50);
            this.buttonCityopia.text = "Cityopia";

            if (gameplay_completedCities[0] == true) {
                this.buttonCityopia.text = this.buttonCityopia.text + "\n\u2713";
            }

            this.buttonCityopia.onlyUnpressOverButton  = true;  

            let oldPressed = this.buttonCityopia.onUnpressed;

            this.buttonCityopia.onUnpressed = function () {
                oldPressed();
    
                game_environment.onTransition();

                setTimeout(function(){
                    game_environment.onFinishedTransition();
                    gameplay_city = 0;
                    setToEnv(envids.CITY1);
                }, 500);

                this.delete();
            }
    
            this.buttonCulturia = new Clickable(175,400,50,50);
            this.buttonCulturia.text = "Culturia";

            if (gameplay_completedCities[1] == true) {
                this.buttonCulturia.text = this.buttonCulturia.text + "\n\u2713";
            }

            this.buttonCulturia.onlyUnpressOverButton  = true;  

            oldPressed = this.buttonCulturia.onUnpressed;

            this.buttonCulturia.onUnpressed = function () {
                oldPressed();
    
                game_environment.onTransition();

                setTimeout(function(){
                    game_environment.onFinishedTransition();
                    gameplay_city = 1;
                    setToEnv(envids.CITY2);
                }, 500);

                this.delete();
            }

            this.mapImage = loadImage('images/testmap.png');

            this.blur = 0;
            this.inTransition = false;

            // this.time   = new Clickable(0,100,100,100,anchorTypes.TOP);
            // this.time.text        = gameplay_timestring;
            // this.time.textSize    = 48;
            // this.time.drawFrame   = false;
            // this.time.isClickable = false;
        }
        
        onTransition () {

        }

        update () {
            // if (!this.inTransition) {
            //     if (this.blur < 1) {
            //         this.blur += 0.05;
            //         this.blur = constrain(this.blur,0,1);
            //         tint(255, 255 * this.blur);
            //     }
            // }else{
            //     if (this.blur > 0) {
            //         this.blur -= 0.05;
            //         this.blur = constrain(this.blur,0,1);
            //         tint(255, 255 * this.blur);          
            //     }                
            // }

            image(this.mapImage,0,0);
        }
        
        onFinishedTransition() {
            this.destroyAll();
        }

    }