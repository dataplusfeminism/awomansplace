<script>
  import { page } from '$app/stores';
  import { t, locale } from '$lib/translations';

  const { status } = $page;
</script>

<div class="content">
  <h1>Error occured ({status})</h1>
</div>