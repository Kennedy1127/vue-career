import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LocationsContent from '@/components/home/locations/LocationsContent.vue';

describe('LocationsContent', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('renders texts', () => {
    const wrapper = shallowMount(LocationsContent, createConfig());
    expect(wrapper.text()).toMatch('LOCATIONS');
    expect(wrapper.text()).toMatch('Our locations');
    expect(wrapper.text()).toMatch(
      'Large or small, each one of our offices is designed to inspire innovation, big ideas, and community.'
    );
  });

  it('renders city', () => {
    const wrapper = shallowMount(LocationsContent, createConfig());
    expect(wrapper.text()).toMatch('New York');
    expect(wrapper.text()).toMatch('Los Angeles');
    expect(wrapper.text()).toMatch('Austin');
    expect(wrapper.text()).toMatch('Tokyo');
    expect(wrapper.text()).toMatch('Seoul');
    expect(wrapper.text()).toMatch('Singapore');
  });

  it('renders locations jobs', () => {
    const wrapper = shallowMount(LocationsContent, createConfig());
    expect(wrapper.text()).toMatch('828 jobs');
    expect(wrapper.text()).toMatch('534 jobs');
    expect(wrapper.text()).toMatch('82 jobs');
    expect(wrapper.text()).toMatch(`80 jobs`);
    expect(wrapper.text()).toMatch(`78 jobs`);
    expect(wrapper.text()).toMatch(`51 jobs`);
  });

  describe('when user clicks city', () => {
    it('pushs to LocationView', () => {
      const wrapper = shallowMount(LocationsContent, createConfig());
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.props().to).toEqual({ name: 'Locations' });
    });
  });
});
