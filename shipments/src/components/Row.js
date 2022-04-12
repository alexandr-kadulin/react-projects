import { useDispatch } from "react-redux";
import { removeItem, setEditItem } from "../features/table/tableSlice";
import { openModal } from "../features/modal/modalSlice";
import { MdDelete, MdEditNote } from "react-icons/md";

const Row = ({ item }) => {
  const dispatch = useDispatch();
  const values = Object.values(item);
  const { orderNo } = item;

  return (
    <tr>
      {values.map((value, index) => {
        return <td key={index + value}>{value}</td>;
      })}
      <td>
        <div className="row-btn-container">
          <button
            type="button"
            className="row-btn"
            onClick={() => {
              dispatch(openModal());
              dispatch(setEditItem(orderNo));
            }}
          >
            <MdEditNote />
          </button>
          <button
            type="button"
            className="row-btn danger-row-btn"
            onClick={() => dispatch(removeItem(orderNo))}
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
