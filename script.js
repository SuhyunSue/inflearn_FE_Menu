// Menu categories and items
const menuItems = {
    beverage: [
        {name: 'Espresso', image: 'Image/espresso.jpg', description: 'Strong black coffee'},
        {name: 'Black Coffee', image: 'Image/blackcoffee.jpg', description: 'espresso with water. We have hot and Ice long block.'},
        {name: 'White Coffee', image: 'Image/coffee.jpg', description: 'espresso with Milk. We have Ice Latte, Flat white, Latte and Cappuccino'},
        {name: 'Non-coffee', image: 'Image/noncoffee.jpg', description: 'Everything without coffee shot. Milkshake, strawberry Latte'},
        {name: 'Alternative', description: 'Milk can change to Oat/Almond/Soy/LactoseFree'}
    ],
    food: [
        {name: 'Sandwich', image: 'Image/sandwich.jpg', description: 'A tasty sandwich'},
        {name: 'Egg Benedict', image: 'Image/eggbene.jpg', description: 'poached eggs, rocket with sourdough and holandaise sause on top.'},
        {name: 'Eggs your way', image: 'Image/eggyourway.jpg', description: 'Serve only eggs, which is scramble/poached/sunny side up.'},
        {name: 'Bread', image: 'Image/bread.jpg', description: 'Bread will be toasted. The option is Sourdough/Turkish/White/Gluten Free'},
        {name: 'Extra', description: 'Smoked salmon, bacon, avocado, tomato'}
    ]
};

function showMenu(category) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // 메뉴 초기화

    let itemsToShow = category === 'all' ? [...menuItems.beverage, ...menuItems.food] : menuItems[category];
    itemsToShow.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        // 이미지유무 확인인
        let imageHtml = ''
        if (item.image) {
            imageHtml = `<img src="${item.image}" alt="${item.image}"`
        } else {
            itemDiv.classList.add("no-image");
        }
        // 이미지, 이름, 설명을 출력
        itemDiv.innerHTML = `
            ${imageHtml}
            <div>
                <strong>${item.name}</strong>: ${item.description}
            </div>
        `;
        menuContainer.appendChild(itemDiv);
    });
}

 // 페이지 로드 시 All menu 항목 표시
 window.onload = function() {
    showMenu('all');
};