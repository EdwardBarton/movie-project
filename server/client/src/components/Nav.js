import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";
import * as actions from '../actions';

const Nav = ({ authenticated, email, signout, watchListCount }) => {
  //TODO: fetch watchList from API when this loads

  const handleSignOutClick = () => {
    signout();
  };

  const renderLinks = () => {
    if (authenticated) {
      return (
        <React.Fragment>
          <li>{email}</li>
          <li>My Watch List: {watchListCount}</li>
          <li><a href="#" onClick={handleSignOutClick}>Sign Out</a></li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </React.Fragment>
      );
    }
  }


  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/">
        </NavLink>
      </div>
      <NavUl>
        <li>
          <NavLink to="/">
            Discover
          </NavLink>
        </li>
        {renderLinks()}
      </NavUl>
    </NavContainer>
  );
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    email: state.auth.email,
    watchListCount: state.watch_list.length
  };
}

export default connect(mapStateToProps, actions)(Nav);

const NavContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: hsl(0, 0%, 13%);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 1.5em;
  #logo {
    position: relative;
    float: left;
    width: 150px;
    height: auto;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;

  li:first-child {
    float: left;
  }

  li {
    margin-left: 0.8em;
    padding: 0.5em;
  }

  li a {
    color: whitesmoke;
  }
`;
