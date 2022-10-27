import { createTestingPinia } from '@pinia/testing';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import SubNav from '@/components/navigation/SubNav.vue';
import { useRoute } from 'vue-router';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}));

describe('SubNav', () => {
  const createConfig = (auth = {}) => ({
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            storeAuth: { isLoggedIn: false, ...auth },
          },
        }),
      ],
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  describe('when user is not on Home or JobResults', () => {
    it('renders subnav information', () => {
      useRoute.mockImplementationOnce(() => ({
        name: 'Teams',
      }));

      const wrapper = shallowMount(SubNav, createConfig());
      expect(wrapper.text()).toMatch(
        'Find your next job at Austin. What do you want to do?'
      );
    });

    it('link to JobResults', () => {
      useRoute.mockImplementationOnce(() => ({
        name: 'Teams',
      }));

      const wrapper = shallowMount(SubNav, createConfig());
      const link = wrapper.findComponent(RouterLinkStub);
      expect(link.props().to.name).toBe('JobResults');
    });
  });

  describe('when user is on JobResults', () => {
    it('renders subnav information', () => {
      useRoute.mockImplementationOnce(() => ({
        name: 'JobResults',
      }));

      const wrapper = shallowMount(SubNav, createConfig());
      expect(wrapper.text()).toMatch('2600 jobs matched');
    });
  });

  describe('when user is logged in', () => {
    it('renders subnav login information', () => {
      useRoute.mockImplementationOnce(() => ({
        name: 'Home',
      }));

      const wrapper = shallowMount(SubNav, createConfig({ isLoggedIn: true }));
      expect(wrapper.text()).toMatch('Saved jobs');
      expect(wrapper.text()).toMatch('Job alerts');
    });
  });
});
