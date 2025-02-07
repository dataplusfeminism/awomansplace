<script>
  import { t, locale, locales } from "$lib/translations";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from "$app/paths";

  export let segment;
  const links = [
    { name: "ENG", href: "." },
    { name: "BAN", href: "." },
    { name: "HIN", href: "." },
  ];

  let scribble = "#FF6B0E";
  $: outerWidth = 0;
  let window;
  // <a href="/">Home</a>
  // <a href="/about">About</a>
  // <a href="/settings">Settings</a>
  let w = 0;
  let h = 0;

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    // const { value } = currentTarget;

    document.cookie = `lang=${value} ;`;
  };

  $: ({ route } = $page.data);
</script>

<svelte:window bind:innerWidth={window} />

<nav class="flex items-center">
  <div class="flex">
    <a href={`../${$locale}`}>
      <img
        src="/illustrations/logo.png"
        class="me-3 h-6 sm:h-9 logo"
        alt="Project Logo"
      />
    </a>
    <a href={`${base}/${$locale}`} class="name py-2">
      {$t("menu.shorttitle")}
    </a>
  </div>

  <select
    on:change="{({ target }) => goto(target.value)}"
    class="rounded-md bg-pink-600 h-10 text-white text-xl font-bold px-3 py-2 text-left shadow-sm ring-1 ring-inset
    ring-pink-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:leading-6"
  >
    {#each $locales as lc}
      <option value="${base}/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
    {/each}
  </select>
</nav>

<style>
  nav {
    justify-content: space-between;
    padding: 0.5em 1em 0.5em;
    max-width: 1024px;
    margin: auto;
    color: #de45aa;
  }

  .logo {
    height: 80px;
    max-height: 80px;
    width: auto;
  }

  .name {
    align-self: center;
    /* margin-right: 1.5rem; */
    font-size: 28px;
    font-family: "Laila", serif;
    font-weight: 600;
    transition: color 0.75s;
    padding-left: 10px;
  }

  @media (max-width: 640px) {
    .name {
      font-size: 24px;
    }

    .menu a {
      font-size: 12px;
    }
  }

  :root {
    --body-bg-color: #1a1c1d;
    --text-color: #aaaebc;
    --red: #e74c3c;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  .menu li {
    margin-right: 10px;
  }

  .menu a {
    position: relative;
    display: block;
    padding: 0.1em;
  }

  .menu a svg {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 70%;
    z-index: -1;
  }

  .menu a svg path {
    fill: transparent;
    stroke-width: 6px;
    stroke-dasharray: 1210.709716796875;
    stroke-dashoffset: -1210.709716796875;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.29, 0.68, 0.74, 1.02);
  }

  .menu a:hover svg path,
  .menu a:hover svg path .active {
    stroke-dashoffset: 0;
  }

  .name:hover {
    background: linear-gradient(
      to left,
      #4c136f 20%,
      #eb3de4 30%,
      #56bbb7 70%,
      #efb215 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 200% auto;
    animation: textShine 7s ease-in-out infinite alternate;
    text-decoration: none;
  }

  @keyframes textShine {
    to {
      background-position: 200%;
    }
  }
</style>
