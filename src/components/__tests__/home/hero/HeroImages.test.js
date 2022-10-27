import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import HeroImages from '@/components/home/hero/HeroImages.vue';
import { nextTick } from 'vue';

describe('HeroImages', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders image', () => {
    const wrapper = shallowMount(HeroImages);
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
  });

  it('runs changing images link', () => {
    vi.spyOn(global, 'setInterval');
    shallowMount(HeroImages);
    expect(setInterval).toHaveBeenCalled();
  });

  it('changes images link after 3 seconds', async () => {
    const wrapper = shallowMount(HeroImages);
    vi.advanceTimersByTime(3000); //讓setInterval跑到3秒後
    await nextTick(); // 更新3秒後的wrapper
    const image = wrapper.find('img');
    expect(image.attributes().src).toMatch('src/assets/home/hero/hero2.jpg');
  });

  it('removes setInterval after component unmounted', () => {
    vi.spyOn(global, 'clearInterval');
    const wrapper = shallowMount(HeroImages);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
