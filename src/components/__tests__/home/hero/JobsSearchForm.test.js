import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import JobsSearchForm from '@/components/home/hero/JobsSearchForm.vue';

const mockPush = vi.fn();
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('JobsSearchForm', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    });
  });

  it('renders not responsive form', () => {
    const wrapper = shallowMount(JobsSearchForm, createConfig());
    const form = wrapper.find(`[data-test="not-responsive-form"]`);
    expect(form.exists()).toBe(true);
  });

  it('renders responsive form', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });

    const wrapper = shallowMount(JobsSearchForm, createConfig());
    const form = wrapper.find(`[data-test="responsive-form"]`);
    expect(form.exists()).toBe(true);
  });

  describe('when user submits form', () => {
    it('when user is on not responsive form', async () => {
      const wrapper = shallowMount(JobsSearchForm, createConfig());
      const role = wrapper.findComponent(`[data-test="role"]`);
      const location = wrapper.findComponent(`[data-test="location"]`);
      await role.setValue('Test Role');
      await location.setValue('Test Location');

      const handleSubmit = wrapper.find(`[data-test="submit-form"]`);
      await handleSubmit.trigger('submit');
      expect(mockPush).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'Test Role',
          location: 'Test Location',
        },
      });
    });

    it('when user is on  responsive form', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800,
      });

      const wrapper = shallowMount(JobsSearchForm, createConfig());
      const role = wrapper.findComponent(`[data-test="role"]`);
      const location = wrapper.findComponent(`[data-test="location"]`);
      await role.setValue('Test Role');
      await location.setValue('Test Location');

      const handleSubmit = wrapper.find(`[data-test="responsive-form"]`);
      await handleSubmit.trigger('submit');
      expect(mockPush).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'Test Role',
          location: 'Test Location',
        },
      });
    });
  });
});
