import { mount } from '@vue/test-utils'
import EchoerForm from '@/components/EchoerForm.vue'

describe('EchoerForm', () => {
  // control is component mounted
  it('is a Vue instance', () => {
    const wrapper = mount(EchoerForm)
    expect(wrapper.vm).toBeTruthy()
  })
  it('input field exists', () => {
    const wrapper = mount(EchoerForm)
    expect(wrapper.find('#echoinput')).toBeTruthy()
  })
  it('echo button exists', () => {
    const wrapper = mount(EchoerForm)
    expect(wrapper.find('#echo_btn')).toBeTruthy()
  })
  it('echo items div exists', () => {
    const wrapper = mount(EchoerForm)
    expect(wrapper.find('#echoitems')).toBeTruthy()
  })
  //control if input taken correctly as a data property
  it('correctly takes input to the variable', () => {
    const wrapper = mount(EchoerForm)
    wrapper.find('#echoinput').setValue('Hello world')
    expect(wrapper.vm.echo_text).toBe('Hello world')
  })
  // control if the echo operation success
  it('echoes given input', async() => {
    const wrapper = mount(EchoerForm)
    const echofn = jest.fn();
    await wrapper.setMethods({ echo: echofn})
    await wrapper.find('#echoinput').setValue('Hello world')
    await wrapper.find('#echo_btn').trigger('click')
    expect(echofn).toHaveBeenCalled()
  
  })
  // control if the echo operation success
  it('clears echos', async() => {
    const wrapper = mount(EchoerForm)
    const clearfn = jest.fn();
    wrapper.setMethods({clear : clearfn})
    await wrapper.find('#reset_btn').trigger('click')
    expect(clearfn).toHaveBeenCalled()
  })
  

})

