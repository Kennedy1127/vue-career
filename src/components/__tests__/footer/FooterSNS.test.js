import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterSNS from '@/components/footer/FooterSNS.vue';

describe('FooterSNS', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(FooterSNS, createConfig());
    const icons = wrapper.findAll(`[data-test="icon"]`);
    expect(wrapper.text()).toMatch('Follow Life at Austin Careers on');
    expect(icons.length).toBe(5);
  });
});
