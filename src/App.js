import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { fetchContacts } from './redux/contacts-operations';
import { getLoading } from './redux/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h3>Loading ...</h3>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
