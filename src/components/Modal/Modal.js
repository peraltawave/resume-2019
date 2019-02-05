/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    const stuff2 = [
      {
        buttonLabel: 'juan',
        modalcontent2: 'one upsie'
      },
      {
        buttonLabel: 'dos',
        modalcontent2: 'two daisy'
      },
      {
        buttonLabel: 'three',
        modalcontent2: 'three joger'
      },
      {
        buttonLabel: '4',
        modalcontent2: 'four ma'
      }





    ]



    return (
      <div>
        

        {stuff2.map((para2, index) => (
          <div key={index}>

<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                {para2.modalcontent2}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>

            {/* <span className="font-weight-bold text-light">{para2.icon}</span>

                <h5 className="text-uppercase font-weight-bold txt-red mt-2">{para2.title}</h5>

                <span className="font-weight-bold txt-grey">{para2.location} asdf</span><br/> */}

            {/* <span className="font-weight-normal txt-grey"><a href={para.link}>{para.linkname}</a></span> */}
            {/* <a className="badge badge-light mt-2" href={para.link}>{para.linkname}</a> */}

          </div>
        )
        )}




      </div>

    );

  }

}

export default ModalExample;