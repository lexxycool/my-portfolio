import React from 'react';
import emailjs from 'emailjs-com';



function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('yahoomail', 'template_j5nbujc', e.target, 'user_IKJvMqVOMifC5E1ldpN7w')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();

            alert('message sent');
    }

    return (

       <div>
            <h3 className='col-6 pt-5 mx-auto'>Let's Work Together</h3>
            <div className='container'>
                <form onSubmit={sendEmail}>
                     <div className='row pt-5  mx-auto'>
                        <div className='col-8 form-group mx-auto'>
                            <input type='text' className='form-control' placeholder='Name' name="name" />
                        </div>
                        <div className='col-8 form-group mx-auto'>
                            <input type='email' className='form-control' placeholder='Email address' name="email" />
                        </div>
                        <div className='col-8 form-group mx-auto'>
                            <input type='text' className='form-control' placeholder='Subject' name="subject" />
                        </div>
                        <div className='col-8 form-group mx-auto'>
                            <textarea className='form-control' id='' cols='30' rows='8' placeholder='your message...' name="message"></textarea>
                        </div>
                        <div className='col-8 pt-3 mx-auto'>
                            <input type='submit' className='btn btn-info' value='Send Message' />
                            <p></p> <p></p>
                        </div>
                    </div>
                </form>
            </div> 
      </div>
    )
}

export default Contact
