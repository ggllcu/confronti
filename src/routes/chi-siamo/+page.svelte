<script lang="ts">
    import { Hr, Img, Timeline, TimelineItem} from 'flowbite-svelte';
</script>
 
<div>
  <Img src="https://placehold.co/1200x800" alt="sample 1" />
  <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Chi siamo</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius, diam id iaculis interdum, dui neque cursus sapien, at euismod lorem est id ex. Donec quis hendrerit leo, ac porta nibh. Nullam nec dignissim ligula. Vivamus id erat sapien. Cras efficitur sapien vel sagittis suscipit. Nam odio lorem, dapibus a suscipit quis, pretium at urna. Cras odio tellus, condimentum id ligula nec, pretium varius magna. 
  </p>
  <Hr classHr="my-8" />
  <Timeline>
    <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </TimelineItem>
    <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </TimelineItem>
    <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
  </Timeline>
</div>