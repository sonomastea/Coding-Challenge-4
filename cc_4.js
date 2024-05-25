//U05721483
//Electric Car Class Implementation Challenge
//Step 1

     class EV extends Car{
        constructor(make,speed,charge) {
        super(make,speed);
        this.charge=charge;
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
        console.log(`{this.make} going at
         ${this.speed}km/h, with a charge of $
         {this.charge}%`)
    }

     }

//Step 4
const ev1 = new EV (`Tesla`,120,23)
console.log (`Car 1: ${ev1.make},
starting speed: {ev1.speed} km/h, 
with a battery charge of ${ev1.charge}%`);
ev1.accelerate();
ev1.accelerate();
ev1.brake();
ev1.chargebattery(50);
ev1.accelerate();
     