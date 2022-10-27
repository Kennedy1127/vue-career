import { createTestingPinia } from '@pinia/testing';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MainNav from '@/components/navigation/MainNav.vue';
import { useStoreAuth } from '@/stores/storeAuth';
import { useRoute } from 'vue-router';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}));

describe('MainNav', () => {
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
        RouterLink: RouterLinkStub,
      },
    },
  });

  beforeEach(() => {
    useRoute.mockImplementationOnce(() => ({
      name: 'Home',
    }));
  });

  it('renders company name', () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const company = wrapper.find(`[data-text="nav-company"]`);
    expect(company.text()).toBe('Austin Careers');
  });

  it('renders navigation items', () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const navigationItems = wrapper.findAll(`[data-text="nav-item"]`);
    const navigationTitle = navigationItems.map((item) => item.text());
    expect(navigationTitle).toEqual([
      'Teams',
      'Locations',
      'Benefits',
      'Jobs',
      'Students',
    ]);
  });

  describe('when user is logged out', () => {
    it('renders sign in button', () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const actionButton = wrapper.find(`[data-test="action-button"]`);
      expect(actionButton.exists()).toBe(true);
    });

    it('logs user in', async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const storeAuth = useStoreAuth();
      const actionButton = wrapper.findComponent(`[data-test="action-button"]`);
      await actionButton.trigger('click');
      expect(storeAuth.userLogin).toHaveBeenCalled();
    });
  });

  describe('when user is logged in', () => {
    it('renders profile image', () => {
      const wrapper = shallowMount(MainNav, createConfig({ isLoggedIn: true }));
      const profileImage = wrapper.findComponent(`[data-test="profile-image"]`);
      expect(profileImage.exists()).toBe(true);
    });

    it('renders subnav', () => {
      const wrapper = shallowMount(MainNav, createConfig({ isLoggedIn: true }));
      const subnav = wrapper.findComponent(`[data-test="sub-nav"]`);
      expect(subnav.exists()).toBe(true);
    });
  });
});
