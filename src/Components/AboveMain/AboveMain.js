import React from 'react';

var recongnizeMic = require('watson-speech/speech-to-text/recognize-microphone');
class AboveMain extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	onLoad(){

    fetch('https://challenge3-survey.mybluemix.net/api/speech-to-text/token')
 	 .then(function(response)  {
   	   return response.text();
	  }).then( (token) => {
  	  console.log("token:" , token)
   	 var stream = recognizeMic({
        token: token,
        objectMode: true, // send objects instead of text
        extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
        format: false // optional - performs basic formatting on the results such as capitals an periods
    });
    stream.on('data', (data) => {
      this.setState({
        text: data.alternatives[0].transcript
      })

      var txt = JSON.stringify(this.state.text);
      if (txt.includes("Facebook") || txt.includes("facebook")){
                window.open("https://www.facebook.com/CreativeTim") 
            } else if (txt.includes("Github") || txt.includes("get hub")){
                window.open("https://www.github.com/CreativeTimOfficial/paper-kit");
            } else if (txt.includes("Instagram") || txt.includes("instagram")){
                window.open("https://www.instagram.com/CreativeTimOfficial");
            
            } 
      if(txt.includes("Ready") || txt.includes("ready"))
      {
        {this.bottom()}
      }else if(txt.includes("Next") || txt.includes("next") || txt.includes("ext"))
      {
        {this.nextquestion()}
      }else if(txt.includes("Done") || txt.includes("done"))
      {
        {this.done()}
      }

    });
    stream.on('error', function(err) {
        console.log(err);
    });
  }).catch(function(error) {
          console.log(error);
  });

    render(){
    return(
   <div class="wrapper">
        <div class="page-header section-dark" style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg')">
            <div class="filter"></div>
    		<div class="content-center">
    			<div class="container">
    				<div class="title-brand">
    					<h1 class="presentation-title">Quick Survey?</h1>
    					<div class="fog-low">
    						<img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="">
    					</div>
    					<div class="fog-low right">
    						<img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="">
    					</div>
    				</div>

    				<h2 class="presentation-subtitle text-center">Say 'Ready' to get started</h2>
    			</div>
    		</div>
            <div class="moving-clouds" style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); ">

            </div>
    	</div>
    </div>
        );
	}
}

export default AboveMain;

