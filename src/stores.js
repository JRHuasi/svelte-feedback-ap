import {writable} from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Ex minim cupidatat adipisicing voluptate. Excepteur est magna proident pariatur excepteur pariatur qui non. Cupidatat sit reprehenderit cillum ex fugiat veniam esse elit id magna reprehenderit."
  },
  {
    id: 2,
    rating: 8,
    text: "Ex minim cupidatat adipisicing voluptate. Excepteur est magna proident pariatur excepteur pariatur qui non. Cupidatat sit reprehenderit cillum ex fugiat veniam esse elit id magna reprehenderit."
  },
  {
    id: 3,
    rating: 9,
    text: "Ex minim cupidatat adipisicing voluptate. Excepteur est magna proident pariatur excepteur pariatur qui non. Cupidatat sit reprehenderit cillum ex fugiat veniam esse elit id magna reprehenderit."
  },
]);