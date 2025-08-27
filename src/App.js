import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from "./Components/News";
import Footer from "./Components/Footer";
import {BrowserRouter as Router,Switch,Route,Routes,} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { progress } from 'react-progress-2';

import Loading from "./Loading";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  const Loading = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Secure React App</h1>
        
        <div className="auth-status">
          {isAuthenticated ? (
            <div>
              <Profile />
              <LogoutButton />
            </div>
          ) : (
            <div>
              <p>You are not logged in</p>
              <LoginButton />
            </div>
          )}
        </div>

          <ProtectedRoute>
          <div className="protected-content">
            <h2>🔒 Protected Content</h2>
            <p>This content is only visible to authenticated users!</p>
          </div>
        </ProtectedRoute>
      </header>
    </div>
  );
}
export default  class AppContainer extends  Component {
  apiKey = process.env.REACT_APP_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) =>{
    this.setState({progress:progress});
  };
  render() {
    return (
      <div style={{ backgroundImage: 'linear-gradient(135deg,rgb(66, 150, 240) 0%, #8AF2F2 100%)', minHeight: '100vh', color: '#FFFFFF'}}>
        <Router>
          <Navbar/>
        <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
        />
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country='in' category='General'/>} />
            <Route exact path='/Entertainment' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={5} country='in' category='Entertainment'/>} />
            <Route exact path='/Sports' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={5} country='in' category='Sports'/>} />
            <Route exact path='/World' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="World" pageSize={5} country='in' category='World'/>} />
            <Route exact path='/Business' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="Business" pageSize={5} country='in' category='Business'/>} />
            <Route exact path='/Science' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="Science" pageSize={5} country='in' category='Science'/>} />
            <Route exact path='/Technology' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={5} country='in' category='Technology'/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  }
}



