import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
      <section>
        <div className="container-contact bg-grey flex-center">

          <h5 className="font-weight-bold txt-green">location</h5>
          <a className="badge badge-light mb-4" href="#main">tucson, az</a>
        


          <h5 className="font-weight-bold txt-green">online</h5>
          <a className="badge badge-light mb-4" href="https://www.mperalta.com">www.mperalta.com</a>



          <h5 className="font-weight-bold txt-green">mobile</h5>
          <a className="badge badge-light mb-4">(520) 975-0159</a>

          <h5 className="font-weight-bold txt-green">e-mail</h5>
          <a className="badge badge-light mb-4" href="mailto:peraltawave@gmail.com">peraltawave@gmail.com</a>

          <span>
            <a href="https://github.com/peraltawave" target="new"><i className="fab fa-github-alt m-3 fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/mperalta" target="new"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
          </span>
{/* 
          <a className="text-center" href={process.env.PUBLIC_URL+'/assets/CV-OLIVIER-BRETAUD-2018-FR.pdf'} download>
            <h5 className="font-weight-bold mt-2">downloadResume</h5>
          </a> */}
          <a className="text-center" href={'https://www.mperalta.com'} download>
            <h5 className="font-weight-bold mt-2">mperalta.com</h5>
          </a>

        </div>

        <div className="container-interest">
        
          <p>
            <span className="font-weight-bold text-light">Interests</span>
            <br/>
            <span className="font-weight-normal text-light">react / front-end
            <br/>
            athletics / travel / entertainment</span>
          </p>
          <p>
            <span className="font-weight-bold text-light">Languages</span>
            
            <br/>
            <span className="font-weight-normal text-light">English <br /> Spanish</span>
          </p>
        </div>
      </section>
      </ScrollableAnchor>
    )
  }
}
