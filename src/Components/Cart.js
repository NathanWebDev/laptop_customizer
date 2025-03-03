import React, {Component} from 'react'
import Summary from './Summary';
import Total from './Total';


export default class Cart extends Component {
    render() {
      return (
        <section className="main__summary">
            < Summary selected={this.props.selected} />
            < Total selected={this.props.selected} />
        </section>
      )
    }
}