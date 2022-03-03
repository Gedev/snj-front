import {Address} from "./address";

export interface User {
   id: number;
   lastname: String ;
   firstname: String;
   birthdate: Date;
   address: Address;
}
