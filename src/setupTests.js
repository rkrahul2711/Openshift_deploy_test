// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



import { vi } from "vitest";

// Polyfill window.matchMedia for Ant Design
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Polyfill getComputedStyle for jsdom + AntD table
window.getComputedStyle = window.getComputedStyle || function() {
  return {
    getPropertyValue: () => "", // always return empty string
  };
};


// Mock getComputedStyle for AntD
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
});