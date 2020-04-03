import React, {Component} from 'react';
import '../styles/Int.css'

class Int extends Component{
    render() {
        return(
            <div class="container2" id="container2">
                <div class="int1"></div>
                <div class="int2">
                    <h1 class="intTl1">Hi, my name is</h1>
                    <h1 class="intTl2">Ilyas Bashirah</h1>
                    <h1 class="intTl3">I build things for Web</h1>
                    <h2 class="intTl4">I'm a software developer based in Bandung, West Java specializing in building (and ocasionally designing) exceptional, high-quality websites and applications.</h2>
                    <button class="intTl5" type="click">Get In Touch</button>
                </div>
                <div class="int3"></div>
            </div>
        )
    }
}

export default Int