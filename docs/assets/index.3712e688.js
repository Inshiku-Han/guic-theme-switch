const u = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = d(e);
    fetch(e.href, t);
  }
};
u();
const c = "theme-preference",
  f = () => {
    (r.value = r.value === "light" ? "dark" : "light"), a();
  },
  m = () =>
    localStorage.getItem(c)
      ? localStorage.getItem(c)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  a = () => {
    localStorage.setItem(c, r.value), i();
  },
  i = () => {
    var o;
    document.firstElementChild.setAttribute("data-theme", r.value),
      (o = document.querySelector("#theme-toggle")) == null ||
        o.setAttribute("aria-label", r.value);
  },
  r = { value: m() };
i();
window.onload = () => {
  i(), document.querySelector("#theme-toggle").addEventListener("click", f);
};
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: o }) => {
    (r.value = o ? "dark" : "light"), a();
  });
