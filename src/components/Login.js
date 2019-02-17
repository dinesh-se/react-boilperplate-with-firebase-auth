import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

export const Login = ({ startLogin }) => (
  <div className="box-layout">
    <section className="box-layout__box">
      <h1 className="box-layout__title">App Title</h1>
      <p>Tagline for app</p>
      <button
        className="button"
        onClick={startLogin}
      >
        Login with Google
      </button>
    </section>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);