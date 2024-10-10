<script>
  export let id = undefined
</script>

<div class='flex flex-col sm:flex-col md:flex-row py-2 my-1'>
  <div class='block-header w-full sm:w-full md:w-1/4 mb-1 sm:mb-1 md:mb-0'>
    <slot name='title'/>
  </div>

  <p class='block-text w-full sm:w-full md:w-3/4'>
    <slot name='text'/>
  </p>
</div>