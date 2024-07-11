<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
  import { css } from '../styles/stitches.config';

  const classes = {
    button: css({}),
  };
</script>

<button on:click={increment} class={classes.button()}>
  count is {count}
</button>
