import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleinputChange = e => {
    setName(e.target.value);
  };

  const handleinputChangeNumber = e => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.match(/.{1,3}/g);
    if (value) {
      value = value.join('-');
    }
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_contact}>
      <label className={styles.label_contact}>
        Name
        <input
          type="text"
          name="name"
          className={styles.all_inputs__contact}
          value={name}
          required
          onChange={handleinputChange}
        />
      </label>
      <label className={styles.label_contact}>
        Number{' '}
        <input
          type="tel"
          name="number"
          value={number}
          className={styles.all_inputs__contact}
          onChange={handleinputChangeNumber}
          required
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        />
      </label>
      <button type="submit" className={styles.button_submit__contact}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
