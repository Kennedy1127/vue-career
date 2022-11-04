<template>
  <div
    class="grid home-xl:grid-cols-20 home-lg:grid-cols-22 home-sm:grid-cols-12"
  >
    <div class="home-lg:col-span-5 home-sm:col-span-6">
      <h2 class="home-lg:text-[22px] home-sm:text-lg text-text-black">
        More about us
      </h2>
      <div class="my-6 text-sm text-text-grey hover:text-brand-blue-1">
        <RouterLink to="#">
          About us<font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="ml-2"
          />
        </RouterLink>
      </div>
      <div class="my-6 text-sm text-text-grey hover:text-brand-blue-1">
        <RouterLink to="#">
          Contact us<font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="ml-2"
          />
        </RouterLink>
      </div>
      <div class="my-6 text-sm text-text-grey hover:text-brand-blue-1">
        <RouterLink to="#">
          Press<font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="ml-2"
          />
        </RouterLink>
      </div>
    </div>
    <div class="home-lg:col-span-5 home-sm:col-span-6">
      <h2 class="home-lg:text-[22px] home-sm:text-lg text-text-black">
        Related information
      </h2>
      <div class="my-6 text-sm text-text-grey hover:text-brand-blue-1">
        <RouterLink to="#" class="">
          Investor relations<font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="ml-2"
          />
        </RouterLink>
      </div>
      <div class="my-6 text-sm text-text-grey hover:text-brand-blue-1">
        <RouterLink to="#">
          Blog<font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="ml-2"
          />
        </RouterLink>
      </div>
    </div>
    <div class="col-span-10 max-[1000px]:mt-10">
      <h2 class="home-lg:text-[22px] home-sm:text-lg text-text-black">
        Equal Opportunity
      </h2>
      <p class="text-sm text-text-grey my-6" data-test="content">
        Austin is proud to be an equal opportunity workplace and is an
        affirmative action employer. We are committed to equal employment
        opportunity regardless of race, color, ancestry, religion, sex, national
        origin, sexual orientation, age, citizenship, marital status,
        disability, gender identity or Veteran status. We also consider
        qualified applicants regardless of criminal histories, consistent with
        legal requirements. See also Austin's EEO Policy and EEO is the Law. If
        you have a need that requires accommodation, please let us know by
        completing our Accommodations for Applicants form.
      </p>
    </div>
  </div>
</template>
