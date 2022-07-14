enum state {
    "ON",
    "OFF"
  }

export class Truck {
    truck_id : number;
    driver_id : number;
    load_id : number ;
    type : string;
    domain : string;
    name : string;
    year : number; 
    model : string; 
    color : string; 
    licence_plate : string;
    status : state; 
    capacity : number;
    engine_type : string;
    isfull : boolean;
    
} 