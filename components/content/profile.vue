<script lang="ts" setup>
const { githubUsername } = useAppConfig()

const githubProfileURL = `https://github.com/${githubUsername}`
const githubAvatarURL = `${githubProfileURL}.png`
const twitterProfileURL = `https://twitter.com/${githubUsername}`
</script>

<template>
  <div class="profile-container">
    <div class="content-container">
      <nuxt-link :href="githubProfileURL" target="_blank" rel="noopener">
        <prose-img :src="githubAvatarURL" class="github-avatar" />
      </nuxt-link>
    </div>
    <div class="content-container social-links-container">
      <prose-a :href="githubProfileURL" target="_blank" rel="noopener">
        Github
      </prose-a>
      <prose-a :href="twitterProfileURL" target="_blank" rel="noopener">
        Twitter
      </prose-a>
    </div>
    <div class="content-container">
      <prose-p>
        {{
          `Hey, I'm ${githubUsername}. You can call me Horu!`
        }}
      </prose-p>
    </div>
  </div>
</template>

<style lang="scss">
.profile-container {
  --at-apply: "max-w-100% justify-center flex flex-col dark:c-gray";

  .content-container {
    --at-apply: "flex flex-row justify-center";

    .github-avatar {
      --at-apply: "h-50 w-50 rounded-[50%]";
    }
  }

  .social-links-container {
    * {
      --at-apply: "mx-4";
    }
  }
}
</style>
