import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LearnContent from '@/components/home/learn/LearnContent.vue';

describe('LearnContent', () => {
  it('renders text', () => {
    const wrapper = shallowMount(LearnContent);
    expect(wrapper.text()).toMatch('LEARN');
    expect(wrapper.text()).toMatch('Working at Austin');
  });
});
