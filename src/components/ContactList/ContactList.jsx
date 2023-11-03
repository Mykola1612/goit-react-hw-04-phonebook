import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleOnDelete }) => {
  const filteredContacts = contacts();
  return (
    <ul className={styles.list_contacts}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={styles.list_element}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              className={styles.button_contacts__list}
              onClick={() => handleOnDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
