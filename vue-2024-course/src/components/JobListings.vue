<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import JobListing from "./JobListing.vue";

//
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

//
const state = reactive({
  jobs: [],
  isLoading: false,
});

//
onMounted(async () => {
  try {
    state.isLoading = true;
    const response = await axios.get("/api/jobs");
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
    state.jobs = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<!--  -->
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="m-auto container-xl lg:container">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!--  -->
      <PulseLoader
        v-if="state.isLoading"
        class="text-center text-gray-500 py-6"
      />
      <div v-else class="grid gap-6 grid-cols-1 md:grid-cols-3">
        <JobListing
          v-for="job in state?.jobs?.slice(0, limit || jobs?.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <!--  -->
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
