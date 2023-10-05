const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        
        if (e.keyCode === keydownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
 
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;


    console.log('tabContainer', tabContainer);
    console.log('targetTab', targetTab);

   console.log('targetTab', targetTab); 
    console.log('targetPanel', targetPanel);
    console.log('mainContainer', mainContainer);
 



    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);


    hideContent(mainContainer, '[role="tabpanel"]');
    // mainContainer
    //     .querySelectorAll('[role="tabpanel"]')
    //     .forEach((panel) => panel.setAttribute("hidden", true));

    showContent(mainContainer, [`#${targetPanel}`]);



    // showContent(mainContainer, [`#targetPanel`]);

    console.log('target panel', targetPanel );



    
    // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    

    hideContent(mainContainer, 'picture')


    // mainContainer
    //     .querySelectorAll('picture')
    //     .forEach((picture) => picture.setAttribute("hidden", true));



    showContent(mainContainer, [`#${targetImage}`]);
        
    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');
    
    // console.log(mainContainer);
}


    function hideContent(parent, content) {
        parent
            .querySelectorAll(content)
            .forEach((item) => item.setAttribute("hidden", true));
    }
    
    function showContent(parent, content) {
        parent.querySelector(content).removeAttribute('hidden');
   }

// function changeTabPanel(e){
//     const targetTab = e.target;
//     const targetPanel = targetTab.getAttribute("aria-controls");
    
//     console.log(targetPanel);

//     const tabContainer = targetTab.parentNode;
//     const mainContainer = tabContainer.parentNode;

//     mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');


//     console.log(mainContainer);
// }

    
    
    // console.log(mainContainer);





// attribute selector []
 /* 
 
 template literal 
`#${}`
 
 
 
 
 */





