import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class MyFormObj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
    };
  }

  Onchange = () => {
    this.setState({ show: true });
  };

  ButtonClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Button variant="dark" onClick={this.Onchange}>
          Open
        </Button>
        <Modal
          show={this.state.show}
          animation={true}
          size="md"
          className=""
          shadow-lg
          border
        >
          <Modal.Header className="bg-danger text-white text-center py-1">
            <Modal.Title className="text-center">
              <h5>Modal title</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0 border">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer className="py-1 d-flex justify-content-center">
            <div>
              <Button variant="outline-dark" onClick={this.ButtonClose}>
                Cancel
              </Button>
            </div>
            <div>
              <Button variant="outline-danger" className="mx-2 px-3">
                Delete
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyFormObj;
