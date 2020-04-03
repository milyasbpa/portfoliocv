import React, {Component} from 'react';
import '../styles/NowProj.css'

class NowProj extends Component{
    render(){
        return(
            <div class="container6" id="container6">
                <div class="nowProj1"></div>
                <div class="nowProj2">
                    <h2 class="hidden">Other</h2>
                    <h3 class="hidden2">View the Archive</h3>
                    <div class="nowProjKot"></div>
                </div>
                <div class="nowProj3">
                    <h2 class="nowProj3H2">Other Noteworthy Project</h2>
                    <h3 class="nowProj3H3">View the Archive</h3>
                    <div class="nowProjKot"></div>
                </div>
                <div class="nowProj4">
                    <h2 class="hidden">Test</h2>
                    <h3 class="hidden2">View the Archive</h3>
                    <div class="nowProjKot"></div>
                </div>
                <div class="nowProj5"></div>
            </div>
    
        )
    }
}

export default NowProj;