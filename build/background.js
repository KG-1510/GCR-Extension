function pageScroll(){var e=(new Date).getTime(),t=setInterval(function(){return(new Date).getTime()-e>25e3?(clearInterval(t),void buttonClicked()):void window.scrollBy(0,1e4)},2e3)}function buttonClicked(){for(var e=document.getElementsByClassName("uqZtlf x0HGk QRiHXd MymH0d maXJsd"),t=[],n=0;n<e.length;n++)t.push(e[n].href),titles.push(e[n].title);var i={hrefList:t,titleList:titles};chrome.runtime.sendMessage(i)}var titles=[];chrome.runtime.onMessage.addListener(function(e,t,n){var i=titles.indexOf(e),l=document.getElementsByClassName("uqZtlf x0HGk QRiHXd MymH0d maXJsd")[i];l.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),pageScroll();