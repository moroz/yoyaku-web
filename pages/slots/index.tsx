import Link from "next/link";
import { useListSlotsQuery } from "../../api/queries/slots";
import { formatTimestamp } from "../../helpers/TimeHelpers";

const Home = () => {
  const { data } = useListSlotsQuery();
  return (
    <div className="container">
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
      <Link href="/slots/new">
        <a className="button is-primary">New time slot</a>
      </Link>
    </div>
  );
};

export default Home;
