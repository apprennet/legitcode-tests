import Test from '../src/legit-tests'
import { expect } from 'chai'

import { TestComponent } from './components'

describe('Shallow Render', () => {

  it('should render the component', () => {
    Test(<TestComponent test="wow"/>, {shallow: true})
    .test(function() {
      expect(this.instance).to.be.ok
    })
  })

})
