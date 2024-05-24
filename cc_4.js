//U05721483
//Electric Car Class Implementation Challenge
//Step 1
class Car{
    constructor(make,speed) {
        this.make=make;
        this.speed=speed
    }
    accelerate() {
        this.speed +=10;
        console.log(`New Speed: $
            {this.speed} km/h `);
    }
    brake (){
        this.speed=-5;
        console.log(`New Speed: $
        {this.speed} km/h` )
    }
     class EV extends Car{
        constructor(make,speed,charge) {
        super(make,speed);
        this.charge=charge;
        }
    }
    //Step 2 
}