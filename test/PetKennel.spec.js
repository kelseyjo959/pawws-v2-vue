import { shallowMount, mount } from '@vue/test-utils'
import { expect } from 'chai'
import PetKennel from '../src/views/PetKennel.vue'


describe('PetKennel.vue', () => {

  it('checks if the main div has the className pet-kennel', () => {
    const wrapper = shallowMount(PetKennel)
    expect(wrapper.is('.pet-kennel')).to.equal(true)
  })
})