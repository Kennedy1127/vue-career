import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProfileImage from '@/components/navigation/ProfileImage.vue';

describe('ProfileImageVue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
