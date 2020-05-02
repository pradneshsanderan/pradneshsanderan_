import React, {Component} from 'react';
import { Grid,Cell } from 'react-mdl';
import Imge from "./Background.png";

class Landing extends Component{
    render(){
        return(
            <div style ={{width:'100%',margin:'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col ={12}>
                        <img 
                        src = {Imge}
                        alt = "avatar"
                        className="avatar-img"
                        />
                        <hr className="space"/>

                        <div className="banner-text">
                            <h1>PRADNESH SANDERAN</h1>
                            <h2>Computer Science Major</h2>

                            <hr/>
                            <p>HTML/CSS | Java | Haskell | Python | JavaScript | Lego Robotics</p>
                            <div className = "social-links">
                                {/* LinkedIn */}
                             <a href = "https://www.linkedin.com/in/pradnesh-sanderan-70b24b19a/" rel="noopener noreferer" target="_blank">
                                 <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>   

                             {/* Github */}
                             <a href = "https://github.com/pradneshsanderan" rel="noopener noreferer" target="_blank">
                                 <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            
                            {/* DevPost */}
                            <a href = "https://devpost.com/pradneshsanderan?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" rel="noopener noreferer" target="_blank">
                                 <i className="fa fa-code" aria-hidden="true" />
                            </a>

                            </div>
  
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;