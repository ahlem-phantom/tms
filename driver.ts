enum state {
    "ON DUTY", 
    "DRIVING",
    "OFF DUTY"
}
export class Driver {
    driver_id : number;
    images : string  ;
    phone : number;
    firstname : string ;
    lastname : string ;
    email : string ;
    address : string ;
    license_no : string ; // num mtaa el permis 
    license_state : string ;
    license_city : string ;
    status : state ; 
    start_date : Date ;
    gps_stat : string ;
} 