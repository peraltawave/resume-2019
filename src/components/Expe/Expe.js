import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Expe extends Component {


  render() {
    const experiences = [
      {
        date: "2013-2017",
        company: "Newworks",
        place: "Genève(Suisse)",
        position: "Opérateur en impression numérique"
      },
      {
        date: "2007-2013",
        company: "Imprimerie Grand Large",
        place: "Haute-Goulaine(44)",
        position: "Opérateur en impression numérique"
      },
      {
        date: "Juillet 2006",
        company: "Gulfstream communication",
        place: "Nantes(44)",
        position: "Graphiste stagiaire"
      },
      {
        date: "Mai 2005",
        company: "THÉO COMMUNICATION",
        place: "Nantes(44)",
        position: "Graphiste stagiaire"
      },
      {
        date: "Mars 2004",
        company: "TMC",
        place: "Nantes(44)",
        position: "Graphiste stagiaire"
      }
    ]
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'expe'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_exp.svg'} alt="experiences"/>
              </div>
              <h4 className="font-weight-bold mt-2">Mes expériences</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey-op-095">
            <div className="container-date">
              {experiences.map(para => (
              <div className="date-box text-center">
              <span className="font-weight-bold text-light">{para.date}</span>
              <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.company}</h5>
              <span className="font-weight-bold txt-grey">{para.place}</span><br/>
              <span className="font-weight-bold txt-grey">{para.position}</span>
              </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
