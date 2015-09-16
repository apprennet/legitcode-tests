import React from 'react/addons';
let { TestUtils } = React.addons

import {Find, SetState, Simulate} from './middleware'

class Test {

  constructor(component){
    this.component = TestUtils.renderIntoDocument(component)
    this.middleware = []
    this.helpers = []
    return this
  }

  use(callback, data){
    callback.call(this, data)
    return this
  }

  test(callback) {
    callback.call(this, this)
    return this
  }

  //Built in middleware

  find(data){
    Find.call(this, data)
    return this
  }

  setState(data){
    SetState.call(this, data)
    return this
  }

  simulate(data){
    Simulate.call(this, data)
    return this
  }

}

export default function TestWrapper(component){
  return new Test(component)
}
