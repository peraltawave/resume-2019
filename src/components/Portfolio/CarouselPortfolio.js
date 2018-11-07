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
    tools: ["Git", "Github", "React", "Bootstrap", "API JC Decaux", "Google Map","méthodologie agile"],
    link: 'https://geoffroy72.github.io/',
    github: 'https://github.com/olivierbretaud/nantes-0918-javascript-easybike'
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
    description: "Site Web pour l'association Verts-Luisants (en cours de réalisation)",
    tools: ["PLUXML(CMS)", "CSS3", "HTML5", "Webdesign"],
    link: '',
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

            <p className="text-center txt-grey mb-0">
              <a href={item.link}><i className="fas fa-desktop m-3 fa-lg"></i></a>
              <a href={item.link}><i className="fab fa-github m-3 fa-lg"></i></a>
            </p>

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
