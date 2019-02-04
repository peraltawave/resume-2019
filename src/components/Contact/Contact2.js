import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {
  render() {

    const stuff = [
      {
        location: 'Tucson, AZ',
        icon: 'fas fa-compass icon',
        link: '#',
      }
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
            <div className="container-date">
              {stuff.map((para, index) => (
              <div key={index} className="date-box text-center">
                <div>{para.location}</div>
                <span className="font-weight-bold text-light">{para.icon}</span>
                <h5 className="text-uppercase font-weight-bold txt-red mb-0">{para.link}</h5>
                <span className="font-weight-bold txt-grey">{para.location}</span><br/>
                <span className="font-weight-bold txt-grey">{para.location}</span><br/>
                <span className="font-weight-normal txt-grey"><a href={para.link}>{para.location}</a></span>

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
