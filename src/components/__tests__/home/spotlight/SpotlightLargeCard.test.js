import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SpotlightLargeCard from '@/components/home/spotlight/SpotlightLargeCard.vue';

describe('SpotlightLargeCard', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      spotlightLargeTitle: 'Test Title',
      spotlightLargeText: 'Test Text',
      spotlightLargeImage: 'src/assets/home/spotlight/spotlight-lg-1.jpg',
    },
  });

  it('renders card', () => {
    const wrapper = shallowMount(SpotlightLargeCard, createConfig());
    const container = wrapper.find(`[data-test="container"]`);

    expect(container.element.style.backgroundImage).toMatch(
      'src/assets/home/spotlight/spotlight-lg-1.jpg'
    );
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('See jobs');
  });

  describe('clicks card', () => {
    it('checks router information', () => {
      const wrapper = shallowMount(SpotlightLargeCard, createConfig());
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.props().to).toEqual({ name: 'JobResults' });
    });
  });
});
