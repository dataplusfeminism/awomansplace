<script context="module">
    import { setContext, getContext } from "svelte";
    import { writable } from "svelte/store";

    const key = {};

    export const getAccordionContext = () => getContext(key);
    export const createAccordionContext = () => {
        const current = writable(null);
        const context = { current };
        setContext(key, context);

        return context;
    };
</script>

<script>
    import { quadInOut } from "svelte/easing";
    import { slide } from "svelte/transition";

    export let open = true;

    const { current } = getAccordionContext();
    const currentKey = {};

    createAccordionContext(); // Context for children

    function handleClick() {
        open = !open;
        if (open) $current = currentKey;
    }

    $: if ($current != currentKey) open = false;
</script>

<div class="accordion">
    <div class="header" on:click={handleClick}>
        <div class="text">
            <span class={`arrow ${open ? "arrow-up" : ""}`}>▼</span>
            <slot name="title"></slot>
        </div>
        <slot name="image"></slot>
    </div>

    {#if open}
        <div
            class="details"
            transition:slide={{ duration: 150, easing: quadInOut }}
        >
            <slot name="details"></slot>
        </div>
    {/if}
</div>

<style>
    div.accordion {
        margin: 1rem 0;
    }

    div.accordion::after {
        content: "";
        height: 20px;
        width: 100%; /* or i.e: 500px */
        background: url("http://lorempixel.com/g/400/100/?example.jpg");
    }

    div.header {
        /* display: flex;
        width: 100%; */
    }

    .text {
        flex: 1;
        display: flex;
        align-items: center; /* Center the arrow and text vertically */
    }

    div.details {
        background-color: transparent;
        padding: 1rem;
    }

    .arrow {
        transition: transform 0.3s;
        margin-right: 0.5rem; /* Spacing between arrow and text */
    }
    .arrow-up {
        transform: rotate(180deg);
    }
</style>
