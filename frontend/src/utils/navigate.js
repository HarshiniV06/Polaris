/** Client-side navigation without a full page reload (works with custom Router). */
export function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
