import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';

import {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
} from 'redux/selectors';
import { delContact } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // console.log(contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsListWrapper>
      {filteredContacts.map(contact => (
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