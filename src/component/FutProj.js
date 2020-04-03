import React, {Component} from 'react';
import '../styles/FutProj.css';
import brit from '../img/brit.PNG';

class FutProj extends Component{
    render(){
        return(
            <div class="container5" id="container5">
                <div class="futProj1"></div>
                    <div class="futProj2">
                        <h1 class="futProj2H1">Something I've Built</h1>
                        <img src={brit} alt=""/>
                    </div>
                    <div class="futProj3">
                        <h5 class="futProj3Satu">Featured Project</h5>
                        <h3 class="futProj3Dua">OctoProfile</h3>
                        <div class="kotak">
                            A nicer look at your Github Profile and repo stats. Includes data cisualization of your top languages, starred repositories, and sort through your top repos by number of stars, forks,
                        </div>
                        <div class="tools">
                            <span>Next JS</span>
                            <span>Vue</span>
                            <span>Node JS</span>
                        </div>
                        <div class="site">
                            <span><i class="fa fa-github"></i></span>
                            <span><i class="material-icons">folder_open</i>
                            </span>
                        </div>
                    </div>
                <div class="futProj4"></div>
            </div>
        )
    }
}

export default FutProj