import Link from "next/link";
import { useListSlotsQuery } from "../../../api/queries/slots";
import { useSignOut } from "../../../api/sessionsClient";
import AdminLayout from "../../../components/AdminLayout";
import { formatTimestamp } from "../../../helpers/TimeHelpers";

const SlotsList = () => {
  const signOut = useSignOut();
  const { data } = useListSlotsQuery();
  return (
    <AdminLayout>
      <h1 className="title">Time slots</h1>
      {data ? (
        <table className="table is-bordered">
          <thead>
            <th>ID</th>
            <th>Start time</th>
            <th>End time</th>
          </thead>
          <tbody>
            {data.slots.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{formatTimestamp(row.startTime)}</td>
                <td>{formatTimestamp(row.endTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <Link href="/admin/slots/new">
        <a className="button is-primary">New time slot</a>
      </Link>
      <button onClick={signOut} className="button is-danger">
        Sign out
      </button>
    </AdminLayout>
  );
};

export default SlotsList;
