import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useMakeReservationMutation } from "../../api/mutations/reservations";
import { useGetSlotQuery } from "../../api/queries/slots";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import SubmitButton from "../../components/SubmitButton";
import { ReservationParams } from "../../interfaces/reservations";

const MakeReservation = () => {
  const router = useRouter();
  const { slot_id } = router.query;
  const { data, loading } = useGetSlotQuery(slot_id as string);
  const slot = data?.slot;
  const { register, handleSubmit } = useForm<ReservationParams>();
  const [mutate, { loading: mutating, data: mutationData }] =
    useMakeReservationMutation();
  const onSubmit = (params: ReservationParams) => {
    mutate({ variables: { params: { ...params, slotId: String(slot_id) } } });
  };

  return (
    <Layout>
      <h1 className="title">Rezerwacja na zabieg</h1>
      {loading ? <p>Loading...</p> : <p>Slot {slot.id}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="subtitle">Please enter your data</h2>
        <InputField name="firstName" register={register} label="Imię:" />
        <InputField name="lastName" register={register} label="Nazwisko:" />
        <InputField name="email" register={register} label="Adres e-mail:" />
        <InputField
          name="phoneNo"
          register={register}
          label="Telefon kontaktowy:"
        />
        <SubmitButton disabled={mutating} />
      </form>
    </Layout>
  );
};

export default MakeReservation;
