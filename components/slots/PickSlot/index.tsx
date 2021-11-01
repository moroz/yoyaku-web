import React from "react";
import Link from "next/link";
import { Slot } from "../../../interfaces/slots";
import { formatTime } from "../../../helpers/TimeHelpers";
import clsx from "clsx";
import classes from "./PickSlot.module.sass";

interface Props {
  slot: Slot;
}

const PickSlot = ({ slot }: Props) => {
  return (
    <Link href={`/book/${slot.id}`}>
      <a className={clsx("button", classes.root)}>
        {formatTime(slot.startTime)}&ndash;{formatTime(slot.endTime)} (0/
        {slot.capacity})
      </a>
    </Link>
  );
};

export default PickSlot;
