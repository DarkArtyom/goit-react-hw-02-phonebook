import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'styles/Container.styled';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    filter: '',
    contacts: [],
  };

  loginInputId = nanoid();

  formSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const findName = contacts.find(contact => contact.name === name);
    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      const user = {
        id: nanoid(),
        name: name,
        number: number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, user],
      }));
    }
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalazedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalazedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visiblePhoneBook = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactsList
          visibleContacts={visiblePhoneBook}
          onDeleteContact={this.deleteContact}
        ></ContactsList>
      </Container>
    );
  }
}
