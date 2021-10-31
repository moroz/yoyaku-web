import Link from "next/link";
import { useForm } from "react-hook-form";
import { SlotParams } from "../../interfaces/slots";
import DateTimeInput from "../../components/DateTimeInput";
import { useCreateSlotMutation } from "../../api/mutations/slots";
import dayjs from "dayjs";
import CompositeDateTime from "../../helpers/CompositeDateTime";
import { useEffect } from "react";

const NewSlot = () => {
  const defaultStartTime = dayjs().add(1, "day").hour(12).minute(0).second(0);
  const { register, handleSubmit, watch, setValue } = useForm<SlotParams>({
    defaultValues: {
      startTime: new CompositeDateTime(defaultStartTime),
      endTime: new CompositeDateTime(defaultStartTime.add(1, "hour"))
    }
  });
  const [mutate, { data: mutationData }] = useCreateSlotMutation();
  const [startTime, endTime] = watch(["startTime", "endTime"]);

  useEffect(() => {
    const parsed = new CompositeDateTime(startTime);
    const end = new CompositeDateTime(endTime);
    if (parsed.isAfter(end)) {
      setValue(
        "endTime",
        new CompositeDateTime(parsed.toDayjs()!.add(1, "hour"))
      );
    }
  }, [startTime.date, startTime.time]);

  const onSubmit = (data: SlotParams) => {
    const params = {
      ...data,
      startTime: new CompositeDateTime(data.startTime),
      endTime: new CompositeDateTime(data.endTime),
      capacity: Number(data.capacity)
    };
    mutate({ variables: { params } });
  };

  const errors = mutationData?.createSlot.errors;

  return (
    <div className="container">
      <h1 className="title">Create new time slot</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="columns">
          <div className="column">
            <DateTimeInput
              label="Start time"
              register={register}
              name="startTime"
            />
          </div>
          <div className="column">
            <DateTimeInput
              label="End time"
              register={register}
              name="endTime"
            />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Capacity</label>
              <input
                type="number"
                {...register("capacity")}
                defaultValue={1}
                className="input"
              />
            </div>
          </div>
        </div>
        <input type="submit" className="button is-primary" />
        {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
      </form>
    </div>
  );
};

export default NewSlot;
