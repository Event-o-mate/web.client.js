<template>
<div class="form-group">
              
            <div class="details-wrapper event-section">
                <div class="container" v-if="selectedPage === 'Comment'">
                  <div class="row">
                    <div class="col-md-2"><img src="img/user-placeholder.png" class="snt-comment-profile-img"></div>
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

                <ul class="widgets-list" id="widgets" @click="menuOpen = !menuOpen">
                  <li class="comment-widget-icon" v-if="menuOpen" @click="selectedPage ='Comment'"></li>
                  <li class="photos-widget-icon" v-if="menuOpen" @click="selectedPage ='Img'"></li>
                  <li class="fb-invitations-widget-icon" v-if="menuOpen" @click="selectedPage ='FB'" ><div class="fb-icon-bg"></div></li>
                </ul> 
              </div>
</div>
</template>
<script>
export default {
    name: "DescriptionForm",
    data() {
        return{
            model: {},
            open: false,
            errors: false,
            errorMessage: null,
            selectedPage: '',
            menuOpen: true
        }   
    },
    methods: {
      initalStateLoader() {
      this.model = {
        description: '',
        comments: '',
        imggallery: '',
        fbinvitations: '',
      };
    },
    handleRemove() {
        this.addCounter--
    },
    }
}
</script>