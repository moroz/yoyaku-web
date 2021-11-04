import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { MutationResult } from "../../interfaces/common";
import { Reservation, ReservationParams } from "../../interfaces/reservations";

export const MAKE_RESERVATION = gql`
  mutation MakeReservation($params: ReservationParams!) {
    makeReservation(params: $params) {
      success
      errors
      data {
        id
      }
    }
  }
`;

export interface MakeReservationMutationResult {
  makeReservation: MutationResult<Reservation>;
}

export interface MakeReservationMutationVars {
  params: ReservationParams;
}

export const useMakeReservationMutation = () =>
  useMutation<MakeReservationMutationResult, MakeReservationMutationVars>(
    MAKE_RESERVATION
  );
