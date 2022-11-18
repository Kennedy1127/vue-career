import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StudentsSmallCardLong from '@/components/students/small/StudentsSmallCardLong.vue';

describe('StudentsSmallCardLong', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      image: '/src/assets/students/top/students-5.jpg',
      text: 'Test Text',
      link: 'Test Link',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(StudentsSmallCardLong, createConfig());
    const image = wrapper.find(`[data-test="image"]`);
    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('Test Link');
    expect(image.attributes().src).toBe(
      '/src/assets/students/top/students-5.jpg'
    );
  });
});
