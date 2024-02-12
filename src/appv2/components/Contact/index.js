import React, {useState, useEffect} from 'react';
import { IoIosInformationCircle } from "react-icons/io";
import './style.css';

const Contact = () => {

    const [formSubmited, setFormSubmited]= useState(false)
    const [formSumitedMessage, setFormSubmitedMessage] = useState('')
    // const url = "https://mo2i-back.onrender.com/message/";
    const url = "";
    // Votre mail a bien été soumis! Nous vous recontacterons.
    // Une erreur est survenue, veuillez nous contacter par téléphone ou par mail pour toute demande de contact. 

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
        setFormData({...formData,[name]: value,
        });
        setErrors({...errors,[name]: ''});
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
        const newErrors = {
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
  
        setErrors(newErrors);
        if (Object.values(newErrors).every((error) => error === '')) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({...formData}) 
                })
                .then((response) => {
                    console.log(response)
                    if(response.status >= 200 ||response.status < 300) setFormSubmitedMessage("Votre mail a bien été énvoyé! Merci.")
                    else if(response.status >= 400) {
                        setFormSubmitedMessage("Une erreur est survenue lors de l'envoi du formulaire, contactez-moi sur <a href='https://www.linkedin.com/in/adeline-lucas-web-dev/' target='_blank'>LinkedIn</a>.")
                    }
                    else {
                        setFormSubmitedMessage("Une erreur est survenue lors de l'envoi du formulaire, contactez-moi sur <a href='https://www.linkedin.com/in/adeline-lucas-web-dev/' target='_blank'>LinkedIn</a>.")
                    }
                    setFormSubmited(true)
                })
                .catch((err) => {
                    console.log(err.message)
                    setFormSubmitedMessage("Une erreur est survenue lors de l'envoi du formulaire, contactez-moi sur <a href='https://www.linkedin.com/in/adeline-lucas-web-dev/' target='_blank'>LinkedIn</a>.")
                })
        }
    }

    useEffect(()=>{
       
    },[formSubmited])
    
    return (
        <article className=''>
            {
                formSubmited ? 
                <h2 className=''>{formSumitedMessage}</h2>
                :
                <>
                    <h2 className=''>Me contacter</h2>
                    <form onSubmit={handleSubmit} className=''>
                        <div className=''>
                            <label 
                                className=''
                                title="Champ obligatoire pour envoyer le formulaire de contact"
                            >
                                Nom* :
                            </label>
                            <input
                                className=''
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                required
                                placeholder='Votre nom'
                            />
                        </div>
                        <span className="error">{errors.lastname}</span>
                        <div className=''>
                            <label 
                                className=''
                                title="Champ obligatoire pour envoyer le formulaire de contact"
                            >
                                Email* :
                            </label>
                            <input
                                className=''
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder='email@gmail.com'
                            />
                        </div>
                        <span className="error">{errors.email}</span>

                        
                        <div className=''>
                            <label 
                                className=''
                                title="Champ obligatoire pour envoyer le formulaire de contact"
                            >
                                Téléphone* :
                            </label>
                            <input
                                className=''
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder='01 01 01 01 01'
                            />
                        </div>
                        <span className="error">{errors.phone}</span>

                        <div className=''>
                            <label 
                                className=''
                                title="Champ obligatoire pour envoyer le formulaire de contact"
                            >Sujet du message* :</label>
                            <input
                                className=''
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                placeholder='Sujet de votre demande'
                            />
                        </div>
                        <span className="error">{errors.title}</span>

                        <div className=''>
                            <label 
                                className=''
                                title="Champ obligatoire pour envoyer le formulaire de contact"
                            >Contenu de votre message* : </label>
                            <textarea
                                className=''
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                required
                                rows="5"
                            />
                        </div>
                        <span className="error">{errors.content}</span>

                        <button className='' type="submit">Envoyer</button>
                    </form>
                </>
            }
        </article>
    );
};

export default Contact;