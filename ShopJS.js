function handleButtonClick(menuId) {
    const menuItems = ["menu_beans", "menu_coffee", "menu_noncoffee", "menu_tea", "menu_frappe", "menu_chocolate", "menu_pastries"];
    
    for (let item of menuItems) {
       document.getElementById(item).style.display = item === menuId ? "inline-block" : "none";
    }
 }
 
 document.getElementById("button_beans").addEventListener("click", function () {
    handleButtonClick("menu_beans");
 });
 
 document.getElementById("button_coffee").addEventListener("click", function () {
    handleButtonClick("menu_coffee");
 });
 
 document.getElementById("button_noncoffee").addEventListener("click", function () {
    handleButtonClick("menu_noncoffee");
 });
 
 document.getElementById("button_tea").addEventListener("click", function () {
    handleButtonClick("menu_tea");
 });
 
 document.getElementById("button_frappe").addEventListener("click", function () {
    handleButtonClick("menu_frappe");
 });
 
 document.getElementById("button_pastries").addEventListener("click", function () {
    handleButtonClick("menu_pastries");
 });
 
 document.getElementById("button_chocolate_drink").addEventListener("click", function () {
    handleButtonClick("menu_chocolate");
 });
 

 let menu_beans = [
    { title: "Arabica",
      price: "$10",
      description: "Arabica is a species of Coffea originally indigenous to the mountains of Yemen in the Arabian Peninsula, hence its name, and also from the southwestern highlands of Ethiopia and southeastern Sudan."
    },
    { title: "Robusta",
      price: "$15",
      description: "Coffea robusta, commonly known as robusta coffee, is a species of coffee that has its origins in central and western sub-Saharan Africa. It is a species of flowering plant in the family Rubiaceae."
    },
    { title: "Liberica",
      price: "$12",
      description: "Coffea liberica, commonly known as liberica coffee, is a species of coffee that is native to Liberia and Sierra Leone in West Africa. It is known for its unique flavor profile."
    },
    {  title: "Excelsa",
      price: "$11",
      description: "Coffea excelsa, commonly known as excelsa coffee, is a species of coffee that is native to Southeast Asia. It is often used as a blending coffee due to its distinct flavor characteristics."
    }
 ];

let menu_coffee = [
    {  title: "Cappuccino",
       price: "$10",
       description: "Cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam."
    },
    {  title: "Espresso",
       price: "$15",
       description: "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans."
    },
    {  title: "Americano",
       price: "$12",
       description: "Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee."
    },
    {  title: "Latte",
       price: "$11",
       description: "A latte is a coffee drink made with espresso and steamed milk. The term as used in English is a shortened form of the Italian caffè latte, caffelatte or caffellatte, which means 'milk coffee'."
    }
 ];

 let menu_noncoffee = [
    {  title: "Honey Latte",
       price: "$10",
       description: "A honey latte is a drink made with steamed milk, and honey that will makes your throat feels like in heaven."
    },
    {  title: "Milkshake",
       price: "$15",
       description: "A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture."
    },
    {  title: "Lemonade",
       price: "$9",
         description: "Lemonade is a sweetened lemon-flavored beverage. There are varieties of lemonade found throughout the world. In North America and South Asia, cloudy lemonade dominates."
    },
    {  title: "Creamy Mango",
       price: "$11",
         description: "A creamy mango is a drink made with mango, milk, and ice cream that will makes you feel like you are in the heaven."
    }
 ];

 let menu_tea = [
    {  title: "Black Tea",
       price: "$10",
       description: "Black tea is a type of tea that is more oxidized than oolong, yellow, white and green teas."
    },
    {  title: "Green Tea",
       price: "$15",
       description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas."
    },
    {  title: "Oolong Tea",
       price: "$12",
       description: "Oolong is a traditional semi-oxidized Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting."
    },
    {  title: "White Tea",
       price: "$11",
       description: "White tea is a lightly oxidized tea grown and harvested primarily in China, mostly in the Fujian and Zhejiang provinces."
    }
 ];

 let menu_frappe = [
    {  title: "Mocha Frappe",
       price: "$10",
       description: "A mocha frappe is a blended coffee drink made with instant coffee, sugar, water, ice, and milk."
    },
    {  title: "Caramel Frappe",
       price: "$12",
       description: "A caramel frappe is a blended coffee drink made with instant coffee, sugar, water, ice, and milk."
    },
    {  title: "Vanilla Frappe",
       price: "$12",
       description: "A vanilla frappe is a blended coffee drink made with instant coffee, sugar, water, ice, and milk."
    },
    {  title: "Chocolate Frappe",
       price: "$11",
       description: "A chocolate frappe is a blended coffee drink made with instant coffee, sugar, water, ice, and milk."
    }
 ];

 let menu_chocolate = [
    {  title: "Hot Chocolate",
       price: "$10",
       description: "Hot chocolate, also known as drinking chocolate, cocoa, and as chocolate tea in Nigeria, is a heated drink consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and usually a sweetener."
    },
    {  title: "Chocolate Milkshake",
       price: "$15",
       description: "A chocolate milkshake is a sweet, cold beverage that is usually made from milk, ice cream, and/or ice milk, and chocolate flavoring, such as syrup or powder."
    },
    {  title: "Chocolate Smoothie",
       price: "$12",
       description: "A chocolate smoothie is a drink made from pureed raw fruit and/or vegetables, typically using a blender."
    },
    {  title: "Double Chocolate",
       price: "$17",
         description: "A signiture chocolate is a drink with double the ratio of chocolate and blends wtih dark chocolate powder."
    }
 ];

 let menu_pastries = [
    {  title: "Apple Pie",
       price: "$8",
       description: "An apple pie is a pie in which the principal filling ingredient is apple, originated in England."
    },
    {  title: "Danish",
       price: "$9",
         description: "A Danish pastry, sometimes shortened to just Danish, is a multilayered, laminated sweet pastry in the viennoiserie tradition."
    },
    {  title: "Croissant",
       price: "$6",
         description: "A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, named for its historical crescent shape."
    },
    {  title: "Blueberry Muffin",
       price: "$7",
       description: "It has real blueberry in it!"
    }
 ]; 
 let menu_beans_container = document.getElementById("menu_beans");
 let menu_coffee_container = document.getElementById("menu_coffee");
 let menu_noncoffee_container = document.getElementById("menu_noncoffee");
 let menu_tea_container = document.getElementById("menu_tea");
 let menu_frappe_container = document.getElementById("menu_frappe");
 let menu_chocolate_container = document.getElementById("menu_chocolate");
 let menu_pastries_container = document.getElementById("menu_pastries");
 
 function generateMenu(menu, container, name) {
   let itemId = 0;
   for (let item of menu) {
       const currentItemId = itemId++;
       container.innerHTML += `
           <div class="menu_item">
               <p class="menu_item_title">${item.title}</p>
               <p id="price_${name}${currentItemId}" class="menu_item_price">${item.price}</p>
               <p class="menu_item_description">${item.description}</p>
           </div>
       `;
   }
}
generateMenu(menu_beans, menu_beans_container, 'beans_');
generateMenu(menu_coffee, menu_coffee_container, 'coffee_');
generateMenu(menu_noncoffee, menu_noncoffee_container, 'noncoffee_');
generateMenu(menu_tea, menu_tea_container, 'tea_');
generateMenu(menu_frappe, menu_frappe_container, 'frappe_');
generateMenu(menu_chocolate, menu_chocolate_container, 'chocolate_');
generateMenu(menu_pastries, menu_pastries_container, 'pastries_');