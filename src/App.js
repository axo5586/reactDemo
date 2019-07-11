import React from 'react';
import './App.css';

/*function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello.
        </p>
       
      </header>
    </div>
  );
}*/


class LogoClass extends React.Component 
{
  render() 
  {
    const logo = (
      <img 
        src="logo.png" 
        alt="Core Net Global Logo" 
    />
    );

    return(
      <div>
      {logo}
      </div> )
  }
}

//fontawesome icons

let calendar = <i className="fa fa-calendar-o fa-8x" onClick= {()=>{alert('clicked')}} aria-hidden="true"></i>
let directory = <i className="fa fa-address-book-o fa-8x" onClick= {()=>{alert('clicked')}} aria-hidden="true"></i>
let resources = <i className="fas fa-book-open fa-8x" onClick= {()=>{alert('clicked')}} aria-hidden="true"></i>
let about = <i className="fa fa-exclamation fa-8x" onClick= {()=>{alert('clicked')}} aria-hidden="true"></i>


//setting up classes for all 4 interactable elements
//calendar / events ---------------------------------------------------------
class CalendarClass extends React.Component 
{
  render() 
  {
    let icon = calendar;
    return(
      <div>
      {icon}
      <h3>Calendar/Events</h3>
      </div> )
  }
}

//member directory -----------------------------------------------------------
class MemberClass extends React.Component 
{
  render() 
  {
    let icon = directory;
    return(
      <div>
      {icon}
      <h3>Member Directory</h3>
      </div> )
  }
}

//member resources ----------------------------------------------------------
class ResourcesClass extends React.Component 
{
  render() 
  {
    let icon = resources;
    return(
      <div>
      {icon}
      <h3>Member Resources</h3>
      </div> )
  }
}
//about -------------------------------------------------------------------------
class AboutClass extends React.Component 
{
  render() 
  {
    let icon = about;
    return(
      <div>
      {icon}
      <h3>About</h3>
      </div> )
  }
}

 /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
 </a> */

 export 
 {
   LogoClass,
   CalendarClass,
   MemberClass,
   ResourcesClass,
   AboutClass,
 }


 