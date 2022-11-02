<script>
  export let row
  import { showLogos } from './shared.js'
  // export let column
</script>

{#if $showLogos}
<img src={row.iconUrl} alt={row.name} class="m-0 h-6 mr-2 inline" />
{/if}
<a href={'/connector/' + row.name}>
  {row.name}</a>
<!-- <pre>
  {JSON.stringify(row, null, 2)}
  {JSON.stringify(column, null, 2)}
</pre> -->