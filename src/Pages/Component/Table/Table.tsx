import React, { useState } from 'react';
import ModalWindow from '../Modal/ModalWindow'
import "./Table.css"


interface Column {
  key: string;
  header: string;
}

type TableProps<T> = {
  data: T[];
  columns: Column[];
  changeName: (rowIndex: number, newValue: string) => void;
};

const Table = <T,>({ data, columns, changeName }: TableProps<T>): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRowIndex, setCurrentRowIndex] = useState<number | null>(null);
  const [newText, setNewText] = useState("");

  

  const openModal = (index: number) => {
    setCurrentRowIndex(index);
    setIsModalOpen(true);
  };

  const onChangeName = () => {
    if (currentRowIndex !== null) {
      changeName(currentRowIndex, newText);
      setIsModalOpen(false);
      setNewText("")
    }
  };

  return (
    <div className='Table'>
      <table>
        <thead>
          <tr>
            {columns.map((el, index) => (
              <th key={index}>{el.header}</th>
            ))}
            <th>Change text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{String(item[column.key])}</td>
              ))}
              <td>
                <button onClick={() => openModal(rowIndex)}>Change</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={setIsModalOpen}>
          <div>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder=""
            />
            <button onClick={onChangeName}>Save</button>
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

export default Table;