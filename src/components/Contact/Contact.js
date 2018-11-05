import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
      <section>
        <div className="container-contact bg-grey-op-09 flex-center">

          <h5 className="font-weight-bold txt-green">Adresse</h5>
          <p className="txt-white text-center mb-4">
            1, allée de la bédière<br/>
            74240 GAILLARD
          </p>

          <h5 className="font-weight-bold txt-green">Téléphone</h5>
          <a className="badge badge-light mb-4" href="tel:+33632321639">06 32 32 16 39</a>

          <h5 className="font-weight-bold txt-green">E-mail</h5>
          <a className="badge badge-light mb-4" href="mailto:olivierbretaud@hotmail.fr">olivierbretaud@hotmail.fr</a>

          <span>
            <a href="https://github.com/olivierbretaud"><i className="fab fa-github m-3 fa-2x"></i></a>
            <a href="https://www.behance.net/olivierbre460e"><i className="fab fa-behance-square m-3 fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/olivier-bretaud/"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
          </span>

          <a className="text-center" href={process.env.PUBLIC_URL+'/assets/CV-OLIVIER-BRETAUD-2018-FR.pdf'} download>
            <h5 className="font-weight-bold mt-2">Téléchargez mon cv</h5>
          </a>

        </div>

        <div className="container-interest">
        
          <p>
            <span className="font-weight-bold">Centres d'intérêts</span><br/>
            randonnée, voyage,<br/>dessin, design graphique
          </p>
          <p>
            <span className="font-weight-bold">Langues</span><br/>
            Français (langue maternelle)<br/>
            Anglais (bonne connaissance)<br/>
            Espagnol (niveau élémentaire)
          </p>
        </div>
      </section>
      </ScrollableAnchor>
    )
  }
}
