import { ID } from "./common";

export interface Reservation {
  id: ID;
  email: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  slotId: ID;
  insertedAt: string;
  updatedAt: string;
}

export interface ReservationParams {
  email: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  slotId: ID;
}
