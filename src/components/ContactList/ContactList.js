import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import ProtoTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contact__item}>
        <ContactItem
          name={name}
          number={number}
          id={id}
          onDelete={() => onDelete(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: ProtoTypes.arrayOf(
    ProtoTypes.shape({ id: ProtoTypes.number.isRequired }),
  ),
};

const mapStateToProps = state => {
  return { contacts: getVisibleContacts(state) };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
