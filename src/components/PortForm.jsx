// contenxt
import { useContext } from 'react';
import { PortContext } from '../context/portContext';

// Components
import WidgetPoint from '../widgets/WidgetPoint';

const PortForm = () => {

  const {theme} = useContext(PortContext);

  return (
    <section className={`port-form-wrapper ${theme && 'formWrapperDark'}`} id='Contact'>
        <div className='port-form-left'>
            <h2 className='form-left-title'>Contact<WidgetPoint/></h2>
            <p className='form-left-desc'>you can contact me whenever you want :)</p>
            <div className='port-form-left-contact-widgets-wrapper'>
              <div className="port-form-left-social">
                <a 
                href="https://github.com/JoaquinRodriguez04"
                className='social-link'
                target='BLANK'
                >
                  <i className={`bi bi-github ${theme && 'socialDark'}`}></i>
                </a>
                <a 
                href="https://www.linkedin.com/in/joaquinrodriguez2004webdeveloper/"
                target='BLANK'>
                  <i className={`bi bi-linkedin ${theme && 'socialDark'}`}></i>
                </a>
              </div>
              <span className='port-form-left-email'>
                <i className="bi bi-reply-fill iconReply"></i>
                joaquindeveloperweb@gmail.com
              </span>
            </div>
        </div>
        <div className='port-form-right'>
            <form className={`form-wrapper ${theme && 'formDark'}`}>
              <label htmlFor="">Name</label>
              <input 
                className={`form-input form-name-before ${theme && 'formFieldsDark'}`} 
                type="text" 
                placeholder='Name'
                data-desc-input='write your name' />
              <label htmlFor="">Email</label>
              <input 
                className={`form-input form-email-before ${theme && 'formFieldsDark'}`} 
                type="text" 
                placeholder='Email'
                data-desc-input='write your email' />
              <label htmlFor="">Message</label>
              <textarea 
                className={`form-area form-desc-before ${theme && 'formFieldsDark'}`} 
                placeholder='Message'
                data-desc-input='write your message'></textarea>
              <button className='form-btn'>send</button>
            </form>
        </div>
        <div className='port-form-mobile'>
          <div className="port-form-left-social">
            <a 
            href="https://github.com/JoaquinRodriguez04"
            className='social-link'
            target='BLANK'
            >
              <i className={`bi bi-github ${theme && 'socialDark'}`}></i>
            </a>
            <a 
            href="https://www.linkedin.com/in/joaquinrodriguez2004webdeveloper/"
            target='BLANK'>
              <i className={`bi bi-linkedin ${theme && 'socialDark'}`}></i>
            </a>
          </div>
          <span className='port-form-left-email'>
            <i className="bi bi-reply-fill iconReply"></i>
            joaquindeveloperweb@gmail.com
          </span> 
        </div>
    </section>
  )
};

export default PortForm;