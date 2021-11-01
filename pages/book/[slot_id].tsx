import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useGetSlotQuery } from "../../api/queries/slots";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import SubmitButton from "../../components/SubmitButton";

const MakeReservation = () => {
  const router = useRouter();
  const { slot_id } = router.query;
  const { data, loading } = useGetSlotQuery(slot_id as string);
  console.log(data);
  const slot = data?.slot;
  const { register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <h1 className="title">Rezerwacja na zabieg</h1>
      {loading ? <p>Loading...</p> : <p>Slot {slot.id}</p>}
      <form>
        <h2 className="subtitle">Please enter your data</h2>
        <InputField name="firstName" register={register} label="Imię:" />
        <InputField name="lastName" register={register} label="Nazwisko:" />
        <InputField
          name="phoneNo"
          register={register}
          label="Telefon kontaktowy:"
        />
        <SubmitButton />
      </form>
    </Layout>
  );
};

export default MakeReservation;
