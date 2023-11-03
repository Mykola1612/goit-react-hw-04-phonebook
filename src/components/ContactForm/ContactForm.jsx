import { nanoid } from 'nanoid';
import React from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleinputChange = e => {
    this.setState({ name: e.target.value });
  };

  handleinputChangeNumber = e => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.match(/.{1,3}/g);
    if (value) {
      value = value.join('-');
    }
    this.setState({ number: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.onSubmit(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form_contact}>
        <label className={styles.label_contact}>
          Name
          <input
            type="text"
            name="name"
            className={styles.all_inputs__contact}
            value={this.state.name}
            required
            onChange={this.handleinputChange}
          />
        </label>
        <label className={styles.label_contact}>
          Number{' '}
          <input
            type="tel"
            name="number"
            value={this.state.number}
            className={styles.all_inputs__contact}
            onChange={this.handleinputChangeNumber}
            required
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          />
        </label>
        <button type="submit" className={styles.button_submit__contact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
