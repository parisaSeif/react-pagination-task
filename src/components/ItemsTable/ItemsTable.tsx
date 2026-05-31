
import type { Item } from "../../types/type";
import { formatJalaliDate } from "../../utils/date";

type Props = {
  items: Item[];
};

export const ItemsTable = ({ items }: Props) => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{formatJalaliDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};