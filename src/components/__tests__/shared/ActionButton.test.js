import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ActionButton from '@/components/shared/ActionButton.vue';

describe('ActionButton', () => {
  const createConfig = () => ({
    propsData: {
      text: 'Test Click',
      type: 'secondary',
    },
  });

  it('renders button text', () => {
    const wrapper = shallowMount(ActionButton, createConfig());
    expect(wrapper.text()).toBe('Test Click');
  });

  it('apply one of classes', () => {
    const wrapper = shallowMount(ActionButton, createConfig());
    const button = wrapper.find('button');
    expect(button.classes()).toEqual(['secondary']);
  });
});
