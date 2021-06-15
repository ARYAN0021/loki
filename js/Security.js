class Security {

    constructor(){

        // Add code to create the input and button elements
this.access1 = createInput("Code1");
this.access1.position(100,90);
this.access1.style('background','white')

this.button1 = createButton('Authenticate');
this.button1.position(100,120);
this.button1.style('background','lightgrey')

this.access2 = createInput("Code2");
this.access2.position(100,290);
this.access2.style('background','white')

this.button2 = createButton('Authenticate');
this.button2.position(100,320);
this.button2.style('background','lightgrey')

this.access3 = createInput("Code3");
this.access3.position(700,90);
this.access3.style('background','white')

this.button3 = createButton('Authenticate');
this.button3.position(700,120);
this.button3.style('background','lightgrey')

this.access4 = createInput("Code4");
this.access4.position(700,290);
this.access4.style('background','white')

this.button4 = createButton('Authenticate');
this.button4.position(700,320);
this.button4.style('background','lightgrey')
    }

    hide(){
        this.access1.hide()
        this.access2.hide()
        this.access3.hide()
        this.button1.hide()
        this.button2.hide()
        this.button3.hide()
        this.access4.hide()
        this.button4.hide()
    }
    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                click.play();
           }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                click.play();
            }
        });
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
        click.play();
    }
});

this.button4.mousePressed(() => {
    if(system.authenticate(accessCode4,this.access4.value())){
        this.button4.hide();
        this.access4.hide();
        score++;
        click.play();
    }
});

    }
}
