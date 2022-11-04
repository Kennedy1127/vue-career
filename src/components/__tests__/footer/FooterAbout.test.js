import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterAbout from '@/components/footer/FooterAbout.vue';

describe('FooterAbout', () => {
  it('renders about grid', () => {
    const wrapper = shallowMount(FooterAbout);
    const grid = wrapper.find(`[data-test="grid"]`);
    expect(grid.exists()).toBe(true);
  });

  it('renders about accordions', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 599,
    });

    const wrapper = shallowMount(FooterAbout);
    const accordions = wrapper.find(`[data-test="accordions"]`);
    expect(accordions.exists()).toBe(true);
  });
});
