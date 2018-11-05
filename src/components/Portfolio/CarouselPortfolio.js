import React, { Component } from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'bicool',
    title: 'Bicool',
    link: 'https://geoffroy72.github.io/',
    github: 'https://github.com/WildCodeSchool/nantes-0918-javascript-easybike'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'bicool',
    title: 'Bicool'
  },
  {
    src: process.env.PUBLIC_URL+'/assets/img/iphone-bicool.png',
    altText: 'bicool',
    title: 'Bicool'
  }
];



export default class CarouselPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
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

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item}
        >
          <div className="flex-center">
            <img className="img-fluid-slide" src={item.src} alt={item.altText} />
          </div>
          <h1 className="text-center txt-green mt-4">{item.title}</h1>
          <h2 className="text-center txt-grey">
            <a href={item.link}><i className="fas fa-desktop m-3 fa-lg"></i></a>
            <i className="fa fa-info-circle m-3 fa-lg"></i>
            <a href={item.link}><i className="fab fa-github m-3 fa-lg"></i></a>
          </h2>
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
