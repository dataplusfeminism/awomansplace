<script>
  import { page } from '$app/stores';
  import { t, locale } from '$lib/translations';

  const { status } = $page;
  export let error;
</script>

<div class="content">
  <h1>{$t('error.message')} ({status})</h1>
  <p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
  <br>
  <br>
  {$locale} – {$t(`lang.${$locale}`)}

  <a href="/">Go back home</a>
</div>

<style>
  
</style>