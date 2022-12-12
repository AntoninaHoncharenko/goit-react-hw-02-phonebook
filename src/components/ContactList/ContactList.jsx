import { Component } from 'react';
import { Contact } from '../ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ name, number, id }) => {
          return <Contact key={id} name={name} number={number} />;
        })}
      </ul>
    );
  }
}
