import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    showFirstNameErr: false,
    showLastNameErro: false,
    firstName: '',
    lastName: '',
    showRegistrationSuccess: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameErr: true})
    }
    if (lastName === '') {
      this.setState({showLastNameErro: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({showRegistrationSuccess: true})
    }
  }

  anotherResponse = () => {
    this.setState({
      showFirstNameErr: false,
      showLastNameErro: false,
      firstName: '',
      lastName: '',
      showRegistrationSuccess: false,
    })
  }

  onchangeFirstName = event => {
    const isShowErrMsg = event.target.value === ''
    this.setState({
      showFirstNameErr: isShowErrMsg,
      firstName: event.target.value,
    })
  }

  onchangeLasttName = event => {
    const isShowErrMsg = event.target.value === ''
    this.setState({
      showLastNameErro: isShowErrMsg,
      lastName: event.target.value,
    })
  }

  renderInputFeilds = () => {
    const {
      showFirstNameErr,
      showLastNameErro,
      showRegistrationSuccess,
    } = this.state

    const showFirstNameErrCss = showFirstNameErr
      ? 'errorCss'
      : 'firstName-input'
    const showLastNameErroCss = showLastNameErro
      ? 'errorCss'
      : 'firstName-input'

    return showRegistrationSuccess ? (
      <div className="registration-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="sumitted-success"> Submitted Successfully </p>
        <button
          type="button"
          className="submit-button"
          onClick={this.anotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    ) : (
      <form onSubmit={this.onSubmitForm} className="form-container">
        <label htmlFor="forFirstName" className="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          id="forFirstName"
          onBlur={this.onchangeFirstName}
          className={showFirstNameErrCss}
          placeholder="First Name"
        />
        {showFirstNameErr && <p className="showFirstNameErr">Required</p>}

        <label htmlFor="forLastName" className="first-name">
          LAST NAME
        </label>
        <input
          type="text"
          id="forLastName"
          onBlur={this.onchangeLasttName}
          className={showLastNameErroCss}
          placeholder="Last Name"
        />
        {showLastNameErro && <p className="showFirstNameErr">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="registrationForm-main-container">
        <h1 className="registration-heading">Registration</h1>
        {this.renderInputFeilds()}
      </div>
    )
  }
}

export default RegistrationForm
