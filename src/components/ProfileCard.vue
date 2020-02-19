<template>
  <div class="container snt-user-profile" ng-show="menu.userProfileOpen">
    <div class="row">
      <div class="col-md-12">
        <form name="userProfileForm" required class="ng-pristine ng-valid ng-valid-email">
          <div class="form-group">
            <img
              class="snt-user-profile-settings-icon"
              gravatar-src="menu.security.userEmail()"
              gravatar-size="100"
              src="//www.gravatar.com/avatar/ff059e9c0e758483b65521cb01bfced6?size=100"
            />
            <p class="text-center">
              Profile images are handled via
              <a href="http://www.gravatar.com" target="_blank">
                <em>gravatar.com</em>
              </a>
            </p>
          </div>
          <div class="form-group">
            <input
              name="userName"
              type="text"
              ng-model="menu.userName"
              autocomplete="off"
              class="snt-profile-form-input ng-pristine ng-untouched ng-valid ng-not-empty"
            />
          </div>
          <div class="form-group">
            <input
              name="userEmail"
              type="email"
              ng-model="menu.userEmail"
              autocomplete="off"
              class="snt-profile-form-input ng-pristine ng-untouched ng-valid ng-valid-email ng-not-empty"
            />
          </div>
          <div class="form-group">
            <button class="button-dropdown btn" ng-click="menu.saveUserProfile()">Save</button>
          </div>
          <textarea name style="display: none;"></textarea>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form name="changePasswordForm" required class="ng-pristine ng-valid">
          <div class="form-group">
            <input
              name="oldPassword"
              placeholder="old password*"
              type="password"
              ng-model="menu.userPassword"
              autocomplete="off"
              class="snt-profile-form-input ng-pristine ng-untouched ng-valid ng-empty"
            />
          </div>
          <div class="form-group">
            <input
              name="newPassword"
              placeholder="new password*"
              type="password"
              ng-model="menu.newUserPassword"
              autocomplete="off"
              class="snt-profile-form-input ng-pristine ng-untouched ng-valid ng-empty"
            />
          </div>
          <div class="form-group">
            <input
              name="confirmPassword"
              placeholder="confirm password*"
              type="password"
              ng-model="menu.confirmUserPassword"
              autocomplete="off"
              class="snt-profile-form-input ng-pristine ng-untouched ng-valid ng-empty"
            />
          </div>
          <div class="form-group">
            <button class="button-dropdown btn" ng-click="menu.changeUserPassword()">Change Password</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form name="changePasswordForm" required class="ng-pristine ng-valid">
          <div class="form-group">
            <label>
              <h3>Notifications</h3>
            </label>
            <hr />
            <span>Send me emails!</span>
            <span
              class="snt-email-notifications-switch green ng-ui-switch snt-email-notifications-switch green ng-empty ng-valid"
              ng-click="undefined ? enabled : enabled=!enabled"
              ng-class="{ checked:enabled, disabled:undefined }"
              id="enabled"
              name="enabled"
              ng-model="enabled"
            >
              <small></small>
              <input
                type="checkbox"
                id="enabled"
                name="enabled"
                ng-model="enabled"
                style="display:none"
                class="ng-pristine ng-untouched ng-valid ng-empty"
              />
              <span class="switch-text"></span>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
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
<style lang="scss">
</style>