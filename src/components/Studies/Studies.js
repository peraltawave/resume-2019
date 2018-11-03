import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Studies extends Component {


  render() {
    const experiences = [
      {
        date: "Septembre 2018 - Février 2019",
        diplome: "Développement Web et Mobile",
        option: "Javascript/react/nodejs",
        place: "Wild Code School - Nantes",
      },
      {
        date: "2004-2006",
        diplome: "BTS Communication Visuelle",
        option: "option multimédia",
        place: "Lycée Le Paraclet - Quimper",
      },
      {
        date: "2002-2004",
        diplome: "BAC PRO Artisanat et Métiers d’Art",
        option: "option communication graphique",
        mention: "mention bien",
        place: "Lycée Saint-Pierre La Joliverie - St-Sébastien",
      },
      {
        date: "2000-2002",
        diplome: "CAP Dessinateur d’exécution",
        option: "option communication graphique",
        place: "Lycée Saint-Pierre La Joliverie - St-Sébastien",
      }
    ]
    return (
      
        <section className="container-picto-left">
          <ScrollableAnchor id={'studies'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_etudes.svg'} alt="études"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mes études</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey">
            <div className="container-date">
              {experiences.map(para => (
              <div className="date-box text-center">
              <span className="font-weight-bold text-light">{para.date}</span>
              <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.diplome}</h5>
              <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.option}</h5>
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
