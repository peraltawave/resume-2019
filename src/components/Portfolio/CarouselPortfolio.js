import React, { Component } from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    src: process.env.PUBLIC_URL+'/assets/img/bicool.png',
    altText: 'Bicool',
    title: 'Bicool',
    description: 'Application web pour la réservation de vélos réalisée en équipe',
    tools: ["Webdesign","Git", "Github", "React", "Bootstrap", "API JC Decaux", "Google Map","méthodologie agile"],
    link: 'https://geoffroy72.github.io/',
    github: 'https://github.com/olivierbretaud/nantes-0918-javascript-easybike'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/green-pocket.PNG',
    altText: 'green-pocket',
    title: 'green-pocket',
    description: "Quizz sur l'impact de nos téléphones sur l'environnement réalisé lors d'un hackathon de 48h",
    tools: ["Webdesign","Vue.js", "Bootstrap", "Animations SVG", "Eco-conception", "méthodologie agile"],
    link: 'http://green-pocket.olivierbretaud.info/',
    github: 'https://github.com/olivierbretaud/green-pocket'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/MoviesAndMe.png',
    altText: 'Movies and me',
    title: 'Movies and me',
    description: 'Application Android pour rechercher des films et gérer une liste de favoris ( projet personnel )',
    tools: ["React-Native", "Composants Android", "Redux", "API REST"],
    link: '',
    github: ''
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/business-player.png',
    altText: 'business-player',
    title: 'business-player',
    description: "Prototype d'une application web destinée à faciliter l'élaboration de business plans (réalisée en équipe)",
    tools: ["Proof of concept", "Git", "React", "Redux", "Bootstrap", "méthodologie agile"],
    link: 'http://business-player.fr/dev/',
    github: 'https://github.com/olivierbretaud/nantes-0918-javascript-businessPlayer'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/un-mome-a-paris.png',
    altText: 'Un-môme-à-Paris',
    title: 'Un môme à Paris',
    description: 'Blog de Photographie réalisé en équipe',
    tools: ["Git","Github", "Bootstrap", "Animations CSS3", "HTML5"],
    link: 'http://un-mome-a-paris.olivierbretaud.info/',
    github: 'https://github.com/olivierbretaud/Un_mome_a_Paris'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/i-pad-my-travels.png',
    altText: 'my-travels',
    title: 'My travels',
    description: "Application web permettant de réaliser des carnets de voyages (projet personnel en cours de réalisation)",
    tools: ["vue.js", "vuetify","leaflet", "nodes.js","Webdesign", "API"],
    link: '',
    github: ''
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/retzvolution.png',
    altText: 'Reztvolution',
    title: 'Retzvolution',
    description: "Site web réalisé pour l'association Retzvolution en 2010 avec le CMS SPIP",
    tools: ["SPIP(CMS)", "CSS3", "HTML", "Webdesign", "Illustration"],
    link: 'http://retzvolution.com/',
    github: ''
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/verts-luisants.png',
    altText: 'verts-Luisants',
    title: 'Verts-Luisants',
    description: "Site Web pour l'association Verts-Luisants",
    tools: ["PLUXML(CMS)", "CSS3", "HTML5", "Webdesign"],
    link: 'http://vertsluisants.fr/',
    github: 'https://github.com/olivierbretaud/Verts-Luisants'
  }
];



export default class CarouselPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className="flex-center">
            <img className="img-fluid-slide" src={item.src} alt={item.altText} />
          </div>
          <div className="info-box">
            <h1 className="text-center txt-green mt-4">{item.title}</h1>
            {item.link !== '' ?
              <p className="text-center txt-grey mb-0">
                <a href={item.link} target="_blank"><i className="fas fa-desktop m-2 fa-lg"></i></a>
                <a href={item.github} target="_blank"><i className="fab fa-github m-2 fa-lg"></i></a>
              </p>
            :
            null }
            <div className="info-item">
              <p className="text-center font-weight-bold txt-grey mt-2 mb-0 info-item-desc">{item.description}</p>
              <p className="text-center">{item.tools.map((tool, index) =>{
                  return (
                    <span className ="badge badge-secondary m-1 bg-green txt-dark-grey" key={index}>{tool}</span>
                  )
              })}</p>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
