import React, {useState, useEffect} from 'react';
import './style.css';
import emailjs from 'emailjs-com';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';
import { IoIosWarning } from "react-icons/io";

const Contact = () => {
    const {languageEng} = useLanguageContext();

    const [formSubmited, setFormSubmited]= useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [formSumitedMessage, setFormSubmitedMessage] = useState('')

    const [contactInputDatas,setContactInputDatas ] = useState({
        test:'truc',
        lastname:{
            label :'Nom',
            placeholder:"Votre nom",
            title:'Champ obligatoire pour envoyer le formulaire de contact',
        },
        email:{
            label : 'Email',
            placeholder :"email@gmail.com",
            title : 'Champ obligatoire pour envoyer le formulaire de contact',
        },
        phone:{
            label : 'Téléphone',
            placeholder :"01 01 01 01 01",
            title : 'Champ obligatoire pour envoyer le formulaire de contact',
        },
        title:{
            label : 'Sujet du message',
            placeholder :"Votre nom",
            title : 'Objet de votre message',
        },
        content:{
            label : 'Contenu de votre message',
            placeholder :"",
            title : 'Contenu obligatoire pour envoyer le formulaire de contact',
        },
        button: 'Envoyer',
        confirmMessage : {
            successMessage :['Votre mail a bien été énvoyé! Merci.', 'Entrons également en contact sur'],
            errorMessage : ["Une erreur est survenue lors de l'envoi du formulaire, contactez-moi sur"]
        }
    });

    // changement des élement si langue anglaise
    useEffect(()=>{ 
        if(languageEng) setContactInputDatas(
            {
                lastname: {
                    label: 'Last Name',
                    placeholder: 'Your last name',
                    title: 'Mandatory field to send the contact form',
                },
                email: {
                    label: 'Email',
                    placeholder: 'email@gmail.com',
                    title: 'Mandatory field to send the contact form',
                },
                phone: {
                    label: 'Phone',
                    placeholder: '01 01 01 01 01',
                    title: 'Mandatory field to send the contact form',
                },
                title: {
                    label: 'Message Subject',
                    placeholder: 'Your subject',
                    title: 'Subject of your message',
                },
                content: {
                    label: 'Message Content',
                    placeholder: '',
                    title: 'Mandatory content to send the contact form',
                },
                button: 'Send',
                confirmMessage: {
                    successMessage: ['Your email has been sent successfully! Thank you.', 'Let\'s also connect on'],
                    errorMessage: ["An error occurred while submitting the form, please contact me at"]
                }
            }
        )
    },[languageEng])
    
    const [formData, setFormData] = useState({
        lastname: '',
        email: '',
        phone: '',
        title: '',
        content: '',
    });

    const [errors, setErrors] = useState({
        lastname: '',
        email: '',
        phone: '',
        title: '',
        content: '',
    });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value});
        // setErrors({...errors,[name]: ''});
        setContactInputDatas({...contactInputDatas, 
            [name.dataValue] : value,
            [name.error] : '',
        })
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        formData.phone = (formData.phone).replace(/\s/g,"");
        submitMessage()
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
      const validatePhone = (phone) => {
        const regex = /^(\+\d{10,12}|\d{10,12})$/;
        return regex.test(phone.trim());
      };

    const submitMessage = async() =>{
        // Validation des champs
        let newErrors = {};
        if(languageEng){
            newErrors = {
                lastname: formData.lastname.trim() === '' ? 'Name is required.' : '',
                email:
                formData.email.trim() === ''
                    ? 'Email is required.'
                    : !validateEmail(formData.email)
                    ? 'Please enter a valid email address.'
                    : '',
                phone:
                formData.phone.trim() === ''
                    ? 'Phone number is required.'
                    : !validatePhone(formData.phone)
                    ? 'Please enter a valid phone number.'
                    : '',
                title: formData.title.trim() === '' ? 'The message title is required' : '',
                content:
                formData.content.trim() === ''
                    ? 'The message content is required.'
                    : formData.content.length < 5
                    ? 'The message content must be at least 5 characters long.'
                    : '',
            };
        }else{
            newErrors = {
                lastname: formData.lastname.trim() === '' ? 'Le nom est requis.' : '',
                email:
                formData.email.trim() === ''
                    ? 'L\'email est requis.'
                    : !validateEmail(formData.email)
                    ? 'Veuillez entrer une adresse email valide.'
                    : '',
                phone:
                formData.phone.trim() === ''
                    ? 'Le numéro de téléphone est requis.'
                    : !validatePhone(formData.phone)
                    ? 'Veuillez entrer un numéro de téléphone valide.'
                    : '',
                title: formData.title.trim() === '' ? 'Le titre du message est requis.' : '',
                content:
                formData.content.trim() === ''
                    ? 'Le contenu du message est requis.'
                    : formData.content.length < 5
                    ? 'Le contenu du message doit contenir au moins 5 caractères.'
                    : '',
            };
        }
        setErrors(newErrors);
        if (Object.values(newErrors).every((error) => error === '')) {

            emailjs.send('service_4ejylwo', 'template_4895oxe', formData, 'lpg5Kq3KbN46sKY3t')
            .then((response) => {
              console.log('E-mail envoyé avec succès:', response);
              setFormSubmitedMessage("")
              setSuccessMessage(true)
              setFormSubmited(true)
            })
            .catch((error) => {
              console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
              setFormSubmitedMessage("")
              setSuccessMessage(false)
              setFormSubmited(true)
            });
        }
    }

    useEffect(()=>{
       
    },[formSubmited])
    
    return (
        <article className=''>
            {
                formSubmited ? 
                <>
                    {successMessage ? 
                        <div className='page__salesforce-profil-contact-form-message'>
                            <p className='sucess-message'>
                                {contactInputDatas.confirmMessage.successMessage[0]}
                            </p>
                            <p>{contactInputDatas.confirmMessage.successMessage[1]} <a href='https://www.linkedin.com/in/adeline-lucas-web-dev/' target='_blank'>LinkedIn</a></p>
                            <figure>
                                <iframe src="https://giphy.com/embed/7bumBQjZX8BgaE2zjv" width="280" height="280" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                            </figure>
                        </div>
                        :
                        <div className='page__salesforce-profil-contact-form-message'>
                            <p className='error-message'>{contactInputDatas.confirmMessage.errorMessage[0]} <a href='https://www.linkedin.com/in/adeline-lucas-web-dev/' target='_blank'>LinkedIn</a>.</p>
                            <figure>
                                <iframe src="https://giphy.com/embed/q1I4fUo5cYyKQFQKef"  width="260" height="380" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                            </figure>
                        </div>
                    }
                </>
                :
                <>
                    <h2 className=''>{languageEng ? 'Contact me' : 'Me contacter'}</h2>
                    <form onSubmit={handleSubmit} className=''>
                        <div className=''>
                            <label 
                                className=''
                                title={contactInputDatas.lastname.title}
                            >
                                {contactInputDatas.lastname.label}* :
                            </label>
                            <input
                                className=''
                                type="text"
                                name="lastname"
                                value={contactInputDatas.lastname.dataValue}
                                onChange={handleInputChange}
                                required
                                placeholder={contactInputDatas.lastname.placeholder}
                            />
                            <span className="error">{errors.lastname ? <IoIosWarning /> + errors.lastname : ''}</span>
                        </div>

                        <div className=''>
                            <label 
                                className=''
                                title={contactInputDatas.email.title}
                            >
                               {contactInputDatas.email.label}* :
                            </label>
                            <input
                                className=''
                                type="email"
                                name="email"
                                value={contactInputDatas.email.dataValue}
                                onChange={handleInputChange}
                                required
                                placeholder={contactInputDatas.email.placeholder}
                            />
                            <span className="error">{errors.email? <IoIosWarning /> + errors.email : ''}</span>
                        </div>

                        
                        <div className=''>
                            <label 
                                className=''
                                title={contactInputDatas.phone.title}
                            >
                                {contactInputDatas.phone.label}* :
                            </label>
                            <input
                                className=''
                                type="tel"
                                name="phone"
                                value={contactInputDatas.phone.dataValue}
                                onChange={handleInputChange}
                                required
                                placeholder={contactInputDatas.phone.placeholder}
                            />
                            <span className="error">{errors.phone ? <IoIosWarning /> + errors.phone : ''}</span>
                        </div>

                        <div className=''>
                            <label 
                                className=''
                                title={contactInputDatas.title.title}
                            >{contactInputDatas.title.label}* :</label>
                            <input
                                className=''
                                type="text"
                                name="title"
                                value={contactInputDatas.title.dataValue}
                                onChange={handleInputChange}
                                required
                                placeholder={contactInputDatas.title.placeholder}
                            />
                            <span className="error">{errors.title ? <IoIosWarning /> + errors.title :''}</span>
                        </div>

                        <div className=''>
                            <label 
                                className=''
                                title={contactInputDatas.content.title}
                            >{contactInputDatas.content.label}* : </label>
                            <textarea
                                className=''
                                name="content"
                                value={contactInputDatas.content.dataValue}
                                onChange={handleInputChange}
                                required
                                rows="5"
                            />
                            <span className="error">{errors.content ? <IoIosWarning /> + errors.content : ''}</span>
                        </div>

                        <button className='' type="submit">{contactInputDatas.button}</button>
                    </form>
                </>
            }
        </article>
    );
};

export default Contact;