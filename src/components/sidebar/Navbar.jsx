import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      window.sessionStorage.removeItem('access-token');
      window.sessionStorage.removeItem('id');

      toast('Log Out Successful');
      setTimeout(() => {
        window.location.assign('/');
      }, 1600);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar-container">
      <Nav className="above-nav" variant="pills" defaultActiveKey="/home">
        <Nav.Item className="ml-auto">
          <Link to="/login" onClick={handleSignOut} className="signout-link">
            <FiLogOut className="signout-icon" size={24} />
            Sign out
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
