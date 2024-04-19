<template>
    <b-container class="home">
        <b-row>
            <b-col>
                <h1>Login</h1>
                <div v-if="!$auth.loading">
                    <button class="btn btn-success" v-if="!$auth.isAuthenticated" @click="login">Log in</button>
                    <button class="btn btn-danger" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "home",
    methods: {
        login() {
            this.$auth.loginWithRedirect();
        },
        logout() {
            this.$auth.logout({
                logoutParams: {
                    returnTo: window.location.origin,
                },
            });
        },
    },
};
</script>