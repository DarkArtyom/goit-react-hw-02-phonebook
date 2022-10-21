import { Component } from 'react';
import { Forma, Label, Input, ButtonSubmit } from './Form.styled';
import { nanoid } from 'nanoid';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  handleInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Forma onSubmit={this.handleSubmit}>
        <Label htmlFor={this.loginInputId}>Full name</Label>
        <Input
          id={this.loginInputId}
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleInput}
          required
        />
        <Label htmlFor={this.loginInputId}>Phone number</Label>
        <Input
          id={this.loginInputId}
          type="tel"
          name="number"
          value={number}
          placeholder="enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleInput}
          required
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Forma>
    );
  }
}
