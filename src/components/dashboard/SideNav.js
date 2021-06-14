import React, { Component, useState } from 'react'
import "./sidebar.css"
import "../../materialize/css/materialize.min.css"
import braininhand from "../../images/braininhand.jpg"

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar__title">
          <div className="sidebar__img">
              <img src={ braininhand } alt="image" />
              <h1>Dashboard</h1>
          </div>
              <div>
                <i className="material-icons" id="sidebarIcon">close</i>
              </div>
      </div>

      <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i className="material-icons">home</i>
            <a href="#">Home</a>
          </div>
          <h2>DATA</h2>
          <div className="sidebar__link">
            <i className="material-icons">folder</i>
            <a href="#">Patient Folder</a>
          </div>
          <div className="sidebar__link">
            <i className="material-icons">folder_shared</i>
            <a href="#">Patient Folder</a>
          </div>
      </div>
    </div>
    // <div>
    //   <nav>

    //   </nav>
    //   <ul id="slide-out" className="sidenav">
    //     <li>
    //       <div className="user-view">
    //         <div className="background">
    //           <img src={braininhand} />
    //         </div>
    //         <a href="#user"><img className="circle" src={braininhand} /></a>
    //         <a href="#name"><span className="white-text name">Malik Aziz</span></a>
    //         <a href="#name"><span className="white-text email">malikaziz4u@gmail.com</span></a>
    //       </div>
    //     </li>
    //     <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    //     <li><a href="#!">Second Link</a></li>
    //     <li><div className="divider"></div></li>
    //     <li><a className="subheader">Subheader</a></li>
    //     <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
    //   </ul>
    //   <a href="#" data-target="slide-out" class="sidenav-trigger"><i className="material-icons">menu</i></a>
    // </div>
  )
}

export default Sidebar
