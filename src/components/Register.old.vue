<template>
  <div class="boxx">
    <div class="partition" id="partition-register">
      <div class="partition-form">
        <form autocomplete="false">
          <div class="autocomplete-fix">
            <input type="password" />
          </div>

          <input type="text" placeholder="Name" v-model="model.name" />
          <input type="text" placeholder="Email" v-model="model.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="model.password"
          />
        </form>

        <div class="button-set mt-3">
          <button class="register-btn2" @click="login()">Register</button>
          <p>
            <a class="alert-login" v-if="validated" style="color: white;"
              >Name email and password need to be present.</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const MODAL_WIDTH = 656
// import { ValidationProvider } from 'vee-validate'
import UserService from '@/services/UserService.vue'

export default {
  name: 'RegisterForm',
  components: {
    // ValidationProvider,
    // UserService,
  },
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
      },
      modalWidth: MODAL_WIDTH,
      errors: [],
      isValidationAllowed: false,
      searchTerm: '',
    }
  },
  computed: {
    validated() {
      return this.isValidationAllowed && !this.searchTerm
    },
  },
  methods: {
    validate() {
      this.isValidationAllowed = true
    },
    created() {
      this.modalWidth =
        window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
    },
    login() {
      const user = {
        name: this.model.name,
        email: this.model.email,
        password: this.model.password,
      }
      UserService.register(user)
        .then(() => {
          this.$router.push('home')
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
$background_color: #404142;
$github_color: #dba226;
$facebook_color: #3880ff;
.boxx {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  // overflow: hidden;
  width: 30%;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 1;
  text-align: center;
  padding: 20px;
  // float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 50%;
    &#bp-right {
      background: url('/static/panorama.jpg') no-repeat top left;
      border-left: 1px solid #eee;
    }
  }
  .box-messages {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .box-error-message {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: 0;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
    font-size: 11px;
    color: white;
    background: #f38181;
  }
  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 300;
    }
    .partition-form {
      padding: 20px;
      box-sizing: border-box;
    }
  }
  input[type='password'],
  input[type='text'] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #dddedf;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
  }
  button {
    background: #995aa4;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: #fff;
    cursor: pointer;
    border: 1px solid #5f0ca4;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: 1px solid #5f0ca4;
      color: white;
    }
  }
  .large-btn {
    width: 100%;
    background: white;
    span {
      font-weight: 600;
    }
    &:hover {
      color: white !important;
    }
  }
  .button-set {
    margin-bottom: 8px;
    width: 100%;
  }
  #register-btn2 {
    color: #995aa4;
    background: #995aa4 !important;
    background-color: #995aa4 !important;
    padding: 10px;
    box-shadow: 2px 2px 0 #5f0ca4;
    border-style: none;
    width: 100%;
  }
  #goto-signin-btn {
    margin-left: 8px;
    color: white;
    background-color: #995aa4;
    padding: 10px;
    box-shadow: 2px 2px 0 #5f0ca4;
    border-style: none;
  }
  .facebook-btn {
    border-color: $facebook_color;
    color: $facebook_color;
    &:hover {
      border-color: $facebook_color;
      background: $facebook_color;
    }
  }
  .github-btn {
    border-color: $github_color;
    color: $github_color;
    &:hover {
      border-color: $github_color;
      background: $github_color;
    }
  }
  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
