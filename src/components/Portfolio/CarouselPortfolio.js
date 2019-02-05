import React, { Component } from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    title: 'newsImage',
    src: process.env.PUBLIC_URL+'/assets/img/newsImage.png',
    altText: 'newsImage',
    description: 'news represented by images',
    tools: ["Webdesign","Git", "Github", "React", "Bootstrap", "Material UI"],
    link: 'https://dry-atoll-82427.herokuapp.com/article',
    github: 'https://github.com/peraltawave/newsimage-react-app-006',
  },
  {
    title: 'prestoSports',
    src: process.env.PUBLIC_URL+'/assets/img/presto-collage-2.png',
    altText: 'presto-redesign',
    description: "rebranding of prestoSports.com",
    tools: ["Webdesign","photoShop", "illustrator", "bootStrap"],
    link: 'http://www.prestosports.com/',
    github: '#portfolio',

  },
  {
    title: 'petFinder',
    src: process.env.PUBLIC_URL+'/assets/img/cv-petfinder-003.png',
    altText: 'petFinder',
    description: 'mobile app to report found animals',
    tools: ["Webdesign","Git", "Github", "React", "Bootstrap", "Semantic UI"],
    link: 'https://www.peraltawave.com/petfinder/index.html',
    github: 'https://github.com/peraltawave/phasma',
  },
  {
    title: 'Moncton Magic',
    src: process.env.PUBLIC_URL+'/assets/img/moncton_magic_001.png',
    altText: 'Magic',
    description: 'canadian professional basketball',
    tools: ["Webdesign","photoShop", "illustrator"],
    link: 'http://www.monctonmagic.ca/landing/index',
    github: '',
  },
  {
    title: 'London Lightning',
    src: process.env.PUBLIC_URL+'/assets/img/london_lightning_001.png',
    altText: 'Lightning',
    description: 'canadian professional basketball',
    tools: ["Webdesign","photoShop", "illustrator"],
    link: 'http://www.lightningbasketball.ca/landing/index',
    github: '',
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
            <h1 className="text-center txt-red mt-4">{item.title}</h1>
            <div className="info-item">
              <p className="text-center font-weight-normal txt-grey mt-2 mb-0 info-item-desc">{item.description}</p>
              <p></p>
              <p className="text-center">{item.tools.map((tool, index) => {
                  return (
                    <span className ="badge badge-secondary m-1 bg-red txt-dark-grey" key={index}>{tool}</span>
                  )
              })}
              </p>
            </div>
            {item.link !== '' ?
              <p className="text-center txt-grey mb-0">
                <a href={item.link} target="new"><i className="fas fa-desktop m-2 fa-lg"></i></a>
                <a href={item.github} target="new"><i className="fab fa-github-alt m-2 fa-lg"></i></a>
              </p>
            :
            null }

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
