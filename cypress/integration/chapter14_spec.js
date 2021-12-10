describe('Checking ', function () {

    before (function () {
        cy.fixture('chapter_14').then((chapter_14) => {
            this.chapter_14 = chapter_14
        })
    })
    
    it('Does something', function () {

        cy.visit('https://weather.com/?Goto=Redirected')
        
        cy.get('#truste-consent-button')
            .click()
        
        cy.get('[aria-label="Close Button"]').should('be.visible')
            .click()
        
        
        cy.get('#MainMenuTrigger')
            .click()
            
        cy.get('button:contains("Privacy Policy")')
            .click()

        cy.contains('Lei Geral de Proteção de Dados Pessoais (LGPD) Notice').click()

        cy
            .get('#lgpd-notice-old').invoke('text').then((text1) => {
                    expect(text1).to.eq(this.chapter_14.chapterText)
                })
            })

    })
