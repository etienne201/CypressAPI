/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('HTTP Example', () => {

    it('GET', () => {
        cy.request({
            method: 'GET',
            url : 'http://httpbin.org/get',
        }).then(function (response) {
            expect(response.body).have.property('url');
        })

    }); 
    it('POST', () => {
        cy.request({
            method: 'POSt',
            url : 'http://httpbin.org/post',
            body : {
                'name': 'emako',
                'age': 26
            },
            headers : {     
                'content-type': 'application/json'
            }
        }).then(function (response) {
            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                
                "name": "emako",
                "age": 26
                });
        })  

    });
    it('PUT', () => {
        cy.request( 'PUT', 'http://httpbin.org/put',{'name': 'emako'} ).then((response) =>{
            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({ "name": "emako", });

        })
    })
    it('Patch', () => {
        cy.request( 'PATCH', 'http://httpbin.org/patch',{'name': 'emako'} ).then((response) =>{
            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({ "name": "emako", });

        })
    })

 
    })