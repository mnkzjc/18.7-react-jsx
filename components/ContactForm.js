import React from 'react';

  var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className={'contactForm'}>
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
          <input type={'email'} placeholder={'Email'} value={this.props.contact.email}></input>
          <button type={'submit'}>Dodaj Kontakt</button>
        </form>
      )
    },
  })

  export default ContactForm;