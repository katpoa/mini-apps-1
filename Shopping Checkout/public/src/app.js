// import React from 'react';
// import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home'
    };
    this.checkoutClick = this.checkoutClick.bind(this);
  }

  componentDidMount() {}

  checkoutClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Login'
    });
  }

  render() {
    const current = this.state.current;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Shopping Card Checkout"), current === 'Login' ? /*#__PURE__*/React.createElement(Login, null) : current === 'Address' ? /*#__PURE__*/React.createElement(Address, null) : /*#__PURE__*/React.createElement(CreditCard, null), /*#__PURE__*/React.createElement("button", {
      onClick: this.checkoutClick
    }, "Checkout"));
  }

}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Login'
    };
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Address'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Full Name:", /*#__PURE__*/React.createElement("input", {
      type: "text"
    })), /*#__PURE__*/React.createElement("input", null, "Email"), /*#__PURE__*/React.createElement("input", null, "Password"), /*#__PURE__*/React.createElement("button", {
      onClick: this.nextClick
    }, "Next"));
  }

}

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Address'
    };
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'CreditCard'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", null, "Address line 1"), /*#__PURE__*/React.createElement("input", null, "Address line 2"), /*#__PURE__*/React.createElement("input", null, "City"), /*#__PURE__*/React.createElement("input", null, "State"), /*#__PURE__*/React.createElement("input", null, "Zip code"), /*#__PURE__*/React.createElement("input", null, "Phone number"), /*#__PURE__*/React.createElement("button", null, "Next"));
  }

}

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'CreditCard'
    };
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(e) {
    e.preventDefault();
    this.setState({
      current: 'Confirmation'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", null, "Credit card #"), /*#__PURE__*/React.createElement("input", null, "Expiry date"), /*#__PURE__*/React.createElement("input", null, "CVV"), /*#__PURE__*/React.createElement("input", null, "Billing zip code"), /*#__PURE__*/React.createElement("button", null, "Next"));
  }

}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Confirmation'
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("button", null, "Purchase");
  }

}

const List = ({
  info
}) => /*#__PURE__*/React.createElement("ul", null, info.forEach(item => /*#__PURE__*/React.createElement("li", null, item)));

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnQiLCJjaGVja291dENsaWNrIiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJMb2dpbiIsIm5leHRDbGljayIsIkFkZHJlc3MiLCJDcmVkaXRDYXJkIiwiQ29uZmlybWF0aW9uIiwiTGlzdCIsImluZm8iLCJmb3JFYWNoIiwiaXRlbSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFO0FBREUsS0FBYjtBQUdBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDRDs7QUFFREMsRUFBQUEsaUJBQWlCLEdBQUcsQ0FFbkI7O0FBRURGLEVBQUFBLGFBQWEsQ0FBQ0csQ0FBRCxFQUFJO0FBQ2ZBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaTixNQUFBQSxPQUFPLEVBQUU7QUFERyxLQUFkO0FBR0Q7O0FBRURPLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU1QLE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE9BQTNCO0FBQ0Esd0JBQ0UsOENBQ0UseURBREYsRUFFSUEsT0FBTyxLQUFLLE9BQVosZ0JBQ0Ysb0JBQUMsS0FBRCxPQURFLEdBRUFBLE9BQU8sS0FBSyxTQUFaLGdCQUNBLG9CQUFDLE9B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QUFMLENBQWFDLElBQUksaUJBQ2hCLGdDQUFLQSxJQUFMLENBREQsQ0FESCxDQURGOztBQVNBQyxRQUFRLENBQUNWLE1BQVQsZUFDRSxvQkFBQyxHQUFELE9BREYsRUFDV1csUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBRFgiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6ICdob21lJ1xuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0Q2xpY2sgPSB0aGlzLmNoZWNrb3V0Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjaGVja291dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiAnTG9naW4nXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2hvcHBpbmcgQ2FyZCBDaGVja291dDwvaDE+XG4gICAgICAgIHsgY3VycmVudCA9PT0gJ0xvZ2luJyA/XG4gICAgICAgIDxMb2dpbiAvPlxuICAgICAgICA6IGN1cnJlbnQgPT09ICdBZGRyZXNzJyA/XG4gICAgICAgICAgPEFkZHJlc3MgLz5cbiAgICAgICAgOiA8Q3JlZGl0Q2FyZCAvPlxuICAgICAgICB9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jaGVja291dENsaWNrfT5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6ICdMb2dpbidcbiAgICB9XG4gICAgdGhpcy5uZXh0Q2xpY2sgPSB0aGlzLm5leHRDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiAnQWRkcmVzcydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEZ1bGwgTmFtZTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQ+RW1haWw8L2lucHV0PlxuICAgICAgICA8aW5wdXQ+UGFzc3dvcmQ8L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubmV4dENsaWNrfT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiAnQWRkcmVzcydcbiAgICB9XG4gICAgdGhpcy5uZXh0Q2xpY2sgPSB0aGlzLm5leHRDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiAnQ3JlZGl0Q2FyZCdcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0PkFkZHJlc3MgbGluZSAxPC9pbnB1dD5cbiAgICAgICAgPGlucHV0PkFkZHJlc3MgbGluZSAyPC9pbnB1dD5cbiAgICAgICAgPGlucHV0PkNpdHk8L2lucHV0PlxuICAgICAgICA8aW5wdXQ+U3RhdGU8L2lucHV0PlxuICAgICAgICA8aW5wdXQ+WmlwIGNvZGU8L2lucHV0PlxuICAgICAgICA8aW5wdXQ+UGhvbmUgbnVtYmVyPC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbj5OZXh0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiAnQ3JlZGl0Q2FyZCdcbiAgICB9XG4gICAgdGhpcy5uZXh0Q2xpY2sgPSB0aGlzLm5leHRDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiAnQ29uZmlybWF0aW9uJ1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQ+Q3JlZGl0IGNhcmQgIzwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dD5FeHBpcnkgZGF0ZTwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dD5DVlY8L2lucHV0PlxuICAgICAgICA8aW5wdXQ+QmlsbGluZyB6aXAgY29kZTwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiAnQ29uZmlybWF0aW9uJ1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxidXR0b24+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgTGlzdCA9ICh7aW5mb30pID0+IChcbiAgPHVsPlxuICAgIHtpbmZvLmZvckVhY2goaXRlbSA9PiAoXG4gICAgICA8bGk+e2l0ZW19PC9saT5cbiAgICApKX1cbiAgPC91bD5cbilcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKVxuIl19