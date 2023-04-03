describe('test2', {
  viewportHeight: 1080,
  viewportWidth: 1920,
}, () =>{

  beforeEach(() => {

    cy.visit("https://www.joget.com")

  })
    context('dashboard', () => {
            
            it("navigate joget.dx", () => {
                            
                            cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget DX']").click()
                            cy.url().should('contain', 'https://www.joget.com/joget-dx.html')
                            cy.go('back')
                            cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                 })
                
                it("navigate joget.dx-8", () => {
                            
                            cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget DX']").trigger('mouseover')
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget DX 8']").click()
                            cy.url().should('contain', 'https://www.joget.com/dx-8.html')
                            cy.go('back')
                })

                it("navigate joget demo", () => {
                            
                            cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget DX']").trigger('mouseover')
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Request a Joget Demo']").click()
                            cy.url().should('contain', 'https://www.joget.com/request-a-joget-low-code-no-code-demo.html')
                            cy.go('back')
                })

                it("navigate joget mindshare",() => {
                            
                            cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget DX']").trigger('mouseover')
                            cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][contains(text(),'Joget Mindshare™ Series')]").click()
                            cy.url().should('contain', 'https://www.joget.com/mindshare-series.html')
                            cy.go('back')
                })
                        

                 it("navigate cloud", () => {
                    
                    cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                    cy.xpath("//div[@id='wsite-menus']//li[@id='wsite-nav-839417374477028970']//a[@class='wsite-menu-subitem']").invoke('removeAttr','target','_self').click()
                    cy.wait(2000)
                    cy.origin('https://www.jogetcloud.com', () => {
                       cy.url().should('contain','https://www.jogetcloud.com')
                       cy.go('back')
                  })
                   
                     })

                     it("navigate marketplace",() => {
                        
                        cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg625273062960364199']").click()
                        cy.xpath("//div[@id='wsite-menus']//li[@id='wsite-nav-671900411621837773']//a[@class='wsite-menu-subitem']").invoke('removeAttr','target','_self').click()
                        cy.wait(2000)
                        cy.origin('https://marketplace.joget.org/jw', () => {
                          cy.wait(2000)
                          cy.url().should('contain','https://marketplace.joget.org/jw/web/userview/mp/mpp/_/aa')
                          cy.go('back')
                          })
                        
                      })


                      it("navigate solutions", () => {
                                    
                                    cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Solutions']").click()
                                    cy.url().should('contain', 'https://www.joget.com/solutions.html')
                                    cy.go('back')
                         })

                         it("validate pricing",() => {
                                      
                                      cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Pricing']").click()
                                      cy.url().should('contain', 'https://www.joget.com/pricing.html')
                                      cy.go('back')
                           })    
                           
                           it("navigate pricing", () => {
                                        
                                        cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Events']").click()
                                        cy.url().should('contain', 'https://www.joget.com/events.html')
                                        cy.go('back')
                             })   
                             

                             it("navigate technology partners", () => {
                                      
                                      cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg566428364434799759']").click()
                                      cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Technology Partners']").click()
                                      cy.url().should('contain', 'https://www.joget.com/technology-partners.html')
                                      cy.go('back')
                          })

                          it("navigate joget partners", () => {
                                    
                                    cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg566428364434799759']").click()
                                    cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget Partners']").click()
                                    cy.url().should('contain', 'https://www.joget.com/joget-partners.html')
                                    cy.go('back')
                        })
                        
                        it("navigate partnership prog", () => {
                                  
                                  cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg566428364434799759']").click()
                                  cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Partnership Program']").click()
                                  cy.url().should('contain', 'https://www.joget.com/partnership-program.html')
                                  cy.go('back')
                      })

                      it("navigate customer", () => {
                                
                                cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg868830556833651688']").click()
                                cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Customers']").click()
                                cy.url().should('contain', 'https://www.joget.com/customers.html')
                                cy.go('back')
                    })

                    it("navigate customer stories",() => {
                              
                              cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg868830556833651688']").click()
                              cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Joget Customer Stories']").click()
                              cy.url().should('contain', 'https://www.joget.com/customer-stories.html')
                              cy.go('back')
                  })

                it("navigate review", () => {
                          
                          cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg868830556833651688']").click()
                          cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Reviews']").click()
                          cy.url().should('contain', 'https://www.joget.com/reviews.html')
                          cy.go('back')
                })

                it("navigate social responsibility", () => {
                          
                          cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg868830556833651688']").click()
                          cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='Social Responsibility']").click()
                          cy.url().should('contain', 'https://www.joget.com/csr.html')
                          cy.go('back')
                })

                it("navigate about joget", () => {
                          
                          cy.xpath("//div[@class='nav desktop-nav']//li[@id='pg868830556833651688']").click()
                          cy.xpath("//div[@id='wsite-menus']//span[@class='wsite-menu-title'][normalize-space()='About Joget']").click()
                          cy.url().should('contain', 'https://www.joget.com/about-joget.html')
                          cy.go('back')
                })


                             it("navigate Contact", () => {
                                          
                                          cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Contact']").click()
                                          cy.url().should('contain', 'https://www.joget.com/contact.html')
                                          cy.go('back')
                               })   

                               it("navigate academy", () => {

                                
                                cy.get("body > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)").invoke('removeAttr','target','_self').click()
                                cy.url().should('contain', 'https://academy.joget.org/lms/courses')
                                cy.go('back')
                              })

                              it("navigate support", () => {
                                
                                cy.get("body > div:nth-child(3) > div:nth-child(1) > a:nth-child(2)").invoke('removeAttr','target','_self').click()
                                cy.wait(2000)
                                cy.url().should('contain','https://support.cloud.joget.com/jw/web/userview/supportTicket/v/_/welcome')
                                cy.go('back')
                              })

                              it("navigate knowledge base", () => {
                                
                                cy.get("div[id='minimenu'] a:nth-child(1)").invoke('removeAttr','target','_self').click()
                                cy.wait(2000)
                                cy.url().should('contain','https://dev.joget.org/community')
                                cy.go('back')
                              })

                              it("navigate blog", () => {
                                
                                cy.xpath("//a[contains(text(),'Blog')]").invoke('removeAttr','target','_self').click()
                                cy.wait(2000)
                                  cy.url().should('contain','https://blog.joget.org')
                                
                                cy.go('back')
                              })
            })
        
            context('navigate Banner', () => {

              it("navigate get started free button", () => {
                
                cy.get("a[href='https://www.joget.org/get-started']").invoke('removeAttr','target' ).click()
                cy.wait(2000)
                 cy.origin('https://www.joget.org/get-started', () => {
                      cy.wait(2000)
                      cy.url().should('contain','https://www.joget.org/get-started')
                      cy.go('back')
                 })
                
              })

              it("navigate request demo button", () => {
                
                cy.xpath("//a[@href='https://www.joget.com/request-a-joget-low-code-no-code-demo']").invoke('removeAttr','target','_self').click()
                cy.wait(2000)
                cy.url().should('contain','https://www.joget.com/request-a-joget-low-code-no-code-demo.html')
                cy.go('back')
              })
            })


            context('navigate wsite-section-content-1', () => {

              it("navigate jorger dx 8 image",() => {
                
                cy.get("a[href='https://www.joget.com/dx-8']").click()
                cy.wait(2000)
                cy.url().should('contain','https://www.joget.com/dx-8.html')
                cy.go('back')
              })

              it("navigate joget lab image", () => {
                
                cy.get("a[href='https://www.joget.com/joget-lab-2023-idb']").click()
                cy.wait(2000)
                cy.url().should('contain','https://www.joget.com/joget-lab-2023-idb')
                cy.go('back')
              })
            

              it("navigate webinar image",() => {
                
                cy.get("a[href='https://us02web.zoom.us/webinar/register/WN_-_iP6orcQB-apacznn4OeQ']").click()
                cy.wait(2000)
                cy.origin('https://us02web.zoom.us/webinar/register/WN_-_iP6orcQB-apacznn4OeQ', () => {
                    cy.wait(2000)
                    cy.url().should('contain','https://us02web.zoom.us/webinar/register/WN_-_iP6orcQB-apacznn4OeQ')
                    cy.go('back')
                                })
              })
          
          })

          context('navigate wsite-section-content-2', () => {

            it("navigate citizen developer", () => {
              
              cy.xpath("//a[@href='business-user']").click()
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.com/business-user.html')
              cy.go('back')
            })

            it("navigate It leader ", () => {
              
              cy.xpath("//a[@href='it-leader']").click()
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.com/it-leader.html')
              cy.go('back')
            })
          

            it("navigate professional developer", () => {
              
              cy.xpath("//a[@href='developer']").click()
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.com/developer.html')
              cy.go('back')
            })
        
        })

        context('navigate wsite-section-content-3', () => {

          it("navigate citizen development",() => {
            
            cy.xpath("//a[@href='https://www.joget.com/citizen-development-disrupts-project-management']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/citizen-development-disrupts-project-management.html')
            cy.go('back')
          })

          it("navigate security ", () => {
            
            cy.xpath("//a[@href='https://www.joget.com/security-in-low-code-applications']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/security-in-low-code-applications.html')
            cy.go('back')
          })
        

          it("navigate why no-code", () => {
            
            cy.xpath("//a[@href='https://www.joget.com/no-code-low-code-on-openshift.html']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/no-code-low-code-on-openshift.html')
            cy.go('back')
          })

          it("navigate supercharge application", () => {
            
            cy.xpath("//a[@href='https://www.joget.com/supercharging-enterprise-application-delivery.html']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/supercharging-enterprise-application-delivery.html')
            cy.go('back')
          })

          it("navigate visual builders",() => {
          
            cy.xpath("//a[@href='https://www.joget.com/visual-builders-of-joget-dx.html']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/visual-builders-of-joget-dx.html')
            cy.go('back')
          })

          it("navigate joget dx platform", () => {
          
            cy.xpath("//a[@href='https://www.joget.com/apm-on-joget-dx.html']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/apm-on-joget-dx.html')
            cy.go('back')
          })

          it("navigate project development evaluation tool", () => {
          
            cy.xpath("//a[@href='https://www.joget.com/citizen-development-and-project-management']").click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/citizen-development-and-project-management.html')
            cy.go('back')
          })
      
      })

      context('navigate wsite-section-content-4', () => {

        it("navigate case study", () => {
          
          cy.xpath("//div[@id='element-386e41c3-13a1-474c-a57e-9513d2949554']//a[@class='booButton backgroundTrans- backgroundTransHover- round-']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.joget.org/wp-content/uploads/2022/11/Joget-Mini-Case-Studies-Booklet-v2.pdf')
          cy.go('back')
        })

      })

      context('navigate wsite-section-content-5', () => {

        it("navigate DLT link", () => {
          
          cy.get("a[href='https://dev.joget.org/community/display/marketplace/DLT+Integration+with+Joget']").click()
          cy.wait(4000)
          cy.origin('https://dev.joget.org/community/display/marketplace/DLT+Integration+with+Joget', () => {
                        cy.wait(2000)
                        cy.url().should('contain','https://dev.joget.org/community/display/marketplace/DLT+Integration+with+Joget')
                        cy.go('back')
                })
        })

        it("navigate more info (cardano DApp)", () => {
          
          cy.xpath("//a[@href='https://www.joget.com/cardano-blockchain']").click()
          cy.wait(4000)
         cy.url().should('contain','https://www.joget.com/cardano-blockchain.html')
        })

        it("navigate more info (Hedera-integrated DApp)", () => {
          
          cy.xpath("//a[@href='https://www.joget.com/hedera-integrated-joget-app']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.joget.com/hedera-integrated-joget-app.html')
          cy.go('back')
        })
      })


      context('navigate wsite-section-content-6', () => {

        it("navigate more info (joget dx features)", () => {
          
          cy.xpath("//a[@href='joget-dx']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.joget.com/joget-dx.html')
          cy.go('back')
        })
      })

      context('navigate wsite-section-content-7', () => {

        it("navigate link knowledge base", () => {
          
          cy.xpath("//tbody/tr[@class='wsite-multicol-tr']/td[@class='wsite-multicol-col']/div[1]/ul[1]/li[1]/a[1]").click()
          cy.wait(2000)
          cy.origin('https://dev.joget.org/community/', () => {
                              cy.wait(2000)
                               cy.url().should('contain','https://dev.joget.org/community/')
                               cy.go('back')
                })
        })


        it("navigate link joget marketplace", () => {
          
          cy.xpath("//font[normalize-space()='Joget Marketplace']").click()
          cy.wait(2000)
         
            cy.origin('https://marketplace.joget.org/jw', () => {
             cy.wait(2000)
              cy.url().should('contain','https://marketplace.joget.org/jw/web/userview/mp/mpp/_/aa')
              cy.go('back')
              })
        })
        it("navigate link translate joget dx", () => {
          
          cy.xpath("//font[normalize-space()='Translate Joget DX']").click()
          cy.wait(2000)
            cy.origin('https://translate.joget.org/', () => {
              cy.wait(2000)
              cy.url().should('contain','https://translate.joget.org/')
              cy.go('back')
              })
        })

        it("navigate link video tutorials", () => {
          
          cy.xpath("//a[@href='https://youtube.com/jogetworkflow']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.youtube.com/jogetworkflow')
          cy.go('back')
        })
        it("navigate link questions and answers", () => {
          
          cy.xpath("//font[normalize-space()='Questions and Answer?']").click()
          cy.wait(2000)
          cy.origin('https://dev.joget.org/community/questions', () => {
              cy.wait(2000)
              cy.url().should('contain','https://dev.joget.org/community/questions')
              cy.go('back')
              })
        })
        it("navigate download on premise", () => {
          
          cy.xpath("//a[@class='wsite-button wsite-button-small wsite-button-highlight']//span[@class='wsite-button-inner'][normalize-space()='Download On-Premise']").click()
          cy.wait(2000)
          cy.origin('https://www.joget.org/get-started/#on-premise', () => {
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.org/get-started/#on-premise')
              cy.go('back')
              })
        })
        it("navigate run on joget cloud", () => {
          
          cy.xpath("//span[normalize-space()='Run ON JOGET CLOUD']").click()
          cy.wait(2000)
          cy.origin('https://www.jogetcloud.com/', () => {
              cy.wait(2000)
              cy.url().should('contain','https://www.jogetcloud.com/')
              cy.go('back')
              })
        })
      })

      context('navigate wsite-section-content-8', () => {

            it("navigate spotlight (cloud native - redhat marketplace)", () => {
              
              cy.xpath("//span[normalize-space()='Red Hat Marketplace']").click()
              cy.wait(2000)
              cy.origin('https://marketplace.redhat.com', () => {
              cy.wait(2000)
              cy.url().should('contain','https://marketplace.redhat.com/en-us')
              cy.go('back')
              })
            })

            it("navigate spotlight (cloud native - joget dx)", () => {
              
              cy.xpath("//a[@href='https://www.joget.com/']//span[contains(text(),'Joget DX')]").click()
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.com')
              })

            it("navigate spotlight (cloud native - learn more)", () => {
              
                cy.xpath("//body[1]/div[3]/div[3]/div[1]/div[10]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[4]/div[1]/a[1]/img[1]").click()
                cy.wait(2000)
              cy.get('.post-title.entry-title').should('contain', 'Cloud Native and Low Code. Are You Ready for the Future of Enterprise IT?')
              cy.url().should('contain','https://blog.joget.org/2020/09/cloud-native-and-low-code-future-enterprise-it.html')
              cy.go('back') 
              
              })
            
              it("navigate spotlight (forrester q1 link)", () => {
              
                cy.xpath("//span[contains(text(),'Forrester’s Q1 2020 Digital Process Automation Sur')]").click()
                cy.wait(2000)
                cy.url().should('contain','https://www.forrester.com/report/COVID19-Remote-Work-Just-Broke-Your-Processes-Heres-What-To-Do-About-It/RES160637')
                cy.go('back')
                
              })


              it("navigate spotlight (no-code learn more button)", () => {
              
                cy.get("a[href='https://blog.joget.org/2020/05/no-code-low-code-and-pro-code-for-digital-transformation.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2020/05/no-code-low-code-and-pro-code-for-digital-transformation.html')
                cy.go('back')
                
              })


              it("navigate spotlight-learnmore (joget and red hat openshift)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/01/how-to-visually-build-apps-with-joget.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/01/how-to-visually-build-apps-with-joget.html')
                cy.go('back')
                
              })

              it("navigate spotlight-learnmore (build a blockchain app)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/01/blockchain-made-simple-no-code-apps.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/01/blockchain-made-simple-no-code-apps.html')
                cy.go('back')
                
              })

              it("navigate spotlight-learnmore (joget on kubernetes)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/06/kubernetes-what-hype-is-all-about-and-tutorial.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/06/kubernetes-what-hype-is-all-about-and-tutorial.html')
                cy.go('back')
                
              })

              it("navigate spotlight-learnmore (joget and rpa)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/06/introduction-to-robotic-process-automation-low-code-platform.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/06/introduction-to-robotic-process-automation-low-code-platform.html')
                cy.go('back')
                
              })

              it("navigate spotlight-learnmore (PWA on Joget)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/02/progressive-web-apps-apple-app-store.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/02/progressive-web-apps-apple-app-store.html')
                cy.go('back')
                
              })

              it("navigate spotlight-learnmore (Doctors w/o border)", () => {
              
                cy.get("a[href='https://blog.joget.org/2019/04/joget-no-code-low-code-platform-for-doctors-without-borders.html']").click()
                cy.wait(2000)
                cy.url().should('contain','https://blog.joget.org/2019/04/joget-no-code-low-code-platform-for-doctors-without-borders.html')
                cy.go('back')
                
              })

      })
      context('navigate wsite-section-content-9', () => {

        it("navigate more customer)", () => {
          
          cy.xpath("//a[@href='https://www.joget.com/customers']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.joget.com/customers.html')
          cy.go('back')
        })

        it("navigate write your review", () => {
          
          cy.xpath("//a[@href='https://www.joget.com/reviews']").click()
          cy.wait(2000)
          cy.url().should('contain','https://www.joget.com/reviews.html')
          cy.go('back')
          })

        })

        context('navigate wsite-section-content-10', () => {

          it("navigate download on premise button", () => {
            
            cy.xpath("//body[1]/div[3]/div[3]/div[1]/div[12]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/a[1]").invoke('removeAttr','target').click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.org/get-started/#on-premise')
            cy.go('back')
          })
  
          it("navigate run on joget cloud button", () => {
            
            cy.xpath("//a[@class='wsite-button wsite-button-large wsite-button-normal']").invoke('removeAttr','target','_blank').click()
            cy.wait(2000)
            cy.url().should('contain','https://www.jogetcloud.com/')
            cy.go('back')
            })

          it("navigate learn button", () => {
            
            cy.xpath("//body[1]/div[3]/div[3]/div[1]/div[12]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/a[1]").invoke('removeAttr','target').click()
            cy.wait(2000)
            cy.url().should('contain','https://www.joget.com/joget-dx.html')
            cy.go('back')
            })
  
          })



          context('navigate footer', () =>{

            it("navigate submit an inquiry", () => {
            
              cy.xpath("//a[normalize-space()='Submit an inquiry']").click()
              cy.wait(2000)
              cy.url().should('contain','https://www.joget.com/contact.html')
              cy.go('back')
              })

              it("navigate citizen dev", () => {
            
                cy.xpath("//a[@href='/business-user.html']//font[contains(text(),'Citizen Developer')]").click()
                cy.wait(2000)
                cy.url().should('contain','https://www.joget.com/business-user.html')
                cy.go('back')
                })

                it("navigate IT leader", () => {
            
                  cy.xpath("//a[@href='/it-leader.html']//font[contains(text(),'IT Leader')]").click()
                  cy.wait(2000)
                  cy.url().should('contain','https://www.joget.com/it-leader.html')
                  cy.go('back')
                  })

                  it("navigate Pro Dev", () => {
            
                    cy.xpath("//a[@href='/developer.html']//font[contains(text(),'Professional Developer')]").click()
                    cy.wait(2000)
                    cy.url().should('contain','https://www.joget.com/developer.html')
                    cy.go('back')
                    })

                    context('navigate footer-partnership', () =>{

                    it("navigate joget partners", () => {
            
                      cy.xpath("//a[contains(text(),'Joget Partners')]").click()
                      cy.wait(2000)
                      cy.url().should('contain','https://www.joget.com/joget-partners.html')
                      cy.go('back')
                      })

                      it("navigate partner solutions", () => {
            
                        cy.xpath("//font[normalize-space()='Partner Solutions']").click()
                        cy.wait(2000)
                        cy.url().should('contain','https://www.joget.com/partner-solutions.html')
                        cy.go('back')
                        })

                        it("navigate partnership program", () => {
            
                          cy.xpath("//font[normalize-space()='Partnership Program']").click()
                          cy.wait(2000)
                          cy.url().should('contain','https://www.joget.com/partnership-program.html')
                          cy.go('back')
                          })
    
                          it("navigate partnership sign up", () => {
                
                            cy.xpath("//font[normalize-space()='Partnership Sign-Up']").click()
                            cy.wait(2000)
                            cy.url().should('contain','https://www.joget.com/partnership-sign-up.html')
                            cy.go('back')
                            })
                          })

                          context('navigate footer-LEARN', () =>{
                            
                              it("navigate CommunityBase", () => {
                    
                                cy.xpath("//a[@href='https://community.joget.org/']").invoke('removeAttr','target').click()
                                cy.wait(2000)
                                cy.url().should('contain','https://dev.joget.org/community/')
                                cy.go('back')
                                })
                                it("navigate CommunityQ&A", () => {
                    
                                  cy.xpath("//a[@href='https://answer.joget.org']").invoke('removeAttr','target').click()
                                  cy.wait(2000)
                                  cy.url().should('contain','https://dev.joget.org/community/questions')
                                  cy.go('back')
                                  })
                                  it("navigate Joget Academy", () => {
                    
                                    cy.xpath("//a[@href='https://academy.joget.org/']").invoke('removeAttr','target').click()
                                    cy.wait(2000)
                                    cy.url().should('contain','https://academy.joget.org/lms/courses')
                                    cy.go('back')
                                    })
                                    
                                    it("navigate Joget Video", () => {
                    
                                      cy.xpath("//a[@href='https://www.youtube.com/user/jogetworkflow']").invoke('removeAttr','target').click()
                                      cy.wait(2000)
                                      cy.url().should('contain','https://www.youtube.com/user/jogetworkflow')
                                      cy.go('back')
                                      })
                                      it("navigate Joget Translation", () => {
                    
                                        cy.xpath("//a[normalize-space()='Joget Translation']").invoke('removeAttr','target').click()
                                        cy.wait(2000)
                                        cy.url().should('contain','https://translate.joget.org/')
                                        cy.go('back')
                                        }) 
                                        it("navigate Joget Mindshare Series", () => {
                    
                                          cy.xpath("//a[contains(text(),'Joget Mindshare™ Series​')]").click()
                                          cy.wait(2000)
                                          cy.url().should('contain','https://www.joget.com/mindshare-series.html')
                                          cy.go('back')
                                          })
                                          it("navigate Open Source Repository", () => {
                    
                                            cy.xpath("//a[@href='https://github.com/jogetworkflow/']").invoke('removeAttr','target').click()
                                            cy.wait(2000)
                                            cy.url().should('contain','https://github.com/jogetworkflow/')
                                            cy.go('back')
                                            })

                          })


                          context('navigate quick links', () => {

                            it("navigate Home", () => {
                    
                              cy.xpath("//a[normalize-space()='Home']").click()
                              cy.wait(2000)
                              cy.url().should('contain','https://www.joget.com/')
                              cy.go('back')
                              })
                              it("navigate Req joget demo", () => {
                    
                                cy.xpath("//a[normalize-space()='Request Joget Demo']").invoke('removeAttr', 'target').click()
                                cy.wait(2000)
                                cy.url().should('contain','https://www.joget.com/request-a-joget-low-code-no-code-demo.html')
                                cy.go('back')
                                })
                                it("navigate Blog", () => {
                    
                                  cy.xpath("//a[@href='http://blog.joget.org']").invoke('removeAttr', 'target').click()
                                  cy.wait(2000)
                                  cy.url().should('contain','https://blog.joget.org/')
                                  cy.go('back')
                                  })    
                                  it("navigate Customers", () => {
                    
                                    cy.xpath("//a[contains(text(),'Customers')]").click()
                                    cy.wait(2000)
                                    cy.url().should('contain','https://www.joget.com/customers.html')
                                    cy.go('back')
                                    })
                                    it("navigate Pricing", () => {
                    
                                      cy.xpath("//font[normalize-space()='Pricing']").click()
                                      cy.wait(2000)
                                      cy.url().should('contain','https://www.joget.com/pricing.html')
                                      cy.go('back')
                                      })
                                      it("navigate Events", () => {
                    
                                        cy.xpath("//a[@href='/'][normalize-space()='Events']").click()
                                        cy.wait(2000)
                                        cy.url().should('contain','https://www.joget.com/')
                                        cy.go('back')
                                        })
                                        it("navigate Reviews", () => {
                              
                                          cy.xpath("//a[contains(text(),'Reviews')]").click()
                                          cy.wait(2000)
                                          cy.url().should('contain','https://www.joget.com/reviews.html')
                                          cy.go('back')
                                          })
                                          it("navigate Press", () => {
                              
                                            cy.xpath("//a[contains(text(),'Press')]").click()
                                            cy.wait(2000)
                                            cy.url().should('contain','https://www.joget.com/press.html')
                                            cy.go('back')
                                            })    
                                            it("navigate Privacy Policy", () => {
                              
                                              cy.xpath("//font[normalize-space()='Privacy Policy']").click()
                                              cy.wait(2000)
                                              cy.url().should('contain','https://www.joget.com/privacy-policy.html')
                                              cy.go('back')
                                              })
                                              it("navigate Contacts", () => {
                              
                                                cy.xpath("//div[@class='paragraph']//a[normalize-space()='Contact']").click()
                                                cy.wait(2000)
                                                cy.url().should('contain','https://www.joget.com/contact.html')
                                                cy.go('back')
                                                })
                                                it("navigate About us", () => {
                              
                                                  cy.xpath("//a[@href='/about-joget.html'][normalize-space()='About Us']").click()
                                                  cy.wait(2000)
                                                  cy.url().should('contain','https://www.joget.com/about-joget.html')
                                                  cy.go('back')
                                                  })

                          })
          })

 })
      

/* cy.get('button').click() // click the button that opens a new tab
cy.window().then(win => {
  cy.stub(win, 'open').as('windowOpen') // stub the window.open method to intercept the new window
})

cy.get('button').click() // click the button that triggers the window.open method

cy.get('@windowOpen').should('be.calledWith', 'https://example.com') // assert that the new window is opened with the expected URL

cy.window().then(win => {
  cy.visit(win.location.href) // visit the URL of the new window
})

cy.url().should('eq', 'https://example.com')*/


//cy.get('button#get-button').click();
//cy.window().then((win) => {
 // cy.get('button#get-button', { withinSubject: win.document }).click();
//});