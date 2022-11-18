import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StudentsLargeCard from '@/components/students/large/StudentsLargeCard.vue';

describe('StudentsLargeCard', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      image: '/src/assets/students/bottom/students-1.jpg',
      text: 'Test Text',
      link: 'Test Link',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(StudentsLargeCard, createConfig());
    const card = wrapper.find(`[data-test="card"]`);

    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('Test Link');
    expect(card.element.style.getPropertyValue('background-image')).toBe(
      'url(/src/assets/students/bottom/students-1.jpg)'
    );
    expect(card.element.style.getPropertyValue('background-size')).toBe(
      'cover'
    );
  });
});
