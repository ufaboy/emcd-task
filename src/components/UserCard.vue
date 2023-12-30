<script setup lang="ts">
import { computed } from 'vue';
import { User } from '@/interfaces';

const props = defineProps<{
	user: User;
}>();

const fullName = computed(() => {
	return `${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`;
});
</script>

<template>
	<figure class="flex gap-3 hover:bg-blue-400 hover:text-black py-2 px-4">
		<img
			:src="user.picture.medium"
			alt="avatar"
			width="100"
			height="100"
			onerror="this.onerror=null;this.src = '/emcd-task/default_avatar.svg'"
			class="rounded-md hover:scale-110 transition cursor-pointer"
		/>
		<figcaption class="flex flex-col ju gap-3">
			<span class="max-w-56 md:max-w-min truncate font-semibold text-lg" :title="fullName">
				{{ fullName }}
			</span>
			<a
				:href="`mailto:${user.email}`"
				class="underline max-w-56 md:max-w-min truncate"
				:title="user.email"
			>
				{{ user.email }}
			</a>
		</figcaption>
	</figure>
</template>
