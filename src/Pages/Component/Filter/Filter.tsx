import React, { useState, useEffect } from 'react';

interface FilterProps<T> {
  data: T[];
  filterBy: keyof T;
  onFilter: (filteredData: T[]) => void;
}

const Filter = <T,>({ data, filterBy, onFilter }: FilterProps<T>): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState('Active');
  const [uniqueValues, setUniqueValues] = useState<string[]>([]);

  useEffect(() => {
    const uniqueActiveValues = data.reduce<string[]>((acc, current: any) => {
      const value = String(current[filterBy]);
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
    setUniqueValues(uniqueActiveValues);
  }, [data, filterBy]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtered = data.filter((el: any) => String(el[filterBy]) === selectedValue);
    onFilter(filtered);
  };

  const handleReset = () => {
    onFilter(data);
    setSelectedValue('Active');
  };

  return (
    <form onSubmit={handleFilter}>
      <select value={selectedValue} onChange={handleSelectChange}>
        {uniqueValues.map((el, index) => (
          <option key={index} value={el}>{el}</option>
        ))}
      </select>
      <button type='button' onClick={handleReset}>
        {'Show All'}
      </button>
      <button type='submit'>{'Filter'}</button>
    </form>
  );
};

export default Filter;
