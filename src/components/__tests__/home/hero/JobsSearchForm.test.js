import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
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

  it('when user submits form', async () => {
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
});
