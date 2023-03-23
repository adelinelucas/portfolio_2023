import React from 'react';
import './style.css';
import data from '../../datas/qualitesDefauts.json';
import DisplayAboutInfos from '../DisplayAboutInfos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareFull, faCheck,faBullseye } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    const {qualites, defauts, attentes} = data;
    return (
        <section className='about__section'>
            <header className='about__section__header'>
                    <h2>Hello world ;)</h2>
                    <i>A travers cette page, je vous propose de faire connaissance, d'en savoir un peu plus sur les raisons de ma reconversion et comment je pourrais m'intégrer dans votre équipe! (et oui, je n'oublie pas l'essentiel) </i>
                    <p>inscruter photo</p>
            </header>
            <nav className='about__section__nav'>
                <ul>
                    <li><a href="#avantReconversion"><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>Parcours avant reconversion</a></li>
                    <li><a href="#paroursReconversion"><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>Parcours de reconversion</a></li>
                    <li><a href="#integrationEquipe"><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>Qualités - Défauts - Attente en entreprise</a></li>
                    <li><a href="#traitspersonnalites"><FontAwesomeIcon icon={faSquare} color="#B78DF2" />Et sinon dans la vie</a></li>
                </ul>
            </nav>
            <article id="avantReconversion">
                <h3>👩‍🎓 Par où commencer pour présenter mon parcours un peu atypique.</h3>
                <p>J'ai d'abord réaliser une formation universitaire en Droit, spécialisé droit public. J'ai adoré ma formation, les matières étaient passionnantes mais je n'arrivais pas à me projeter dans un futur professionnel. J'ai fait une année en Erasmus, prendre le large, bon ok l'Espagne c'est pas si loin que ca! Cette année d'Erasmus ma fait prendre en maturité et m'a permis d'éveiller une consience écologique. A mon retour c'est décidé, je suivrai un parcours droit environnement.</p>
                <p>J'ai suivi un master en Droit de l'Environnement à l'Université de Nantes. A l'issue de ce master j'ai fais un service civique dans l'administration, pour la mise en place d'une collecte de déchets. Et paf, j'ai eu un déclic je souhaitais travailler dans le domaine des déchets. J'ai rejoins l'équipe des Joyeux Recycleurs en tant que chargée de dévéloppement, les missions étaient trés diverses : gestion d'une équipe de 13 collecteurs, gestion des plannings, responsable du suivi client. J'ai énormément appris durant cette experience.</p><p>Souhaitant rester dans l'environnement, j'ai rejoint l'équipe de Economie d'énergie, une entreprise qui assure la gestion des certificats d'économie d'énergie pour ses clients.</p><p>J'ai été assistante grands comptes, puis Responsable Grand Comptes, cette expérience m'a permis d'être au coeur de l'entreprise et d'échanger régulièrment avec l'équipe projet, en charge de la gestion des plateformes web pour les bénéficiaires des Certificats d'Economie d'Energie.</p>
                <br/>
                <p>Cette expérience m'a fait prendre conscience que j'avais besoin d'un métier autonome où je puisse être en controle. J'ai engagé ue réflexion sur ce que j'attendais d'un travail. J'avais besoin d'un métier où : </p>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} color="#B78DF2"/>je peux être <em>autonome</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#B78DF2"/>j'ai la possibilité d'être en <em>apprentissage constant</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#B78DF2"/>un métier <em>créatif</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#B78DF2"/>un métier qui me permette dans un <em>temps raisonnable</em> de me reconvertir.</li>
                </ul>
            </article>
            <article id="paroursReconversion">
                <h3>💻 ⌨️ Mon parcours de reconversion ! </h3>
                <p>J'ai tout d'abord réalisé une formation sur 15 jours pour confirmer mon attrait pour ce nouveau métier que je découvrais. On a pu découvrir HTML, CSS et wordpress, le projet final était un projet ou l'on devait refaire un site wordpress pour un auto-entrepreneur, ça a vraiment été le déclic </p>
                <p>J'ai poursuivi avec une formation de 4 mois avec l'organisme <strong>Women in Digital</strong> et l'école <strong>Web Force 3</strong>, formation hyper instense ou l'on a pu découvrir : HTML/ CSS/ JS/ JQuery/ Ajax/ Angular/ PHP/ Symfony/...</p><p>La formation était vraiment complète, mais découvrant tout juste le développement web je souhaitais consolider ces acquis tout en continuant à apprendre.</p>
                <p>J'ai réalisé une année d'alternance avec l'école <strong>3WAcademy</strong>, le format était de 3 semaines en entreprise et 1 semaine d'école</p><p>Cette année d'alternance a été un vrai challenge et les permiers mois ont été une vraie confrontation à la réalité du métier de développeur et m'a permis de mesure que je n'étais qu'au tout début de cette apprentissage. </p>
                <p>J'ai été accueilli dans une petite équipe de 3 personnes : 1 chargé de projet, un développeur et un alternant de 2ème année. J'ai travaillé en JS et PHP principalement, sur la création d'outil interne pour automatiser certains process:
                    <ul>
                        <li><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>générateur de landings page, <a href="#">&lt;a&gt; voir le code&lt;/a&gt;</a></li>
                        <li><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>générateur d'offre, <a href="#">&lt;a&gt; voir le code&lt;/a&gt;</a></li>
                        <li><FontAwesomeIcon icon={faSquare} color="#B78DF2"/>un outil pour gérer l'association des offres aux landings et gérer leur activation <a href="#">&lt;a&gt; voir le code&lt;/a&gt;</a>.</li>
                    </ul>
                </p>
                <br/>
                <p>Cette année d'alternance a été tout aussi intense, si les permiers mois ont vraiment été compliqué, j'ai continué à travaillé les cours et les notions les weekends, j'ai toujours cherché à progresser</p>

                <p>Forte de cette année d'alternance, j'espère pouvoir intégrer au mieux dans les missions qui me seront confiées.</p>
            </article>
            <article id="integrationEquipe">
                <h3>💼 💻 🚀 Pourrais-je m'intégrer dans votre équipe ?</h3>
                <p>Mon profil vous intéresses ? Et oui c'est normal une junior motivée à apprendre, je vous comprends! Mais pas si vite, c'est important de savoir si je peux vraiment convenir à votre équipe; aussi je vous propose d'anticiper sur les fameux "3 qualités /3 défauts" des entretiens.</p>
                <p>L'idée est que je puisse également vous dire ce que j'attends d'une entreprise, et oui une relation c'est 50/50! :) Et un employé.e qui se sent bien dans son environnement pro c'est toujours gagnant pour l'entreprise.</p>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#B78DF2"/>Qualités</h4>
                    <div className='about__section__infosContent'>
                    {
                        qualites.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div> 
                </div>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#B78DF2"/>Axes de progression</h4>
                    <div className='about__section__infosContent'>
                    {
                        defauts.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#B78DF2"/>Ce que j'attends de ma future équipe</h4>
                    <div className='about__section__infosContent'>
                    {
                        attentes.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div>
                </div>
            </article>
            <article id="traitspersonnalites">
                <h3>🤠 ☕ ☕ 💃 Et à part le boulot ? </h3>
                <p>Et oui, le travail le point principal mais qu'est ce que je peux raconter d'autres à la machine à café!</p>
                <p>Le café ? Moi, non j'en bois jamais, non non je ne suis pas surnomée par mes proches "cafetière", c'est une erreur ! Mis à part le café, j'apprécie bien évidemment les afterwork, les parties de babyfoot (bien que mon niveau soit proche de néan) et les karaokés endiablés!</p>
                <p>Autre point notable, j'aime beaucoup travailler, cela m'aide comme beaucoup à me focus, pour cela j'écoute beaucoup de musique latine et je me dandine parfois sur ma chaise, mais promis aucun son ne sort de ma voix!</p>
                <p>Ces deux dernières années ont quand même tournées autour du dev, je reste une personne qui s'intéresse à tout. Mon rituel du matin c'est d'écouter les infos à la radio ce me donne souvent de quoi débrieffer à la machine à café. Bon comme je me prépare en meme temps il se peut que je n'ai qu'une moitié d'info!</p>
                <p>J'adore également cuisiner, je m'essaie au pain maison, creme maison, même si je ne saurais expliquer que j'ai des phases ou tout ce que je cuisine est loupé.</p>
                <p>Autre grande passion, le bricolage et l'upcycling, j'ai rénové en parti mon appartement, et j'adore particulièrement rénonver des meubles, poncer, repeindre, changer leur fonction initiale.</p>
                <p>Et le gaming ?, euh, je ne suis pas une grande gameuse même si je commence à m'y mettre ; mais pour donner une idée du niveau, je suis le genre de personne qui bouge la tête et la manette quand il faut tourner sur Mario Kart !</p>
            </article>
        </section>
    );
};

export default About;