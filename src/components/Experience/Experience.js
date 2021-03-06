import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Experience extends Component {




  render() {

    const experiences = [
      {
        img: <img src={process.env.PUBLIC_URL+'/assets/img/logo_presto_200.png'} alt="PrestoSports"/>,
        date: "2007-2017",
        company: "PrestoSports, Inc.",
        place: "Rockville, MD",
        position: "Creative Director",
        link: 'http://www.prestosports.com/'
      },
      {
        img: <img src={process.env.PUBLIC_URL+'/assets/img/logo_cnet_200x200.png'} alt="CNET Networks"/>,
        date: "1999-2001",
        company: "CNET Networks",
        place: "Miami, FL",
        position: "Art Director",
        link: 'http://www.cnet.com/'
      },
      {
        img: <img src={process.env.PUBLIC_URL+'/assets/img/logo_yahoo_200x200.png'} alt="Yahoo Music"/>,
        date: "1997-1999",
        company: "Yahoo! Music",
        place: "Los Angeles, CA",
        position: "Sr. Graphic Designer",
        link: 'https://www.yahoo.com/entertainment/music/'

      }
    ]
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'experience'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_exp.svg'} alt="experience"/>
              </div>
              <h4 className="font-weight-bold mt-2">experience</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey-op-09">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div key={index} className="date-box text-center">
                <div><a href={para.link}>{para.img}</a></div>
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="text-uppercase font-weight-bold txt-red mb-0">{para.company}</h5>
                <span className="font-weight-bold txt-grey">{para.position}</span><br/>
                <span className="font-weight-normal txt-grey">{para.place}</span><br/>
                </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
