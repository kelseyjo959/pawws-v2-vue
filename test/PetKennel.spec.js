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

  // it('updates the data() after axios GET performed', () => {
  //   const wrapper = mount(PetKennel, {
  //     data: function() {
  //       return {
  //         pets: []
  //       }
  //     }
  //   })
    
  //   wrapper.find('button').trigger('click')
    // const res = {
    //   data: [
    //     { name: "floppy" },
    //     { name: "soppy" }
    //   ]
    // }
   
      // console.log(wrapper.vm.pets)
      // sinon.stub(axios, 'get').returns(Promise.resolve(res))
      // // wrapper.setData({pets: res.data})
      // done()
      // console.log(wrapper.vm.pets)
      // expect(wrapper.vm.pets).to.eql( res.data )

    // })
    // done()
    // expect(wrapper.vm.pets).to.equal([])

  // })
})