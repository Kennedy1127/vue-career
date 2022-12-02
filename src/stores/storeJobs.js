import { defineStore } from 'pinia';
import axios from 'axios';
import { computed, ref } from 'vue';

export const useStoreJobs = defineStore('storeJobs', () => {
  // state
  const jobs = ref([]);
  const error = ref(null);
  const selectedDegree = ref([]);
  const selectedJobTypes = ref([]);
  const selectedOrganizations = ref([]);
  const selectedLocation = ref('');
  const selectedSkill = ref('');
  //

  // getter
  const includesByLocation = computed(() => (job) => {
    if (selectedLocation.value.length === 0) {
      return true;
    }

    return job.locations
      .map((location) => location.toLowerCase())
      .includes(selectedLocation.value.toLowerCase());
  });

  const includesBySkill = computed(() => (job) => {
    if (selectedSkill.value.length === 0) {
      return true;
    }

    const qualifications = [
      job.title.toLowerCase(),
      ...job.description.map((el) => el.toLowerCase()),
      ...job.minimumQualifications.map((el) => el.toLowerCase()),
      ...job.preferredQualifications.map((el) => el.toLowerCase()),
    ];

    return qualifications.some((qualification) =>
      qualification.includes(selectedSkill.value.toLowerCase())
    );
  });

  const degree = computed(() => new Set(jobs.value.map((job) => job.degree)));
  const includesByDegree = computed(() => (job) => {
    if (selectedDegree.value.length === 0) {
      return true;
    }
    return selectedDegree.value.includes(job.degree);
  });

  const jobTypes = computed(
    () => new Set(jobs.value.map((job) => job.jobType))
  );
  const includesByJobTypes = computed(() => (job) => {
    if (selectedJobTypes.value.length === 0) {
      return true;
    }
    return selectedJobTypes.value.includes(job.jobType);
  });

  const organizations = computed(
    () => new Set(jobs.value.map((job) => job.organization))
  );
  const includesByOrganizations = computed(() => (job) => {
    if (selectedOrganizations.value.length === 0) {
      return true;
    }
    return selectedOrganizations.value.includes(job.organization);
  });

  const filteredJobs = computed(() =>
    jobs.value
      .filter((job) => includesBySkill.value(job))
      .filter((job) => includesByLocation.value(job))
      .filter((job) => includesByDegree.value(job))
      .filter((job) => includesByJobTypes.value(job))
      .filter((job) => includesByOrganizations.value(job))
  );
  //

  // mutation & action
  const fetchJobs = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL);
      jobs.value = res.data;
      error.value = null;
    } catch (err) {
      error.value = err.message;
    }
  };

  const addSelectedDegree = (degree) => {
    selectedDegree.value = degree;
  };

  const addSelectedJobTypes = (jobTypes) => {
    selectedJobTypes.value = jobTypes;
  };

  const addSelectedOrganizations = (organizations) => {
    selectedOrganizations.value = organizations;
  };

  const addSelectedLocation = (location) => {
    selectedLocation.value = location;
  };

  const addSelectedSkill = (skill) => {
    selectedSkill.value = skill;
  };

  const clearSelectedFilters = () => {
    selectedDegree.value = [];
    selectedJobTypes.value = [];
    selectedOrganizations.value = [];
    selectedLocation.value = '';
    selectedSkill.value = '';
  };
  //

  return {
    jobs,
    error,
    selectedDegree,
    selectedJobTypes,
    selectedOrganizations,
    selectedLocation,
    selectedSkill,
    degree,
    jobTypes,
    organizations,
    includesBySkill,
    includesByLocation,
    includesByDegree,
    includesByJobTypes,
    includesByOrganizations,
    filteredJobs,
    fetchJobs,
    addSelectedDegree,
    addSelectedJobTypes,
    addSelectedOrganizations,
    addSelectedLocation,
    addSelectedSkill,
    clearSelectedFilters,
  };
});
