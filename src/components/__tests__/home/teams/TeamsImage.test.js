import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TeamsImage from '@/components/home/teams/TeamsImage.vue';

describe('TeamsImage', () => {
  it('renders', () => {
    const wrapper = shallowMount(TeamsImage);
    const image = wrapper.find('img');
    expect(image.attributes().src).toBe('src/assets/home/teams/teams-1.jpg');
  });
});
