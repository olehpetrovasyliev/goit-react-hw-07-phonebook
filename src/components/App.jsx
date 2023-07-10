import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { getAllContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  // const contactsTest = dispatch(getAllContacts());
  // console.log(contactsTest);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      {contacts.length === 0 ? (
        <h2>No contacts yet</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />

          <ContactsList />
        </>
      )}
    </>
  );
};
