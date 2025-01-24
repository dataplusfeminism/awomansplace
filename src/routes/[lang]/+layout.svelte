<script>
  import { t, locales, locale } from '$lib/translations';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  import "../../app.css";
  import Nav from "../../components/Nav.svelte";

  const count = writable(2);

  export let segment;
  $: ({ route } = $page.data);
</script>

<Nav {segment} />
<slot />

<!-- <slot />

<select on:change="{({ target }) => goto(target.value)}">
  {#each $locales as lc}
    <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
  {/each}
</select> -->