import React from 'react';
import "./Applied.css"


const Applied = () => {
    return (
        <div>
                <div className='apply-button'>
                    <button>Apply with Linkedin</button>
                </div>

                <div className='from-area'>
                    <div className='apply-position'>
                        <h3>Apply for position</h3>
                    </div>
                    <div >
                            <form className='fromText'>
                                    <label>Name<span>*</span></label>
                                    <input className='input-area' type="name" placeholder='Type your full name' />
                                    <br />
                                    <label>Email<span>*</span></label>
                                    <input className='input-area' type="name" placeholder='Type a valid email' />
                                    <br />
                                    <label>Phone<span>*</span></label>
                                    <input className='input-area' type="name" placeholder='Type a valid number e.g 01812345678' />
                                    <br />
                                    <label>Linkedin<span>*</span></label>
                                    <input className='input-area' type="name" placeholder='Paste your Linkedin Profile' />                    
                            </form>
                            
                        </div>
                        <div className='container'>
                            <p className='title'>
                                Select your skills<span>*</span> (You have to select a minimum of one skill to submit)
                            </p>  
                        </div>
                        <div className='inputs'>
                            <input  type="checkbox" value="PHP" /> PHP
                            <br />
                            <input  type="checkbox" value="Python" /> Python
                            <br />
                            <input  type="checkbox" value="SQL" /> SQL
                            <br />
                            <input  type="checkbox" value="CSS" /> CSS
                            <br />
                            <input  type="checkbox" value="HTML5" /> HTML5
                            <br />
                            <input  type="checkbox" value="JavaScript" /> JavaScript
                            <br />
                            <input  type="checkbox" value="React" /> React
                            <br />
                            
                        </div>
                    <div>
                        
                    </div>
                    <div>
                        <div className='upload-file'>
                            <p>CV(pdf format)<span>*</span><span>
                            <input className='upload-cv' type="file"/>
                            <label htmlFor="Upload CV"></label>
                            </span></p>
                            <h6>(File size limit is <span>2MB</span>)</h6>
                        </div>
                        
                        <div className='previewButton'>
                            <button className='preview'>Preview</button>
                            <h6>All fields marked with an asteric(*) are mendatory</h6>
                        </div>
                            
                        
                        <div className='file-area'>
                            <iframe src="https://drive.google.com/file/d/1Omq_DrFg5RqBc1aZFJW8XNGw5wxvnvQR/preview" width="640" height="480" allow="autoplay"></iframe>
                        </div>

                        
                    </div>
                    <div>

                    </div>
                        

                </div>
                
                
            
            

        </div>

        
    );
};

export default Applied;