// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'home'
    }
    this.checkoutClick = this.checkoutClick.bind(this);
  }

  componentDidMount() {

  }

  checkoutClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Login'
    })
  }

  render() {
    const current = this.state.current;
    return (
      <div>
        <h1>Shopping Card Checkout</h1>
        { current === 'Login' ?
        <Login />
        : current === 'Address' ?
          <Address />
        : <CreditCard />
        }
        <button onClick={this.checkoutClick}>
          Checkout
        </button>
      </div>
    )
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'Login'
    }
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Address'
    })
  }

  render() {
    return (
      <form>
        <label>
          Full Name:
        <input type="text"/>
        </label>
        <input>Email</input>
        <input>Password</input>
        <button onClick={this.nextClick}>Next</button>
      </form>
    )
  }
}

class Address extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'Address'
    }
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'CreditCard'
    })
  }

  render() {
    return (
      <form>
        <input>Address line 1</input>
        <input>Address line 2</input>
        <input>City</input>
        <input>State</input>
        <input>Zip code</input>
        <input>Phone number</input>
        <button>Next</button>
      </form>
    )
  }
}

class CreditCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'CreditCard'
    }
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Confirmation'
    })
  }

  render() {
    return (
      <form>
        <input>Credit card #</input>
        <input>Expiry date</input>
        <input>CVV</input>
        <input>Billing zip code</input>
        <button>Next</button>
      </form>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'Confirmation'
    }

  }

  render() {
    return(
      <button>Purchase</button>
    )
  }
}

const List = ({info}) => (
  <ul>
    {info.forEach(item => (
      <li>{item}</li>
    ))}
  </ul>
)


ReactDOM.render(
  <App />, document.getElementById('app')
)
