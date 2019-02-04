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



          {stuff.map((para, index) => (
            <div key={index} >

 



              <div className="container-content bg-grey-op-095">
                <div className="skills-container">
                  <div className="logo-skill flex-center">
                    <i className="fas fa-compass icon"></i>
                    <span className="font-weight-bold txt-grey">{para.link}</span>
                    <div className="text-icon font-weight-bold">LOCATION</div>
                    <div className="text-icon font-weight-normal">Tucson, AZ</div>
                  </div>

                  <div className="logo-skill flex-center">
                    <i className="fas fa-globe icon"></i>
                    <div className="text-icon font-weight-bold">ONLINE</div>
                    <div className="text-icon font-weight-normal">www.mperalta.com</div>
                  </div>


                  <div className="logo-skill flex-center">
                    <i className="fas fa-mobile-alt icon"></i>
                    <div className="text-icon font-weight-bold">MOBILE</div>
                    <div className="text-icon font-weight-normal">(520) 975-0159</div>
                  </div>


                  <div className="logo-skill flex-center">
                    <i className="fas fa-envelope icon"></i>
                    <div className="text-icon font-weight-bold">E-MAIL</div>
                    <div className="text-icon font-weight-normal">peraltawave@gmail.com</div>
                  </div>
                </div>
              </div>



            </div>
          )
          )}


        </section>
      </ScrollableAnchor>
    )
  }
}
