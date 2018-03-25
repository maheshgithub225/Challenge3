import React from 'react';

const MainContent = () => {
	return (

		 <div class="main">
            <div class="section text-center">
                <div id="name"> 
                    <h4 >Enter your Nickname</h4>
                    <br>
                
                    <div align="center">
                        <div class="col-sm-3">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Say your 'Name'">
                                <br>
                            </div>

                        </div>
                         <button id="question2" class="btn btn-primary btn-round">Say 'Next'</button>
                    </div>
                    </div>
                    <div id="challenge" align="center"> 
                        <h4>Did you like coding challenge #3?</h4>
                        <br>
                          <div class="col-sm-3">
                             <div class="form-group">
                                <input type="text" class="form-control" placeholder="Say 'Yes' or 'No'">
                                <br>
                                </div>
                            </div>
                             <button id="question3" class="btn btn-primary btn-round">Say 'Next'</button>
                    </div>
                

                <div id = "rating" align="center"> 
                    <h4>How do you rate this website?</h4>
                    <br>
                        <div class="rating">
                            <input type="radio" name="rating" value="0" checked /><span id="hide">☆</span>
                            <input type="radio" name="rating" value="1" /><span>☆</span>
                            <input type="radio" name="rating" value="2" /><span>☆</span>
                            <input type="radio" name="rating" value="3" /><span>☆</span>
                            <input type="radio" name="rating" value="4" /><span>☆</span>
                            <input type="radio" name="rating" value="5" /><span>☆</span>
                        </div>
                    <br>
                <button id="done" class="btn btn-success btn-round">Say 'I am done'</button>
                
                </div>
                <h3 id="feedback">Thank you for the feedback!</h3>
                <p id="display"></p>
                <script type="text/javascript" src="src/watson-speech.min.js"></script>
                <script type="text/javascript" src="src/controls.js"></script>
            </div>
        </div>


		);

}
export default MainContent;