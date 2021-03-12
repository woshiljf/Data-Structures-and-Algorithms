class Vehicle {

    constructor() {
        console.log(new.target);

        if (new.target == Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated')
        }
    }


}

class Bus extends Vehicle {
    constructor(props) {
        super(props);

    }

}

var b = new Bus()
new Vehicle()