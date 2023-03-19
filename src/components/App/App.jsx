import { useState, useEffect } from 'react';

import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { GlobalStyle } from '../GlobalStyle';
import { ContactListTitle, FormTitle, ContactsLayout } from './App.styled';
import initialContacts from 'data/contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
     
  const [filter, setFilter] = useState('');


  // () => {
  //    return  JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  //  }


//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts);
//       this.setState({ contacts: parsedContacts });
//       return;
//     }
//     this.setState({ contacts: initialContacts });
//   }



  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])




  const addContact = newContact => {
    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    existedContact
      ? alert('This contact is already in contacts.')
      : setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };



   const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };



  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 const filteredContacts = getFilteredContacts();


  return (
    <ContactsLayout>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm onAddContact={addContact} />
      <ContactListTitle>Contacts</ContactListTitle>
      <ContactFilter filter={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
      <GlobalStyle />
    </ContactsLayout>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts);
//       this.setState({ contacts: parsedContacts });
//       return;
//     }
//     this.setState({ contacts: initialContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     const existedContact = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     existedContact
//       ? alert('This contact is already in contacts.')
//       : this.setState(prevState => {
//           return {
//             contacts: [...prevState.contacts, newContact],
//           };
//         });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(
//           contact => contact.id !== contactId
//         ),
//       };
//     });
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <ContactsLayout>
//         <FormTitle>Phonebook</FormTitle>
//         <ContactForm onAddContact={this.addContact} />
//         <ContactListTitle>Contacts</ContactListTitle>
//         <ContactFilter
//           filter={this.state.filter}
//           onChange={this.changeFilter}
//         />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//         <GlobalStyle />
//       </ContactsLayout>
//     );
//   }
// }
