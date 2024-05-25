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

 chargebattery(chargeTo) {
    this.charge=chargeTo;
    console.log(`Battery charge : $
        {this.charge}%`);
       }

    //Step 3

    accelerate(){
        this.speed += 20;
        this.charge -=1;
        console.log(`New Speed: $
            {this.spped} km/h`)

    }


}

//Step 4
const car3 = new EV (`Tesla`,120,23)
console.log (`Car 3: ${car3.speed} km/h`);
car3.accelerate();
car3.accelerate();
car3.chargebattery(50);
car3.brake();
