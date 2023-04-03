
describe('test1', () =>{
    beforeEach(() => {
      cy.visit("https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home")
      cy.get(".fa.fa-info-circle").click()
      cy.xpath("//a[normalize-space()='OK']").click
    })

context("verify everything",() => {

    it('verify title page', () =>{
        cy.xpath("//title").invoke('text') // to eliminate entities
        .invoke('replace', /\u00a0/g, ' ') // replace entity w space
        .should('eq', 'Joget DX > App Center')
    } )

    it('verify logo is exist', () =>{
        cy.get('[src="/jw/images/v3/logo.png"]').should('be.visible')
    } )

    it('verify background', () =>{ 
        cy.get("#banner").should('be.visible')
        cy.get("div[id='banner'] h1").should('be.visible')
    })

    context("availability clock",() => {

        it('verify clock is available',{
            viewportHeight: 1080,
            viewportWidth: 1920,
          },() =>{ 
            cy.get("#clock").should('be.visible')
        })

        it('verify clock is not available',{
            viewportHeight: 1024,
            viewportWidth: 768,
          }, () =>{ 
            cy.get("#clock").should('not.visible')
        })
    
        })

    

    it('verify number of apps', () =>{ 
        cy.xpath("//ul[@id='apps']/li").should('have.length',23)
    })

    

    it('verify name of apps', () =>{ 
        cy.xpath("//div[normalize-space()='Asset Management']").should('contain','Asset Management')
        cy.xpath("//div[normalize-space()='Asset Management and Tracking']").should('contain','Asset Management and Tracking')

        cy.xpath("//div[@class='userview-name'][normalize-space()='Customer Relationship Management']").should('contain','Customer Relationship Management')
        cy.xpath("//div[@class='app-name'][normalize-space()='Customer Relationship Management']").should('contain','Customer Relationship Management')

        cy.xpath("//div[@class='userview-name'][normalize-space()='Document Repository']").should('contain','Document Repository')
        cy.xpath("//div[@class='app-name'][normalize-space()='Document Repository']").should('contain','Document Repository')

        cy.xpath("//div[normalize-space()='Employee Services Portal']").should('contain','Employee Services Portal')
        cy.xpath("//div[normalize-space()='Employee Portal']").should('contain','Employee Portal')

        cy.xpath("//div[@class='userview-name'][normalize-space()='Internal Service Request']").should('contain','Internal Service Request')
        cy.xpath("//div[@class='app-name'][normalize-space()='Internal Service Request']").should('contain','Internal Service Request')
        
        cy.xpath("//div[@class='userview-name'][normalize-space()='Joget DX Showcase']").should('contain','Joget DX Showcase')
        cy.xpath("//div[@class='app-name'][normalize-space()='Joget DX Showcase']").should('contain','Joget DX Showcase')

        cy.xpath("//div[normalize-space()='Joget Knowledge Base']").should('contain','Joget Knowledge Base')
        cy.xpath("//div[normalize-space()='Joget KB']").should('contain','Joget KB')

        cy.xpath("//div[normalize-space()='Joget Learning Academy']").should('contain','Joget Learning Academy')
        cy.xpath("//div[normalize-space()='Joget Academy']").should('contain','Joget Academy')
        
        cy.xpath("//div[normalize-space()='Joget Q&A']").should('contain','Joget Q&A')
        cy.xpath("//div[normalize-space()='Joget Community Q&A']").should('contain','Joget Community Q&A')
        
        cy.xpath("//div[normalize-space()='Service Help Desk for DX']").should('contain','Service Help Desk for DX')
        cy.xpath("//div[normalize-space()='Service Help Desk DX']").should('contain','Service Help Desk DX')

        cy.xpath("//div[@class='userview-name'][normalize-space()='Travel Advisory Tracking']").should('contain','Travel Advisory Tracking')
        cy.xpath("//div[@class='app-name'][normalize-space()='Travel Advisory Tracking']").should('contain','Travel Advisory Tracking')

        cy.xpath("//div[@class='userview-name'][normalize-space()='Travel Request']").should('contain','Travel Request')
        cy.xpath("//div[@class='app-name'][normalize-space()='Travel Request']").should('contain','Travel Request')
    })
})

context("button functionality",() => {

    it('search button', () =>{ 
    cy.get('.filterinput').type('asset')
    cy.xpath("//a[normalize-space()='OK']").click()
    cy.wait(500);
    cy.get('ul li:not([style="display: none;"]):not(.grid-dummy-fix)') // select all li elements that don't have the display: none style and don't have the class "grid-dummy-fix"
    .find('div.userview-name') // find the div element within the selected li element
    .contains('asset',{matchCase: false})
    .should('be.visible')
    })

    it('login button', () =>{ 
        cy.xpath("//a[@class='btn waves-effect btn waves-button waves-float'][normalize-space()='Login']").click()
        cy.wait(1000)
        cy.url().should('contain', 'https://qainterview.cloud.joget.com/jw/web/login')
    
        })

    it('home button', () =>{ 
        cy.get("a[title='Home']").click()
        cy.wait(1000)
        cy.url().should('contain', 'https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home')
        
        })

    })
})

