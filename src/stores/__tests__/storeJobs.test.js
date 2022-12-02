import { setActivePinia, createPinia } from 'pinia';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { useStoreJobs } from '@/stores/storeJobs';
import axios from 'axios';

describe('useStoreJobs', () => {
  let storeJobs;

  beforeEach(() => {
    setActivePinia(createPinia());
    storeJobs = useStoreJobs();
  });

  describe('state', () => {
    it('initialize jobs', () => {
      expect(storeJobs.jobs).toEqual([]);
    });

    it('initialize null error', () => {
      expect(storeJobs.error).toBe(null);
    });

    it('initialize selected items', () => {
      expect(storeJobs.selectedDegree).toEqual([]);
      expect(storeJobs.selectedJobTypes).toEqual([]);
      expect(storeJobs.selectedOrganizations).toEqual([]);
      expect(storeJobs.selectedLocation).toEqual('');
      expect(storeJobs.selectedSkill).toEqual('');
    });
  });

  describe('getter', () => {
    beforeEach(() => {
      storeJobs.jobs = [
        {
          organization: 'Vue and Me',
          degree: "Master's",
          jobType: 'Intern',
          locations: ['Glasgow', 'Leipzig', 'Québec'],
          title: '',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
        {
          organization: 'VueTube',
          degree: "Bachelor's",
          jobType: 'Part-time',
          locations: ['Glasgow'],
          title: '',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
        {
          organization: 'Vue Can Do It',
          degree: 'Ph.D.',
          jobType: 'Full-time',
          locations: ['Leipzig', 'Québec'],
          title: '',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
        {
          organization: 'VueTube',
          degree: "Master's",
          jobType: 'Part-time',
          locations: ['Yokohama'],
          title: 'Software developer',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
        {
          organization: 'Point of Vue',
          degree: 'Associate',
          jobType: 'Temporary',
          locations: ['Yokohama', 'Osaka'],
          title: '',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
        {
          organization: 'Point of Vue',
          degree: 'Associate',
          jobType: 'Temporary',
          locations: ['Tokyo'],
          title: '',
          description: [],
          minimumQualifications: [],
          preferredQualifications: [],
        },
      ];
    });

    it('renders filters', () => {
      expect(storeJobs.degree).toEqual(
        new Set(["Master's", "Bachelor's", 'Ph.D.', 'Associate'])
      );
      expect(storeJobs.jobTypes).toEqual(
        new Set(['Intern', 'Part-time', 'Full-time', 'Temporary'])
      );
      expect(storeJobs.organizations).toEqual(
        new Set(['Vue and Me', 'VueTube', 'Vue Can Do It', 'Point of Vue'])
      );
    });

    it('includes job', () => {
      const job = {
        organization: 'Vue and Me',
        degree: "Master's",
        jobType: 'Intern',
        locations: ['Yokohama', 'Osaka', 'Tokyo'],
        title: '',
        description: [],
        minimumQualifications: [],
        preferredQualifications: [],
      };
      storeJobs.selectedDegree = ["Master's", 'Ph.D.'];
      storeJobs.selectedJobTypes = ['Full-time'];
      storeJobs.selectedOrganizations = ['Vue and Me'];
      storeJobs.selectedLocation = 'Tokyo';
      storeJobs.selectedSkill = 'software';

      expect(storeJobs.includesByDegree(job)).toBe(true);
      expect(storeJobs.includesByJobTypes(job)).toBe(false);
      expect(storeJobs.includesByOrganizations(job)).toBe(true);
      expect(storeJobs.includesByLocation(job)).toBe(true);
      expect(storeJobs.includesBySkill(job)).toBe(false);
    });

    it('renders filtered jobs', () => {
      storeJobs.selectedDegree = ["Master's", 'Associate'];
      storeJobs.selectedJobTypes = ['Temporary', 'Part-time'];
      storeJobs.selectedOrganizations = ['VueTube', 'Point of Vue'];
      storeJobs.selectedLocation = 'Yokohama';
      storeJobs.selectedSkill = 'software';

      expect(storeJobs.filteredJobs.length).toBe(1);
    });
  });

  describe('mutations and actions', () => {
    describe('fetch jobs', () => {
      const mockFetchJobs = {
        data: [
          { id: 1, title: 'title1' },
          { id: 2, title: 'title2' },
        ],
      };
      vi.spyOn(axios, 'get').mockResolvedValue(mockFetchJobs);

      it('fetch jobs have been called', async () => {
        await storeJobs.fetchJobs();
        expect(axios.get).toHaveBeenCalled();
      });

      it('get jobs', async () => {
        await storeJobs.fetchJobs();
        expect(storeJobs.jobs).toEqual([
          { id: 1, title: 'title1' },
          { id: 2, title: 'title2' },
        ]);
      });
    });

    describe('user filters jobs', () => {
      it('add selected items', () => {
        storeJobs.addSelectedDegree(["Master's", "Bachelor's", 'Ph.D.']);
        storeJobs.addSelectedJobTypes([
          'Intern',
          'Part-time',
          'Full-time',
          'Temporary',
        ]);
        storeJobs.addSelectedOrganizations(['Vue Can Do It', 'Point of Vue']);
        storeJobs.addSelectedLocation('Tokyo');
        storeJobs.addSelectedSkill('Software developer');

        expect(storeJobs.selectedDegree).toEqual([
          "Master's",
          "Bachelor's",
          'Ph.D.',
        ]);

        expect(storeJobs.selectedJobTypes).toEqual([
          'Intern',
          'Part-time',
          'Full-time',
          'Temporary',
        ]);

        expect(storeJobs.selectedOrganizations).toEqual([
          'Vue Can Do It',
          'Point of Vue',
        ]);

        expect(storeJobs.selectedLocation).toBe('Tokyo');

        expect(storeJobs.selectedSkill).toBe('Software developer');
      });
    });

    describe('user clears filters', () => {
      it('clear all selected filters', () => {
        storeJobs.addSelectedDegree(["Master's", "Bachelor's", 'Ph.D.']);
        storeJobs.addSelectedJobTypes([
          'Intern',
          'Part-time',
          'Full-time',
          'Temporary',
        ]);
        storeJobs.addSelectedOrganizations(['Vue Can Do It', 'Point of Vue']);
        storeJobs.addSelectedLocation('Tokyo');
        storeJobs.addSelectedSkill('Software developer');

        storeJobs.clearSelectedFilters();
        expect(storeJobs.selectedDegree).toEqual([]);
        expect(storeJobs.selectedJobTypes).toEqual([]);
        expect(storeJobs.selectedOrganizations).toEqual([]);
        expect(storeJobs.selectedLocation).toBe('');
        expect(storeJobs.selectedSkill).toBe('');
      });
    });
  });
});
