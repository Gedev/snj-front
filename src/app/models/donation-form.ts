import {User} from "./user";

export interface DonationForm {
  id: number;
  title: string;
  hasCategory: boolean;
  quantity: number;
  amount: number;
  isCash: boolean;
  donator: User;
}
