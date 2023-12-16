<script lang="ts">
    import { AccordionItem, Accordion, Hr } from 'flowbite-svelte';
</script>

<article>
    <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Programma</h1>
    <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Descrizione del programma di confronti</div>
    <Hr classHr="my-8" />

    <Accordion>
        <AccordionItem>
          <span slot="header">My Header 1</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">My Header 2</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">My Header 2</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
              <li>
                <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
              </li>
              <li>
                <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
              </li>
            </ul>
          </AccordionItem>
    </Accordion>

</article>