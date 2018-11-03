import React, { Component } from 'react'


export default class Main extends Component {
  render() {
    return (
      <div className="bg-grey-op-09 main">
        <div className="container-main flex-center">
          <div className="container-profil">
            <div className="rounded-circle circle-profil flex-center">
            <img className="rounded-circle profil-picture" src={process.env.PUBLIC_URL+'/assets/img/photo-cv.jpg'} alt="Olivier Bretaud"/>
            </div>
            <h1 className="txt-green pt-2">OLIVIER BRETAUD</h1>
          <h2 className="txt-white text-center pt-2">Développeur front-end <br/>en formation</h2>
          </div>
        </div>
      </div>
    )
  }
}
