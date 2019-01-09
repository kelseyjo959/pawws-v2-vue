import { shallowMount, mount } from '@vue/test-utils'
import { expect } from 'chai'
import { sinon } from 'sinon'
import { axios } from 'axios'
import PetKennel from '../src/views/PetKennel.vue'


describe('PetKennel.vue', () => {
  let wrapper

beforeEach(() => {
  wrapper = shallowMount(PetKennel, {
    data: function() {
      return {
        pets: []
      }
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})


  it('checks if the main div has the className pet-kennel', () => {
    expect(wrapper.is('.pet-kennel')).to.equal(true)
  })

  it('performs an axios GET request upon button click', (done) => {
    const res = {
      data: [
        { name: 'floppy' },
        { name: 'soppy' }
      ]
    }
    wrapper.find('button').trigger('click')
    sinon.stub(axios, 'get').returns(Promise.resolve(res))
    expect(wrapper.setData).to.have.been.called()
    done()

  })
})