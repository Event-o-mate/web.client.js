<template>
  <div class="event-description">
    <button class="event-description-close-button" aria-label="Close" @click="$emit('remove')">
      <p>&times;</p>
    </button>
    <div class="container" v-if="selectedPage === 'Comment'">
      <div class="row">
        <div class="col-md-2">
          <img src="img/user-placeholder.png" class="snt-comment-profile-img" />
        </div>
        <div class="snt-comment-content col-md-10">
          <textarea placeholder="Write a comment ..."></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <a class="snt-submit-comment btn btn-xs btn-primary disabled">Submit</a>
        </div>
      </div>
    </div>

    <div class="container" v-if="selectedPage === 'Img'">
      <div class="row">
        <div class="col-md-12">
          <p>Image Gallery section will be added soon!</p>
        </div>
      </div>
    </div>

    <div class="container" v-if="selectedPage === 'FB'">
      <div class="row">
        <div class="col-md-12">
          <p>Facebook Invitations section will be added soon!</p>
        </div>
      </div>
    </div>

    <ul class="widgets-list" id="widgets" v-if="menuOpen" @click="menuOpen = !menuOpen">
      <li class="comment-widget-icon" @click="selectedPage ='Comment'" />
      <li class="photos-widget-icon" @click="selectedPage ='Img'" />
      <li class="fb-invitations-widget-icon" @click="selectedPage ='FB'" />
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DescriptionForm',
  data() {
    return {
      model: {},
      open: false,
      errors: false,
      errorMessage: null,
      selectedPage: '',
      menuOpen: true,
    }
  },
  methods: {
    initalStateLoader() {
      this.model = {
        description: '',
        comments: '',
        imggallery: '',
        fbinvitations: '',
      }
    },
    handleRemove() {
      this.addCounter--
    },
  },
})
</script>

<style scoped lang="scss">
$event-description-styles: (
  base: bg-black-transparent-66 p-2 mt-2 relative,
  close-button: absolute top right text-large ph-0p5,
);

.event-description {
  @include extendMap($event-description-styles);
}

.comment-widget-icon {
  background: url('/img/comment.svg') center center no-repeat;
  background-size: 100% 100%;
}

.photos-widget-icon {
  background: url('/img/image.svg') center center no-repeat;
  background-size: 100% 100%;
}

.fb-invitations-widget-icon {
  background: url('/img/mail.svg') center center no-repeat;
  background-size: 100% 100%;
}

.widgets-list {
  list-style: none;
  background-size: contain;
  padding: 0;
  margin: 0;
  text-align: center;
  align-items: center;
}

.widgets-list li {
  display: inline-block;
  width: 60px;
  height: 70px;
  cursor: pointer;
  margin: 7px;
  background-size: 70% 70%;
}
.widgets-list li {
  width: 75px;
}
</style>