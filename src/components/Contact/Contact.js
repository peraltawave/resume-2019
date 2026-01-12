import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {
  render() {

    const stuff = [
      {
        icon: <i className="fas fa-globe icon"></i>,
        title: 'Portfolio',
        location: 'peraltawave pixels',
        link: 'https://www.facebook.com/peraltawavepixels/photos',
        linkname: 'CLICK TO VISIT'
      },
      {
        icon: <i className="fas fa-envelope icon"></i>,
        title: 'E-mail',
        location: 'peraltawave@gmail.com',
        link: 'mailto:peraltawave@gmail.com',
        linkname: 'SEND'
      },
      {
        icon: <i className="fas fa-compass icon"></i>,
        title: 'Location',
        location: 'Tucson, AZ',
        link: 'https://goo.gl/maps/BiZWPuY4A362',
        linkname: 'CLICK FOR MAP'
      },
      {
        icon: <i className="fas fa-mobile-alt icon"></i>,
        title: 'Mobile',
        location: '(520) 975-0159',
        link: 'tel:+15209750159',
        linkname: ''
      },


    ]


    return (
      <ScrollableAnchor id={'contact'}>
        <section className="container-picto-left">
          <ScrollableAnchor id={'contact'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim" src={process.env.PUBLIC_URL + '/assets/img/picto_cercle.svg'} alt="outline" />
                <img className="picto" src={process.env.PUBLIC_URL + '/assets/img/picto_pin.svg'} alt="pin" />
              </div>
              <h4 className="font-weight-bold mt-2">contact</h4>
            </div>
          </ScrollableAnchor>



          <div className="container-content bg-grey-op-095">
            <div className="container-contact">
              {stuff.map((para, index) => (
              <div key={index} className="date-box text-center">

                <span className="font-weight-bold text-light">{para.icon}</span>

                <h5 className="text-uppercase font-weight-bold txt-red mt-2">{para.title}</h5>

                <span className="font-weight-bold txt-grey">{para.location}</span><br/>
                                
                {/* <span className="font-weight-normal txt-grey"><a href={para.link}>{para.linkname}</a></span> */}

                <a className="badge badge-secondary p-1 m-1 bg-red txt-dark-grey" href={para.link} target="new">{para.linkname}</a>

                </div>
              )
              )}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
