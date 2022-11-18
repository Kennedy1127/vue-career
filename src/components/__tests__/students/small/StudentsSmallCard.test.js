import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StudentsSmallCard from '@/components/students/small/StudentsSmallCard.vue';

describe('StudentsSamllCard', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      image: '/src/assets/students/top/students-1.jpg',
      title: 'Test Title',
      text: 'Test Text',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(StudentsSmallCard, createConfig());
    const image = wrapper.find(`[data-test="image"]`);
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('Learn more');
    expect(wrapper.text()).toMatch('See jobs');
    expect(image.attributes().src).toBe(
      '/src/assets/students/top/students-1.jpg'
    );
  });
});
