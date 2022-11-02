// import { writable } from "svelte/store";
import { writable, readable } from 'svelte/store';

export const showLogos = writable(false);
export const showInternalConnectors = writable(false);

// let stores = new Map();

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
export function breakPointStore() {
  if (typeof window === 'undefined') {
    return writable(false);
  }
  const sizes = {
    xs: window.matchMedia('(max-width: 639px)'),
    sm: window.matchMedia('(min-width: 640px)'),
    md: window.matchMedia('(min-width: 768px)'),
    lg: window.matchMedia('(min-width: 1024px)'),
    xl: window.matchMedia('(min-width: 1280px)'),
    xxl: window.matchMedia('(min-width: 1536px)'),
  }

  let currentMatch = null
  for (const size of breakpoints) {
    if (sizes[size].matches) {
      currentMatch = size
      break;
    }
  }

  let store = readable(currentMatch, (set) => {
    Object.entries(sizes).forEach(([key, listener]) => {
      listener.addEventListener('change',
        (value) => set(value.matches ? key : breakpoints[breakpoints.indexOf(key) - 1])
      );
    })
    return () => {
      Object.entries(sizes).forEach(([key, listener]) => {
        listener.removeEventListener('change',
          (value) => set(value.matches ? key : breakpoints[breakpoints.indexOf(key) - 1])
        );
      })
    }
  });

  return store
}