import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Studies extends Component {


  render() {
    const experiences = [
      {
        date: "July 2018 - January 2019",
        diplome: "Full Stack Web Development",
        option: "Javascript / react / express / node",
        place: "University of Arizona",
      },
      {
        date: "1992-1996",
        diplome: "BA Communications",
        option: "Television Production / Spanish",
        place: "Loyola Marymount University",
      }
    ]
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'education'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_etudes.svg'} alt="études"/>
              </div>
              <h4 className="font-weight-bold mt-2">education</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey-op-095">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div className="date-box text-center" key={index}>
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="text-uppercase font-weight-bold txt-red mb-0">{para.diplome}</h5>
                <span className="text-uppercase font-weight-normal text-light">{para.option}</span>
                <h6 className="font-weight-bold text-light">{para.mention}</h6>
                <span className="font-weight-bold txt-grey">{para.place}</span><br/>
              </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
