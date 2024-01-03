<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useUsers } from '@/composables/user';

import IconSpinner from '@/components/IconSpinner.vue';
import UserCard from '@/components/UserCard.vue';

const { users, query, observerShow, getUsers } = useUsers();

// Reference to the IntersectionObserver instance.
const observer = ref<IntersectionObserver>();
// Reference to the HTML element used for the observer.
const observerElement = ref<HTMLInputElement | null>(null);

/**
 * Lifecycle hook that is called after the component is mounted.
 * It initializes an IntersectionObserver to load more users when the observer element is in view.
 */

onMounted(() => {
	observer.value = new IntersectionObserver(
		([entry]) => {
			if (entry && entry.isIntersecting) {
				getUsers();
				query.value.page++;
			}
		},
		{ threshold: 0.5 },
	);
	// Observes the specified element for intersection changes.
	if (observerElement.value) observer.value.observe(observerElement.value);
});

/**
 * Lifecycle hook that is called before the component is unmounted.
 * It disconnects the IntersectionObserver to clean up resources.
 * In this case it is not needed, but usually such observers are transferred to the plugin,
 * and there you will already need it
 */
onBeforeUnmount(() => {
	observer.value?.disconnect();
});
</script>

<template>
	<h1 class="mb-8 px-4 py-2">User List</h1>
	<!-- new syntax 3.4 short same bind :user -->
	<UserCard v-for="(user, index) in users" :key="index" :user class="mt-3 first:mt-0" />
	<div v-if="observerShow" ref="observerElement" class="flex justify-center items-center">
		<IconSpinner />
	</div>
</template>
