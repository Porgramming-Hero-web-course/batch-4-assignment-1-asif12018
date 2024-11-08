{


    //=============== problem 7 ===================//

class Car {
    make:string;
    model:string;
    year:number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        const age = 2024 - this.year;
        console.log(`${age} (assuming current year is 2024)`)
    }
}

const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();
}