# Vue User List Application

## Overview

This Vue application features a dynamic user list interface with Vue's Composition API and IntersectionObserver, enabling infinite scrolling. It includes Vue components and utility functions for API data fetching, designed for a responsive user experience.

## Features

- **Infinite Scrolling**: Automates loading more user data on scroll.
- **Dynamic Data Fetching**: Generic function for fetching data from an API.
- **User Cards**: Displays user information in an organized, appealing layout.

## Components

### `UserList.vue`
- Renders the user list and manages infinite scrolling.
- Uses `onMounted` to initialize IntersectionObserver and `onBeforeUnmount` for cleanup.

### `UserCard.vue`
- Displays user details like name, email, and picture.
- Utilizes computed properties for reactive data management.

## Composables

### `useUsers()`
- Manages user data fetching and state.
- `users`: A reactive array of user data.
- `query`: Reactive object for API query parameters.
- `observerShow`: Indicates observer element visibility.
- `getUsers()`: Fetches users from API and updates the state.

## Utility Functions

### `fetchData<T>(url: URL): Promise<T>`
- Generic function to fetch data from a URL.

### `getUrl(query: ListQuery): URL`
- Constructs a URL with query parameters for API requests.

## Interfaces

- Defines TypeScript interfaces for type consistency.

## Usage

1. Install Vue and dependencies.
2. Start the application (`npm run serve`).
3. Interact with the user list to load more users.

