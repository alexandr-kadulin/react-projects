import { useAppContext } from "../context/appContext";
import { MdDelete, MdEditNote } from "react-icons/md";
import { ButtonsContainer, RowButton } from "../styledComponents";

const Row = ({ item }) => {
  const { setEditItem, removeItem } = useAppContext();

  const { id } = item;

  const getValues = () => {
    const values = Object.values(item);

    return values.map((value, index) => {
      return index !== 0 && <td key={`${index} + ${value}`}>{value}</td>;
    });
  };

  return (
    <tr>
      {getValues()}
      <td>
        <ButtonsContainer row>
          <RowButton
            onClick={() => {
              setEditItem(id);
            }}
          >
            <MdEditNote />
          </RowButton>
          <RowButton danger onClick={() => removeItem(id)}>
            <MdDelete />
          </RowButton>
        </ButtonsContainer>
      </td>
    </tr>
  );
};

export default Row;
