<template>
  <modal name="profile-modal" :adaptive="true" width="451" height="auto" classes="profile-modal">
    <img
      class="profile-logo"
      gravatar-src="menu.security.userEmail()"
      gravatar-size="75"
      src="//www.gravatar.com/avatar/ff059e9c0e758483b65521cb01bfced6?size=75"
    />
    <p class="profile-logo-text">
      Profile images are handled via
      <a href="http://www.gravatar.com">
        <em>gravatar.com</em>
      </a>
    </p>
    <form name="userProfileForm" required class="profile-form">
      <p class="profile-form-title">Change credentials</p>
      <input
        name="userName"
        type="text"
        ng-model="menu.userName"
        autocomplete="off"
        placeholder="Name"
        class="form-input form-input-next"
      />
      <input
        name="userEmail"
        type="email"
        ng-model="menu.userEmail"
        autocomplete="off"
        placeholder="Email"
        class="form-input form-input-next"
      />
      <button class="profile-form-button" ng-click="menu.saveUserProfile()">Save</button>
    </form>
    <form name="changePasswordForm" required class="profile-form">
      <p class="profile-form-title">Change password</p>
      <input
        name="oldPassword"
        type="text"
        ng-model="menu.userPassword"
        autocomplete="off"
        placeholder="Old password"
        class="form-input form-input-next"
      />
      <input
        name="newPassword"
        type="password"
        ng-model="menu.newUserPassword"
        autocomplete="off"
        placeholder="New password"
        class="form-input form-input-next"
      />
      <input
        name="confirmPassword"
        type="password"
        ng-model="menu.confirmUserPassword"
        autocomplete="off"
        placeholder="Confirm password"
        class="form-input form-input-next"
      />
      <button class="profile-form-button" ng-click="menu.changeUserPassword()">Change password</button>
    </form>
    <form name required class="profile-form">
      <p class="profile-form-title">Notifications</p>
      <hr />
      <div class="profile-notifications">
        <p class="profile-notifications-text">Send me emails!</p>
        <input
          type="checkbox"
          name="sendNotifications"
          ng-model="enabled"
          class="profile-notifications-checkbox"
        />
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'ProfileModal',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss">
$profile-styles: (
  modal: bg-black-transparent-66 ml-auto flex flex-column flex-center ph-1
    pb-1p5,
  logo: mh-auto mt-2 display-inline-block fillet-large,
  logo-text: mt-1 text-center text-medium,
  form: mt-1p5,
  form-title: text-large,
  form-button: display-block button-purple text-center pv-0p5 ph-2 mt-1p5
    mh-auto fillet,
  notifications: flex flex-mid,
  notifications-text: mr-auto text-medium,
);

.profile {
  @include extendMap($profile-styles);
}

.profile-modal {
  // important because vue-js-modal applies inline styles that cant be overriden
  top: 75px !important; // nav height is 75px
  left: 0px !important;
}
</style>