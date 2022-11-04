import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LearnImage from '@/components/home/learn/LearnImage.vue';

describe('LearnImage', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      title: 'Test Title',
      text: 'Test Text',
      image: 'src/assets/home/learn/learn-1.jpg',
    },
  });

  it('renders text', () => {
    const wrapper = shallowMount(LearnImage, createConfig());
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
  });

  it('renders background image', () => {
    const wrapper = shallowMount(LearnImage, createConfig());
    const image = wrapper.find(`[data-test="background-image"]`);
    expect(image.element.style.backgroundImage).toBe(
      'url(src/assets/home/learn/learn-1.jpg)'
    );
  });

  describe('when user clicks link', () => {
    it('push to JobResultsView', () => {
      const wrapper = shallowMount(LearnImage, createConfig());
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.props().to).toEqual({ name: 'JobResults' });
    });
  });
});
