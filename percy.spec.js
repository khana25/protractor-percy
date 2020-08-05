var helper = require('./helper.js');

const { browser, element } = require("protractor")
const { percySnapshot } = require('@percy/protractor')

describe('Visit the Berkeley homepage', function() {

    beforeEach(function() {
        browser.driver.manage().window().maximize()
        browser.driver.sleep(4000)
        console.log("----------- Test Case Started ------------")
    }) 

    afterEach(function(){
        console.log("----------- Test Case Ended ------------")
    });
    it('should take the homepage percy snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk")
        await browser.driver.sleep(50000);
        await percySnapshot('Homepage', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take the forthcoming developments percy snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/developments/forthcoming")
        await browser.driver.sleep(1000);
        await percySnapshot('Forthcoming Developments', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    }) 

    it('should take Sustainability snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/sustainability")
        await browser.driver.sleep(1000);
        await percySnapshot('Sustainability', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })


    it('should take Search Results snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/search-results?allowLazyLoading=false")
        await browser.driver.sleep(1000);
        await percySnapshot('Search Results Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take marketing preferences snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/marketing-preferences")
        await browser.driver.sleep(1000);
        await percySnapshot('Mark Perf. Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take forgotten password snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/forgotten-password")
        await browser.driver.sleep(1000);
        await percySnapshot('Forgotten password Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take HTB snapshot', async function(){
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/buying/help-to-buy/participating-developments")
        await browser.driver.sleep(1000);
        await percySnapshot('HTB developments Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take Taplow snapshot', async function(){
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/developments/buckinghamshire/taplow/taplow-riverside&allowLazyLoading=false")
        await browser.driver.sleep(1000);
        await percySnapshot('Taplow development Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take Green Park snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/developments/berkshire/reading/green-park-village&allowLazyLoading=false")
        await browser.driver.sleep(1000);
        await percySnapshot('Green Park development Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take sitemap snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/sitemap")
        await browser.driver.sleep(1000);
        await percySnapshot('Sitemap Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take accessibility snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/accessibility")
        await browser.driver.sleep(1000);
        await percySnapshot('Accessibility Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take St William snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/st-william")
        await browser.driver.sleep(1000);
        await percySnapshot('St William Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take St Joseph snapshot', async function(){
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/st-joseph")
        await browser.driver.sleep(1000);
        await percySnapshot('St Joseph Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take berkeley brand snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/berkeley")
        await browser.driver.sleep(1000);
        await percySnapshot('Berkeley Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take St George homepage snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/st-george")
        await browser.driver.sleep(1000);
        await percySnapshot('St George Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take St James homepage snapshot', async function(){
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/st-james")
        await browser.driver.sleep(1000);
        await percySnapshot('St James Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take St Edward snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/our-brands/st-edward")
        await browser.driver.sleep(1000);
        await percySnapshot('St Edward Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take MHP snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/my-home/sign-in")
        await browser.driver.sleep(1000);
        await percySnapshot('MHP login Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })

    it('should take Careers snapshot', async function() {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.berkeleygroup.co.uk/about-us/careers")
        await browser.driver.sleep(1000);
        await percySnapshot('Careers Page', { widths: [414, 768, 1024] });
        await browser.driver.sleep(5000);
    })
})