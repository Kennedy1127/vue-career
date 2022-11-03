import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SpotlightCard from '@/components/home/spotlight/SpotlightCard.vue';

describe('SpotlightCard', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      spotlightTitle: 'Test Title',
      spotlightText: 'Test Text',
    },
  });

  it('renders card', () => {
    const wrapper = shallowMount(SpotlightCard, createConfig());
    const image = wrapper.find(`[data-test="image"]`);

    expect(image.exists()).toBe(true);
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
    expect(wrapper.text()).toMatch('See jobs');
  });

  describe('clicks card', () => {
    it('checks router information', () => {
      const wrapper = shallowMount(SpotlightCard, createConfig());
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.props().to).toEqual({ name: 'JobResults' });
    });
  });
});
