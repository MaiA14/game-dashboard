import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class HomePage extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the game portal,{' '}
            <Link to="/dashboard">click here to see the dashboard</Link>
          </p>
          <button className="btn btn-primary btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            If you are a member, please get your credentials from your
            supervisor
          </p>
          <button className="btn btn-primary btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Game Portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);