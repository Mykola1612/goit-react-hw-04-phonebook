import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, filterValue }) => {
  const handleinputChangeFilter = e => {
    filter(e.target.value);
  };

  return (
    <>
      <h3 className={styles.title_filter}>Find contacts by name</h3>
      <input
        type="text"
        name="number"
        onChange={handleinputChangeFilter}
        className={styles.input_filter}
        required
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
      />
    </>
  );
};

export default Filter;
