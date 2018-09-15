import React from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends React.Component {
    state = {
      isOpen: true
    }

    toggleOpen = () =>
      this.setState((state) => ({
        isOpen: !state.isOpen
      }))

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
