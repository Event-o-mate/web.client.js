<template>
    <nav class="snt-navbar navbar navbar-expand-lg navbar-dark fixed-top ng-scope">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <a class="navbar-brand logo-event-o-mate" href="#/">Event-O-Mate</a>
        <div class="collapse navbar-toggleable-md" id="navbarSupportedContent" aria-expanded="false">
            

            <ul class="nav navbar-nav">
                <div class="nav-item">
                    <a class="nav-link create-event-button" href="#/create_event" >Create event</a>
                </div>

                <div class="nav-item">
                    <a class="nav-link register-button" v-if="isAuthenticated === false"  @click="handleRegister()" > Register</a>
                </div>

                <div class="nav-item">
                    <a class="nav-link dashboard-button" v-if="isAuthenticated === true"  href="#/dashboard"> Dashboard</a>
                </div>
                
                <div class="nav-item">
                    <a class="nav-link login-button" v-if="isAuthenticated === false" @click="handleLogin()" > Log In</a>
                </div>

                <div class="nav-item">
                    <a class="nav-link logout-button" v-if="isAuthenticated === true" @click="menu.logout()" href>Log Out </a>
                </div>
            </ul>

        </div>
        <modal :name="'demo-login'">
            <login-form
              :show="showLoginModal"
              @cancel="afterAdd('cancel')"
              @success="afterAdd('success')"
              @close="afterClose('close')"
              @clos="afterClose2('close')" />
        </modal>

        <modal :name="'demo-register'">
            <register-form
              :show="showRegisterModal"
              @cancel="afterAdd('cancel')"
              @success="afterAdd('success')" />
        </modal>
    </nav>
</template>
<script>

import LoginForm from '@/components/Login.vue'
import RegisterForm from '@/components/Register.vue'

export default {
    components: {
        LoginForm,
        RegisterForm
    },
    data(){
    return {
        showLoginModal: false,
        showRegisterModal: false,
        userValid: false,
        isAuthenticated: false
        }
    },
    methods: {
        afterAdd (ev) {
            this.$modal.hide('demo-login');
            this.isAuthenticated = true;
        },
        handleLogin () {
            this.$modal.show('demo-login');
        },
        handleRegister(){
            this.$modal.show('demo-register');
        },
        afterClose(ev) {
            this.$modal.hide('demo-login');
            this.$modal.show('demo-register');
        },
        afterClose2(ev) {
            this.$modal.hide('demo-login');
        },
        afterLogin () {
            this.userValid = true;
        },
        login() {
            this.isAuthenticated = true;
        },
        logout() {
            this.isAuthenticated = false;
        }

    
    }
}
</script>

