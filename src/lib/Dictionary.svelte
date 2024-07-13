<script lang="ts">
  import { css } from '../styles/stitches.config';
  import DictionaryDisplay from './DictionaryDisplay.svelte';
  import type { Dictionary } from './types';
  import { fetchWordInformation } from './utils';

  let word: string = '';
  let dictionary: Dictionary = {
    meanings: [],
    phonetic: '',
    word: '',
    sourceUrls: [],
  } as Dictionary;
  let error = '';
  let initialLoad = true;

  //   event handlers
  async function handleSubmit() {
    initialLoad = false;
    if (word === '') {
      error = "Whoops, can't be empty";
    }
    const data = await fetchWordInformation(word);
    if (data instanceof Error) {
      error = data.message;
      throw new Error(error);
    }
    dictionary = data;
    word = '';
  }

  //   styles
  const classes = {
    input: css({
      width: '100%',
      height: 64,
      borderRadius: 16,
      paddingLeft: '1.5rem',
      border: 0,
      outline: 'transparent 1px solid',
      backgroundColor: '$gray_100',
      fontWeight: 'bold',
      color: '$black_200',
      fontSize: '20px',
      position: 'relative',
      letterSpacing: '-0.02em',
      marginTop: '2rem',

      '&:focus': {
        outline: '$purple 1px solid',
        transition: 'outline 0.25s ease-in-out',
      },

      '&::placeholder': {
        opacity: 0.25,
      },
    }),
    button: css({
      all: 'unset',
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(35%)',
    }),
  };
</script>

<form
  method="get"
  class={css({ position: 'relative', marginBottom: 45, marginTop: 52 })()}
  on:submit|preventDefault={handleSubmit}
>
  <input
    type="text"
    placeholder="Search for any word"
    class={classes.input()}
    bind:value={word}
  />
  <button
    type="submit"
    class={classes.button()}
    on:click|preventDefault={handleSubmit}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      ><path
        fill="none"
        stroke="#A445ED"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      /></svg
    >
  </button>
</form>

{#if !initialLoad && error !== ''}
  <div>Nope, try again!</div>
{:else}
  {#key dictionary}
    <DictionaryDisplay {dictionary} />
  {/key}
{/if}
