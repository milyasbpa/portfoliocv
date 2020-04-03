import React, {Component} from 'react';
import '../styles/Header.css'

class Header extends Component {
    render() {
        return(
            <div class="container1">
                <div class="nav1">h1</div>
                <div class="nav2">
                    <a class="navclass navclass1" href="#container3">About</a>
                    <a class="navclass navclass2" href="#container4">Experience</a>
                    <a class="navclass navclass3" href="#container5">Work</a>
                    <a class="navclass navclass4" href="#container7">Contact</a>
                    <a class="navclass navclass5" href="https://drive.google.com/file/d/1yGbg7AAuBUjftmlTR5_oAS_L9VedHrPx/view?usp=sharing">Resume</a>
                </div>
            </div>
        )
    }
}

export default Header