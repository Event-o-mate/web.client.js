<template>
  <section class="profile-card">
    <img
      class="profile-logo"
      src="//www.gravatar.com/avatar/ff059e9c0e758483b65521cb01bfced6?size=75"
    />
    <p class="profile-logo-text">
      Profile images are handled via
      <a href="http://www.gravatar.com">
        <em>gravatar.com</em>
      </a>
    </p>
    <form name="userProfileForm" autocomplete="false" required class="profile-form">
      <p class="profile-form-title">Change credentials</p>
      <input name="userName" type="text" placeholder="Name" class="form-input form-input-next" />
      <input name="userEmail" type="email" placeholder="Email" class="form-input form-input-next" />
      <button class="profile-form-button" ng-click="menu.saveUserProfile()">Save</button>
    </form>
    <form name="changePasswordForm" autocomplete="false" required class="profile-form">
      <p class="profile-form-title">Change password</p>
      <input
        name="oldPassword"
        type="text"
        placeholder="Old password"
        class="form-input form-input-next"
      />
      <input
        name="newPassword"
        type="password"
        placeholder="New password"
        class="form-input form-input-next"
      />
      <input
        name="confirmPassword"
        type="password"
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
        <input name="sendNotifications" type="checkbox" class="profile-notifications-checkbox" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ProfileCard',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
$profile-styles: (
  card: relative w-450 bg-black-transparent-66 ml-auto flex flex-column
    flex-center ph-1 pb-1p5,
  logo: mh-auto mt-2 inline-block fillet-large,
  logo-text: mt-1 text-center text-medium,
  form: mt-1p5,
  form-title: text-large,
  form-button: block button-purple text-center pv-0p5 ph-2 mt-1p5 mh-auto fillet,
  notifications: flex flex-mid,
  notifications-text: mr-auto text-medium,
);

.profile {
  @include extendMap($profile-styles);
}
</style>
