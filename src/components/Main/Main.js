import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Main extends Component {
  render() {
    return (
      <ScrollableAnchor id={'main'}>
        <div className="bg-grey-op-09">
          <div className="container-main flex-center">
            <div className="container-profile">
              <div className="rounded-circle circle-profile flex-center">
              <img className="rounded-circle profile-picture" src={process.env.PUBLIC_URL+'/assets/img/photo-cv.jpg'} alt="Miguel Peralta"/>
              </div>
              <h1 className="txt-red pt-2">miguel peralta</h1>

            <span className="text-center font-weight-normal txt-grey mt-1 mb-0 info-item-desc">front-end designer and developer</span>


            <a className="badge badge-secondary p-1 m-3 bg-red txt-dark-grey" href="assets/miguelPeralta_cv_2019.05.pdf" target="new">download resume</a>



            </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}
