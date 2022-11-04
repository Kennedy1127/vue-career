import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LocationsImage from '@/components/home/locations/LocationsImage.vue';

describe('LocationsImage', () => {
  it('renders', () => {
    const wrapper = shallowMount(LocationsImage);
    const image = wrapper.find('img');
    expect(image.attributes().src).toBe(
      'src/assets/home/locations/locations-1.jpg'
    );
  });
});
