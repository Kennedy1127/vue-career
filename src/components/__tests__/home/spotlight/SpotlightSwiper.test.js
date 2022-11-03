import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SpotlightSwiper from '@/components/home/spotlight/SpotlightSwiper.vue';

describe('SpotlightSwiper', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('renders swiper', () => {
    const wrapper = shallowMount(SpotlightSwiper, createConfig());
    const swiper = wrapper.find(`[data-test="swiper"]`);
    expect(swiper.exists()).toBe(true);
  });

  it('renders all swiper slide', () => {
    const wrapper = mount(SpotlightSwiper, createConfig());
    const swieprSlide = wrapper.findAll(`[data-test="swiper-slide"]`);
    expect(swieprSlide.length).toBe(5);
  });

  describe('when user is at first active index', () => {
    it('does not render left arrow', () => {
      const wrapper = mount(SpotlightSwiper, createConfig());
      const isBeginning = wrapper.find(`[data-test="is-beginning"]`);
      expect(isBeginning.exists()).toBe(false);
    });

    it('when users clicks right arrow', async () => {
      const wrapper = mount(SpotlightSwiper, createConfig());
      const isEnd = wrapper.find(`[data-test="is-end"]`);
      await isEnd.trigger('click');

      const isBeginning = wrapper.find(`[data-test="is-beginning"]`);
      expect(isBeginning.exists()).toBe(true);
    });
  });

  describe('when user is at last active index', () => {
    it('does not render right arrow', () => {});
    it('when users clicks left arrow', async () => {});
  });
});
