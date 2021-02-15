import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 
import { render } from 'react-dom';

function Footer1() {
    return (

        <div class="FOO" style={{textAlign:'center',backgroundColor:'dimgray',marginTop:'5%'}}>
            <footer class="footer">
                <div>
                    <a href="https://coreui.io">Clothes Store</a>
                    <span className="sss">&copy; 2020.</span>
                </div>
                <div class="ml-auto">
                    <span className="sss">Powered by</span>
                    <a href="https://coreui.io">Clothes</a>
                </div>
            </footer>
        </div>
    )
}
export default Footer1;