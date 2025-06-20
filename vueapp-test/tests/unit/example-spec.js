import {shallowMount} from '@vue/test-utils'

const MessageCompoenent = {
  template: '<div>{{ msg }}</div>',
  props: ['msg'],
}

describe('MessageCompoenent', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MessageCompoenent, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
});