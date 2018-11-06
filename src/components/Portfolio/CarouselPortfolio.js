import React, { Component } from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'Bicool',
    title: 'Bicool',
    description: 'Application de réservation de vélos réalisée en méthodologie agile avec une équipe de 4 personnes',
    tools: ["Git", "React", "Bootstrap", "API JC Decaux", "Google Map"],
    link: 'https://geoffroy72.github.io/',
    github: 'https://github.com/olivierbretaud/nantes-0918-javascript-easybike'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'Un-môme-à-Paris',
    title: 'Un môme à Paris',
    description: 'Blog de Photographie réalisé avec une équipe de 4 personnes',
    tools: ["Git", "Bootstrap", "Animations CSS3", "HTML5"],
    link: 'http://un-mome-a-paris.olivierbretaud.info/',
    github: 'https://github.com/olivierbretaud/Un_mome_a_Paris'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'Reztvolution',
    title: 'retzvolution.com',
    description: 'Site Web réalisé pour association en 2010',
    tools: ["SPIP(CMS)", "CSS3", "HTML", "Webdesign", "Illustration"],
    link: 'http://retzvolution.com/',
    github: 'https://github.com/WildCodeSchool/nantes-0918-javascript-easybike'
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
                    <span class="badge badge-secondary m-2 bg-green txt-dark-grey">{tool}</span>
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
