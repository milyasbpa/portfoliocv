import React, {Component} from 'react';
import '../styles/Abt.css';
import kotak from '../img/kotak.png'

class Abt extends Component{
    render(){
        return(
            <div class="container3" id="container3">
                <div class="abt1"></div>
                <div class="abt2">
                    <h1 class="abtH1">About Me</h1>
                    <h4>
                        Hello! I'm Bas, a Geophysical Engineer based in Bandung, West Java who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                    <br/>Shortly after graduating from <a href="https://www.itb.ac.id/">Bandung Institute of Technology</a> , I learn web developer and I found on a wide variety of interesting and meaningful projects on a daily basis.
                    <br/>Here are a few technologies I've been working with recently:
                    </h4>
                    <ul>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>HTML dan (S)CSS</li>
                        <li>Vue</li>
                        <li>Laravel</li>
                    </ul>    
                </div>
                <div class="abt3">
                    <div class="abt3Img">
                        <img src={kotak} alt=""/>
                    </div>
                </div>
                <div class="abt4"></div>
            </div>
        )
    }
}

export default Abt