import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
// import * as orm from 'typeorm'

let styles = require('./Counter.scss')

const orm = (window as any).typeorm

export interface IProps extends RouteComponentProps<any> {
  increment(): void,
  incrementIfOdd(): void,
  incrementAsync(): void,
  decrement(): void,
  counter: number
}

export class Counter extends React.Component<IProps> {
  async componentDidMount () {
    try {
      const data = {
        name: 'Roman'
      }
      await orm.getRepository('user').save(data)
      const result = await orm.getRepository('user').find()
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    )
  }
}

export default Counter
