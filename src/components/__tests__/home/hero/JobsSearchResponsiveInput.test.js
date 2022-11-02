import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import JobsSearchResponsiveInput from '@/components/home/hero/JobsSearchResponsiveInput.vue';

describe('JobsSearchResponsiveInput', () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    propsData: {
      modelValue: '',
      placeholder: 'Test Placeholder',
      ...props,
    },
  });

  it('renders placeholder', () => {
    const wrapper = shallowMount(JobsSearchResponsiveInput, createConfig());
    const input = wrapper.find('input');
    expect(input.attributes().placeholder).toMatch('Test Placeholder');
  });

  it('renders map icon', () => {
    const wrapper = shallowMount(
      JobsSearchResponsiveInput,
      createConfig({ map: true })
    );
    const icon = wrapper.find(`[data-test="font-awesome-icon"]`);
    expect(icon.exists()).toBe(true);
  });

  describe('when user inputs text', () => {
    it('emit has been called', async () => {
      const wrapper = shallowMount(JobsSearchResponsiveInput, createConfig());
      const input = wrapper.find('input');
      await input.setValue('Test Value');
      await input.setValue('Test Value Test Value');
      await input.setValue('Test Value Test Value Test Value');

      const emits = wrapper.emitted()['update:modelValue'];
      expect(emits).toEqual([
        ['Test Value'],
        ['Test Value Test Value'],
        ['Test Value Test Value Test Value'],
      ]);
    });
  });
});
