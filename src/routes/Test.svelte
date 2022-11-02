<script>
  export let row
  // export let column
</script>

<a href={'/connector/' + row.name}>{row.name}</a>
<!-- <pre>
  {JSON.stringify(row, null, 2)}
  {JSON.stringify(column, null, 2)}
</pre> -->