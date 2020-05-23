<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                :href="source"
                                                icon
                                                large
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-code-tags</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Source</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit="login">
                                    <v-text-field
                                            label="Email"
                                            name="email"
                                            type="email"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            has_error: false
        }
    },

    mounted() {

    },

    methods: {
        login() {
            var redirect = this.$auth.redirect()
            var app = this
            this.$auth.login({
                params: {
                    email: app.email,
                    password: app.password
                },
                success: function() {
                    const redirectTo = redirect ?
                        redirect.from.name :
                        this.$auth.user().role === 2 ?
                        'admin.dashboard' : 'dashboard'
                    this.$router.push({
                        name: redirectTo
                    })
                },

                error: function() {
                    app.has_error = true
                },

                rememberMe: true,
                fetchUser: true
            })
        }
    }

}
</script>
