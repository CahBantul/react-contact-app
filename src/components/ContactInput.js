import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
    };
  }

  onNameChangeEventHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  onNameTagEventHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} />
        <input type="text" placeholder="Tag" value={this.state.tag} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
