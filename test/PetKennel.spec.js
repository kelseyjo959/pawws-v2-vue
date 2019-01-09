import { shallowMount, mount } from '@vue/test-utils'
import { expect } from 'chai'
import * as sinon from 'sinon'
import * as axios from 'axios'
import PetKennel from '../src/views/PetKennel.vue'


describe('PetKennel.vue', () => {

  it('checks if the main div has the className pet-kennel', () => {
    const wrapper = shallowMount(PetKennel)
    expect(wrapper.is('.pet-kennel')).to.equal(true)
  })

  it('performs an axios GET request upon button click', (done) => {
    const wrapper = mount(PetKennel, {
      data: function() {
        return {
          pets: []
        }
      }
    })
    const res = {
      data: [
        { name: 'floppy' },
        { name: 'soppy' }
      ]
    }
    wrapper.find('button').trigger('click')
    wrapper.vm.getPets().then( () => {
      sinon.stub(axios, 'get').returns(Promise.resolve(res))
      expect(wrapper.vm.pets).to.equal( [{name: 'floppy'}, {name: 'soppy'}] )
      done()

    })
    done()

  })
})