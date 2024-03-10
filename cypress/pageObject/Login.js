class Login {

    locUserName = '#APjFqb'

    typeText(userName) {
        cy.get(this.locUserName).type(userName);

    }
}

export default Login;