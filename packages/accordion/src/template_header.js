// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import { bind } from '@t7/utils'
import styles from './index.css'

// Define class.
class AccordionHeader extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Click handler.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    const index = this.props.index
    const label = this.props.label

    handleClick(e, index, label)
  }

  // Render method.
  render () {
    const ariaControls = this.props.ariaControls
    const ariaExpanded = this.props.ariaExpanded
    const ariaSelected = this.props.ariaSelected

    const className = this.props.className
    const id = this.props.id
    const label = this.props.label

    const handleClick = this.handleClick

    return (
      <dt
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-hidden={!ariaSelected}
        aria-selected={ariaSelected}
        className={className}
        id={id}
        key={id}
        role='tab'
        tabIndex='0'

        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <span
          aria-hidden='true'
          className={styles.icon}
        />
        {label}
      </dt>
    )
  }
}

// Validation.
AccordionHeader.propTypes = {
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaSelected: PropTypes.bool,

  className: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  label: PropTypes.string,

  handleClick: PropTypes.func
}

// Defaults.
AccordionHeader.defaultProps = {
  ariaExpanded: false,
  ariaSelected: false
}

// Export.
export default AccordionHeader
