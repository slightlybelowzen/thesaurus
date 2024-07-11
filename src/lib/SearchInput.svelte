<script lang="ts">
  import { css } from '../styles/stitches.config';

  let word: string = '';
  interface Definition {
    definition: string;
    antonyms: string[];
    synonyms: string[];
  }

  interface Meaning {
    definitions: Definition[];
    partOfSpeech: string;
    antonyms: string[];
    synonyms: string[];
  }

  interface ResponseObject {
    phonetic: string;
    word: string;
    sourceUrls: string[];
    meanings: Meaning[];
  }

  //   event handlers
  async function handleSubmit() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('No results found');
    }
    const responseObject = data[0] as ResponseObject;
    console.log(responseObject.meanings);
  }

  //   styles
  const classes = {
    container: css({
      position: 'relative',
    }),
    input: css({
      width: '100%',
      height: 64,
      borderRadius: 16,
      paddingLeft: '1.5rem',
      border: 0,
      outline: 'transparent 1px solid',
      backgroundColor: '$gray_200',
      fontFamily: '$sans_serif',
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
        fontWeight: 'bold',
        color: '$black_200',
        opacity: 0.5,
        fontSize: '20px',
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
  class={classes.container()}
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
