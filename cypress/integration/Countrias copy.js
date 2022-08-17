
import { Peru, Serbia } from '../fixtures/ApiData'
import {Google} from '../support/google'
import {Wikipedia} from '../support/Wikipedia'
let country1 = "Peru";
let country2 = "Serbia"

describe('Countru data check', () => {      
    const val = country1
    it('Verifies validity  of data for  ' + val, () => {        
        cy.request('https://restcountries.com/v3.1/name/' + val).then((value) => {
            expect(value.status).equal(200)
            expect(value.body[0].name).has.property('official', Peru.nameOfficial)
            expect(value.body[0].capital).has.property(0, Peru.capital)
            expect(value.body[0].languages).has.property('spa', Peru.spa)
            expect(value.body[0]).has.property('area', Peru.area)
            expect(value.body[0]).has.property('population', Peru.population)            
        })
        cy.visit('/')
        cy.get(Google.searchText)
            .type(val + '{enter}')
        cy.get('body')
            .contains(val + ' - Wikipedia')
            .click()
        cy.get(Wikipedia.name)
            .should('have.text', 'Republic of Peru')
            .then($name => {
                if ($name.text().includes(Peru.nameOfficial)) {
                    cy.log('Aplication has displayed same contry name  as Wikipedia' + ' = ' + Peru.nameOfficial)
                } else {
                    cy.log('Aplication did not display same contry name  as Wikipedia')
                }
            })
        cy.get(Wikipedia.peruCapital)
            .should('have.text', 'Lima')
            .then($capital => {
                if ($capital.text().includes(Peru.capital)) {
                    cy.log('Aplication have displayed same capital name as Wikipedia' + ' = ' + Peru.capital)
                } else {
                    cy.log('Aplication did not display same capital name  as Wikipedia')
                }
            })
        cy.get(Wikipedia.peruLanguage)
            .should('have.text', 'Spanish')
            .then($language => {
                if ($language.text().includes(Peru.spa)) {
                    cy.log('Aplication have displayed same language as Wikipedia' + ' = ' + Peru.spa)
                } else {
                    cy.log('Aplication did not display same language  as Wikipedia')
                }
            })
        cy.get(Wikipedia.peruArea)
            .contains('1,285,216')
            .then($area => {
                if ($area.text().includes("Peru.area")) {
                    cy.log('Aplication have displayed same area data as Wikipedia' + ' = ' + Peru.area)
                } else {
                    cy.log('Aplication did not display same area data  as Wikipedia')
                }

            })
            cy.get(Wikipedia.peruPopulation)
            .contains( '34,294,231' )
            .then($population => {
                if ($population.text().includes(Peru.population)) {
                    cy.log('Aplication have displayed same population data as Wikipedia' + ' = ' + Peru.area)
                } else {
                    cy.log('Aplication did not display same population data  as Wikipedia')
                }


            })
            
    })
    const val2 = country2
    it('Verifies validity  of data for  ' + val2, () => {        
        cy.request('https://restcountries.com/v3.1/name/' + val2).then((value) => {
            expect(value.status).equal(200)
            expect(value.body[0].name).has.property('official', Serbia.nameOfficial)
            expect(value.body[0].capital).has.property(0, Serbia.capital)
            expect(value.body[0].languages).has.property('srp', Serbia.srp)
            expect(value.body[0]).has.property('area', Serbia.area)
            expect(value.body[0]).has.property('population', Serbia.population)            
        })
        cy.visit('/')
        cy.get(Google.searchText)
            .type(val2 + '{enter}')
        cy.get('body')
            .contains(val2 + ' - Wikipedia')
            .click()
        cy.get(Wikipedia.name)
            .should('have.text', 'Republic of Serbia')
            .then($name => {
                if ($name.text().includes(Serbia.nameOfficial)) {
                    cy.log('Aplication has displayed same contry name  as Wikipedia' + ' = ' + Serbia.nameOfficial)
                } else {
                    cy.log('Aplication did not display same contry name  as Wikipedia')
                }
            })
        cy.get(Wikipedia.serbiaCapital)
            .should('have.text', 'Belgrade')
            .then($capital => {
                if ($capital.text().includes(Serbia.capital)) {
                    cy.log('Aplication have displayed same capital name as Wikipedia' + ' = ' + Serbia.capital)
                } else {
                    cy.log('Aplication did not display same capital name  as Wikipedia')
                }
            })
            cy.get(Wikipedia.serbiaLanguage)
            .should('have.text', 'Serbian')
            .then($language => {
                if ($language.text().includes(Serbia.srp)) {
                    cy.log('Aplication have displayed same language as Wikipedia' + ' = ' + Serbia.srp)
                } else {
                    cy.log('Aplication did not display same language  as Wikipedia')
                }
            })
            cy.get(Wikipedia.serbiaArea)
            .contains('88,361')
            .then($area => {
                if ($area.text().includes("Serbia.area")) {
                    cy.log('Aplication have displayed same area data as Wikipedia' + ' = ' + Serbia.area)
                } else {
                    cy.log('Aplication did not display same area data  as Wikipedia')
                }

            })
            cy.get(Wikipedia.serbiaPopulation)
            .contains( '6,797,105' )
            .then($population => {
                if ($population.text().includes(Peru.population)) {
                    cy.log('Aplication have displayed same population data as Wikipedia' + ' = ' + Peru.area)
                } else {
                    cy.log('Aplication did not display same population data  as Wikipedia')
                }


            })
            
    })

})
