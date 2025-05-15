<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/img/logo.png";

//
const route = useRoute();
const isActiveLink = (r) => (r === route.path ? "bg-green-900" : "");
</script>

<!--  -->
<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                v-for="link in [
                  { name: 'Home', path: '/' },
                  { name: 'Jobs', path: '/jobs' },
                  { name: 'Add Job', path: '/jobs/add' },
                ]"
                :to="link.path"
                :class="[
                  isActiveLink(link.path)
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900',
                  'text-white hover:text-white rounded-md px-3 py-2',
                ]"
                >{{ link.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
