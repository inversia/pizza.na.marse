import assert from 'assert'
import { classList } from './util'

global.log = require ('ololog').noLocate

describe ('React Pizza', () => {

    it ('implements classList() correctly', () => {

        const result = classList ({ 'size-switch': 1, 'active': false,
                                    'clicked': true, 'foo': undefined, 'bar': null, 'qux': 0 })

        assert.equal (result, 'size-switch clicked')
    })
})
