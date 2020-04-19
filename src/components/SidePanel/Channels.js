import React from "react";
import { Menu, Icon,Modal, Form, Input } from "semantic-ui-react";

class Channels extends React.Component {
  state = {
    channels: [],
    modal
  };

  closeModal = () => this.state

  render() {
    const { channels,modal } = this.setState({modal:false});

    return (
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({channels.length}) <Icon name="add" />
        </Menu.Item>
        {/* Channels */}
      </Menu.Menu>
  
      // Add Channel Modal
      <Modal basic open={modal} onClose={this.closeModal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form></Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Channels;
