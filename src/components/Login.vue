<template>
    

  <!-- LOGIN MENU-->
<script type="text/ng-template" id="loginDialog">
  <form name="loginForm" required>
    <div class="login-dialog">
      <input type="email" name="userEmail" class="input-email-login ng-remove-focus" placeholder="email*" ng-model="email" autocomplete="off" required>
      <input name="userPassword" class="input-password-login ng-remove-focus" placeholder="password*" type="password" ng-model="password" autocomplete="off" required>
      <button class="button-dropdown  btn" ng-click="login()"> LOGIN</button>
      <p><a href ng-click=closeThisDialog("register")>Don't have an account? Register.</a></p>

      <!--alerts-->
      <!-- email -->
      <div ng-messages="loginForm.userEmail.$error" ng-if="loginForm.userPassword.$touched">
        <div ng-message="required" class="alert alert-danger login-errors" role="alert">
          Please eneter all required fields!
        </div>
        <div ng-message="email" class="alert alert-danger login-errors" role="alert">
          Input is not a valid email!
        </div>
      </div>

      <!-- password -->
      <div ng-messages="loginForm.userPassword.$error" ng-if="loginSubmited">
        <div ng-message="required" class="alert alert-danger login-errors" role="alert">
          Please eneter all required fields!
        </div>
      </div>

      <!-- submited -->
      <div class="alert alert-danger text-center login-errors" role="alert" ng-hide="!userValid" ng-show="loginSubmited && !userValid">
        {{ errorMsg }}
      </div>

    </div>

  </form>

</script>

</template>