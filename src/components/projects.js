import React, {Component} from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{
   constructor(props){
       super(props);
       this.state={activeTab:0} ;
   } 
   toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            {/* sudoku 2*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    Sudoku-Solver

                </CardTitle>
                <CardText>
                A Program that is able to solve sudoku puzzles that have been input
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/sudoku-solver" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* fox and hound 3*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    The Fox and the Hound Game

                </CardTitle>
                <CardText>
                    a porgram that allows you to play the fox and the hound game with another.
                    (code available upon request)
                </CardText>
                <CardActions border>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* InSightt 5*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    InSight

                </CardTitle>
                <CardText>
                An application that  curates the most sustainable recreational activities that tourists can get in their vicinity, considering the weather conditions!
                 We aim to make this the only app tourists will ever need.
                </CardText>
                <CardActions border>
                <a href = "https://github.com/Steven-Chang1114/inSight" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* textBook*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://www.freelancinggig.com/blog/wp-content/uploads/2017/10/Python-vs-Java-1280x720.png) center /cover'}}>
                  Textbook Study Assistant

                </CardTitle>
                <CardText>
                A Study Assistant that scans an image for words related to a subject and then searches the web for information and materials related
                to that word.The text is then returned and synthesised to audio.
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/Textbook-Study-Assistant" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            </div>
            
        )
    } else if(this.state.activeTab===1){
        return(
            <div className="projects-grid">
                
                   {/* email 1*/}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                   Email Administration App

                </CardTitle>
                <CardText>
                a program that creates email addresses for new employees in a company with randomly generated passwords
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/email-administration-app" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* sudoku 2*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    Sudoku-Solver

                </CardTitle>
                <CardText>
                A Program that is able to solve sudoku puzzles that have been input
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/sudoku-solver" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* fox and hound 3*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    The Fox and the Hound Game

                </CardTitle>
                <CardText>
                    a porgram that allows you to play the fox and the hound game with another.
                    (code available upon request)
                </CardText>
                <CardActions border>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* InSightt 5*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg) center /cover'}}>
                    InSight

                </CardTitle>
                <CardText>
                An application that  curates the most sustainable recreational activities that tourists can get in their vicinity, considering the weather conditions!
                 We aim to make this the only app tourists will ever need.
                </CardText>
                <CardActions border>
                <a href = "https://github.com/Steven-Chang1114/inSight" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card> 
            </div>
        )
    } else if(this.state.activeTab===2){
        return(
            <div className="projects-grid">
                
            </div>
        )
    } else if(this.state.activeTab===3){
        return(
            <div className="projects-grid">
                
            {/* tic tac 4*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://ml7a1cnkmo5m.i.optimole.com/6IH-QQ-zCN84owO/w:650/h:433/q:auto/https://www.dev-cafe.org/wp-content/uploads/2018/08/python-logo-3.6.gif) center /cover'}}>
                    Tic Tac Toe Game

                </CardTitle>
                <CardText>
                program that allows 2 people to play a game of tic tac toe on and it displays who has won or if it is a tie
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/Tic-Tac-Toe-game" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            {/* textBook*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://www.freelancinggig.com/blog/wp-content/uploads/2017/10/Python-vs-Java-1280x720.png) center /cover'}}>
                  Textbook Study Assistant

                </CardTitle>
                <CardText>
                A Study Assistant that scans an image for words related to a subject and then searches the web for information and materials related
                to that word.The text is then returned and synthesised to audio.
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/Textbook-Study-Assistant" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
                
            </div>
        )
    } else if(this.state.activeTab===4){
        return(
            <div className="projects-grid">
                {/* textBook*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style = {{color:'#fff',height:'176px', 
                background : 'url(https://www.freelancinggig.com/blog/wp-content/uploads/2017/10/Python-vs-Java-1280x720.png) center /cover'}}>
                  Textbook Study Assistant

                </CardTitle>
                <CardText>
                A Study Assistant that scans an image for words related to a subject and then searches the web for information and materials related
                to that word.The text is then returned and synthesised to audio.
                </CardText>
                <CardActions border>
                <a href = "https://github.com/pradneshsanderan/Textbook-Study-Assistant" rel="noopener noreferer" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                    <Button colored>LiveDemo</Button>

                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>
            </div>
        )
    }
       
   }

   
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})}ripple>
                    <Tab>Highlights</Tab>
                    <Tab>Java</Tab>
                    <Tab>Haskell</Tab>
                    <Tab>Python</Tab>
                    <Tab>JavaScript</Tab>

                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;