import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StudentsSmallCardText from '@/components/students/small/StudentsSamllCardText.vue';

describe('StudentsSmallCardText', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      text: 'Test Text',
      link: 'Test Link',
      color: 'blue',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(StudentsSmallCardText, createConfig());
    const color = wrapper.find(`[data-test="color"]`);
    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('Test Link');
    expect(color.classes()).toContain('blue');
  });
});
