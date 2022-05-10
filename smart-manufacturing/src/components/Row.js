import { useDispatch } from "react-redux";
import {
  removeItem,
  setEditItem,
  deactivateLocation,
} from "../features/table/tableSlice";
import { openModal } from "../features/modal/modalSlice";
import { MdDelete, MdEditNote, MdPowerSettingsNew } from "react-icons/md";

const Row = ({ item }) => {
  const dispatch = useDispatch();
  const { id } = item;

  const getValues = () => {
    const values = Object.values(item);

    return values.map((value, index) => {
      return index !== 0 && <td key={index + value}>{value}</td>;
    });
  };

  return (
    <tr className={`${item.status === "Deactivated" ? "deactivated" : null}`}>
      {getValues()}
      <td>
        <div className="row-btn-container">
          <button
            type="button"
            className="row-btn"
            onClick={() => {
              dispatch(openModal());
              dispatch(setEditItem(id));
            }}
          >
            <MdEditNote />
          </button>
          <button
            type="button"
            className="row-btn row-btn-danger"
            onClick={() => dispatch(removeItem(id))}
          >
            <MdDelete />
          </button>
          <button
            type="button"
            className="row-btn row-btn-warning"
            onClick={() => dispatch(deactivateLocation(id))}
          >
            <MdPowerSettingsNew />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
