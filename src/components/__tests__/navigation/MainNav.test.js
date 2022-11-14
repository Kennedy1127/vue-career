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
        FontAwesomeIcon: true,
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

  describe('when user clicks item link', () => {
    it('push to target route', () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const routerLinks = wrapper.findAllComponents(RouterLinkStub);
      const routerLinkToHome = routerLinks.find(
        (link) => link.props().to.name === 'Home'
      );
      expect(routerLinkToHome.props().to).toEqual({ name: 'Home' });
    });
  });

  describe('when user is on responsive mode', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 900,
      });
    });

    it('renders responsive mode', () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const navigationBars = wrapper.find(`[data-test="navigation-bars"]`);
      const navigationItems = wrapper.find(
        `[data-test="navigation-items-desktop"]`
      );

      expect(navigationBars.exists()).toBe(true);
      expect(navigationItems.exists()).toBe(false);
    });

    describe('when user clicks navigation bars', () => {
      it('renders backdrop', async () => {
        const wrapper = shallowMount(MainNav, createConfig());
        const navigationBars = wrapper.find(`[data-test="navigation-bars"]`);
        await navigationBars.trigger('click');
        const backdrop = wrapper.find(`[data-test="backdrop"]`);
        expect(backdrop.exists()).toBe(true);
      });

      it('renders navigation items', async () => {
        const wrapper = shallowMount(MainNav, createConfig());
        const navigationBars = wrapper.find(`[data-test="navigation-bars"]`);
        await navigationBars.trigger('click');
        const navigationItems = wrapper.find(
          `[data-test="navigation-items-mobile"]`
        );
        expect(navigationItems.classes()).toContain('responsive-navigation-in');
      });

      describe('when user clicks background ', () => {
        it('remove backdrop and navigation items', async () => {
          const wrapper = shallowMount(MainNav, createConfig());
          const navigationBars = wrapper.find(`[data-test="navigation-bars"]`);
          await navigationBars.trigger('click');

          let backdrop = wrapper.find(`[data-test="backdrop"]`);
          await backdrop.trigger('click');

          const navigationItems = wrapper.find(
            `[data-test="navigation-items-mobile"]`
          );

          backdrop = wrapper.find(`[data-test="backdrop"]`);
          expect(backdrop.exists()).toBe(false);
          expect(navigationItems.classes()).toContain(
            'responsive-navigation-out'
          );
        });
      });
    });
  });
});
