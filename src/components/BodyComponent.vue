<template>
  <div>
    <div class="sm:pl-2 sm:pr-2 sm:pt-20  md:pl-40 md:pr-40 md:pt-10  lg:pl-60 lg:pr-60 lg:pt-20">
      <div class="bg-white/50 rounded p-7 ">
        <h1 class="pb-7">{{ this.$route.name }}</h1>
        <div class="grid gap-2 sm:grid-cols-1 lg:grid-cols-1">
          <div class="text-justify items-center ">
            <p>
              <slot />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
