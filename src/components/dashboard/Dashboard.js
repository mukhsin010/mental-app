import React, { Component } from 'react'
import TopNav from "./TopNav"
import SideNav from "./SideNav"
import axios from 'axios'

export class Dashboard extends Component {
    

    render() {
        if(this.state.user) {
            <h3>HI {this.state.user.full_name}</h3>
        }
        return (
            <div>
                <TopNav />
                <SideNav />
            </div>
        )
    }
}

export default Dashboard
