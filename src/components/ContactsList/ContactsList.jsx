import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';

import { phonebookReducer } from 'redux/slice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { delContact, getAllContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // console.log(contacts);
  const flteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter)
  );

  return (
    <ContactsListWrapper>
      {flteredContacts.map(contact => (
        <StyledContact key={contact.id}>
          {contact.name}:{contact.phone}
          <DelBtnStyled
            onClick={() => {
              dispatch(delContact(contact.id));
            }}
          >
            Delete
          </DelBtnStyled>
        </StyledContact>
      ))}
    </ContactsListWrapper>
  );
};
