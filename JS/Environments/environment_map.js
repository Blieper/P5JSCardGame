class Environment_Map extends Environment {
    
        constructor () {
            super();
    
            this.buttonCityopia = new Clickable(500,220,85,85);
            this.buttonCityopia.text = "Chisinau";

            if (gameplay_completedCities[0] == true) {
                this.buttonCityopia.text = this.buttonCityopia.text + "\nCompleted!";
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
    
            this.buttonCulturia = new Clickable(175,400,85,85);
            this.buttonCulturia.text = "Leeuwarden";

            if (gameplay_completedCities[1] == true) {
                this.buttonCulturia.text = this.buttonCulturia.text + "\nCompleted!";
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

            this.mapImage = loadImage('Assets/Images/Map.png');

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

            this.buttonCityopia.x = width * 0.6;
            this.buttonCityopia.y = height * 0.15;

            this.buttonCulturia.x = width * 0.65;
            this.buttonCulturia.y = height * 0.8;

            image(this.mapImage,0,0,width,height);
        }
        
        onFinishedTransition() {
            this.destroyAll();
        }

    }