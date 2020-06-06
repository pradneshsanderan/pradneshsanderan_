import React, {Component} from 'react';
import {Grid,Cell,Button} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';
import ResumeD from "./my-cv.pdf";

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}> 
                    <div style={{textAlign:'center'}}>
                        <img
                        src ='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Brown'
                        alt="avatar"
                        style={{height:'300px'}}
                        />
                    </div>
                    <h2 style={{paddingTop:'2em'}}> Pradnesh Sanderan</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                    <p>Self-assured computer science student and team leader, currently studying in the University of Edinburgh ,with diverse experience utilizing programming languages 
                        for assignments and projects. Highly trained in various technology environments with fluid understanding of object 
                        oriented programming languages and functional programming languages.</p>
                    <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                    <h5>Country of Residence</h5>
                    <p>Malaysia / United Kingdom</p>
                    <h5>Degree</h5>
                    <p>BSc Computer Science</p>
                    <h5>Objective</h5>
                    <p>To obtain a full time software development position after graduation</p>
                    <h5>email</h5>
                    <p>pradneshsanderan@gmail.com</p>
                     <a href={ResumeD} class="btn-rounded-white" rel="noopener noreferer" target="_blank">
                    <Button variant="outline-dark">View Resume</Button>
                    </a>
                    <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        

                        <Education
                        startYear={2019}
                        endYear={2023}
                        schoolName="The University of Edinburgh"
                        schoolDescription = "This degree is focused on understanding, designing, implementing and using computing systems,
                        ranging in scale and complexity from the tiny components of a single processor to the globe-spanning internet.
                        It also concerns the practical techniques of programming to solve real and difficult problems with links to other subjects,
                        from electronics, physics, mathematics and various others"
                        />

                        <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName="Help Academy"
                        schoolDescription=" Qualification : A-Levels "
                        results="Results : 4A (Mathematics,Physics, Chemistry, Further Mathematics)"
                        
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2018}
                        endYear={2019}
                        jobName="Volunteer Teacher"
                        jobDescription="I volunteered as a teacher at a children's home in Kuala Lumpur, Malaysia.
                         Here, I taught the children, whose ages ranged from 4 to 16 years old, science and English every week."
                        />
                        <Experience 
                        startYear={2016}
                        endYear={2016}
                        jobName="Volunteer at the animal shelter"
                        jobDescription="I volunteered at the SPCA where i had cleaned the cages and kennels of the dogs and cats.
                        I had also given the dogs a bath and fed them"
                        />
                         <Experience 
                        startYear={2013}
                        endYear="Present"
                        jobName="Co-Founder of a Soup Kitchen"
                        jobDescription="In 2013, me and 4 others co-founded a soup kitchen  where  we would hand out food to the homeless 
                        around the Kuala Lumpur City Centre."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                        skill ="Java"
                        progress={70}
                        
                        />
                        <Skills 
                        skill ="Python"
                        progress={70}
                        
                        />
                        <Skills 
                        skill ="Haskell"
                        progress={60}
                        
                        />
                        <Skills 
                        skill ="JavaScript"
                        progress={50}
                        
                        />
                        <Skills 
                        skill ="Lego Robotics"
                        progress={85}
                        
                        />
                        <Skills 
                        skill ="Photoshop"
                        progress={75}
                        
                        />
                        <Skills 
                        skill ="Lightroom"
                        progress={80}
                        
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Languages</h2>
                        <Languages
                        skill="English"
                        progress={95}
                        />
                        <Languages
                        skill="Malay"
                        progress={80}
                        />
                        <Languages
                        skill="Tamil"
                        progress={50}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
