class HomePage {
    headerElements = {
      homeButton: () => cy.contains('a','Home'),
      aboutButton: () => cy.contains('button','About'),
      contactsButton: () => cy.contains('button','Contacts'),
      guestLoginButton: () => cy.get('button.header-link').filter(':contains("Guest log in")'),
      signInButton: () => cy.get('button.btn.btn-outline-white.header_signin').filter(':contains("Sign In")')
    };
    footerElements = {
      facebookButton: ()=> cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]'),
      telegramButton: ()=> cy.get('a[href="https://t.me/ithillel_kyiv"]'),
      youtubeButton: ()=> cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
      instagramButton: ()=> cy.get('a[href="https://www.instagram.com/hillel_itschool/"]'),
      linkedinButton: ()=> cy.get('a[href="https://www.linkedin.com/school/ithillel/"]')
    }
    verifyHeaderElements() {
        this.headerElements.homeButton().should('be.visible');
        this.headerElements.aboutButton().should('be.visible');
        this.headerElements.contactsButton().should('be.visible');
        this.headerElements.guestLoginButton().should('be.visible');
        this.headerElements.signInButton().should('be.visible');
    };
    verifyFooterElements() {
      this.footerElements.facebookButton().should('be.visible');
      this.footerElements.telegramButton().should('be.visible');
      this.footerElements.youtubeButton().should('be.visible');
      this.footerElements.instagramButton().should('be.visible');
      this.footerElements.linkedinButton().should('be.visible');
  };
  }

  export default new HomePage();

