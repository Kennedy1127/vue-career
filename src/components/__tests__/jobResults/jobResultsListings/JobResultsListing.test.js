import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import JobResultsListing from '@/components/jobResults/jobResultsListings/JobResultsListing.vue';

describe('JobResultsListing', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      job: {
        title: 'Test Title',
        organization: 'Test Organization',
        locations: ['Test Location 1', 'Test Location 2'],
        jobType: 'Test JobType',
        degree: 'Test Degree',
        minimumQualifications: [
          'Test Qualification 1',
          'Test Qualification 2',
          'Test Qualification 3',
        ],
      },
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(JobResultsListing, createConfig());
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Organization');
    expect(wrapper.text()).toMatch('Test Location 1');
    expect(wrapper.text()).toMatch('Test Location 2');
    expect(wrapper.text()).toMatch('Test JobType');
    expect(wrapper.text()).toMatch('Test Degree');
    expect(wrapper.text()).toMatch('Test Qualification 1');
    expect(wrapper.text()).toMatch('Test Qualification 2');
    expect(wrapper.text()).toMatch('Test Qualification 3');
  });
});
