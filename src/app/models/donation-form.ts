import {User} from "./user";

export interface DonationForm {
  id: string;
  title: string;
  hasCategory: boolean;
  quantity: number;
  amount: number;
  isCash: boolean;
  donator: User;
}
