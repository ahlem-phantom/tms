enum status {
    "CREATED",
    "SHIPPING",
    "DELIVERD",
    "CANCELED",
  }

  enum item {
    "CARTON",
    "CUBE",
    "BOX"
  }
// CREATE, SHIPPEMENT, DELIVERED, PAID
export class Order {
    order_id : number ;
    client_id : number ;
    shippement_id : number ;
    quantity : number ;
    origin_location : string;
    origin_city: string;
    destination_location : string;
    destination_city : string;
    order_status : status ; 
    date_received: Date ;
    price  : number ;
    items  : item;
    
} 