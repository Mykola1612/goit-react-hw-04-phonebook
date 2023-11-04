import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number === data.number
    );

    if (contactExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, data]);
  };

  const handleinputChangeFilter = data => {
    setFilter(data);
  };

  const handleOnDelete = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const handleFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={handleinputChangeFilter} filterValue={filter} />
      <ContactList
        contacts={handleFilterContacts}
        handleOnDelete={handleOnDelete}
      />
    </div>
  );
};
