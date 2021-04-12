menuObj = {
    "AMERICAS":[
        ["Antigua and Barbuda", "English"],
        ["Argentina", "Español"],
        ["Bahamas", "English"],
        ["Barbados", "English"],
        ["Belize", "English"],
        ["Bolivia", "Español"],
        ["Brazil", "Português"],
        ["Canada", "English"],
        ["Canada", "Français"],
        ["Chile", "Español"],
        ["Colombia", "Español"],
        ["Costa Rica", "Español"],
        ["Dominica", "English"],
        ["Dominican Republic", "Español"],
        ["Ecuador", "Español"],
        ["El Salvador", "Español"],
        ["Grenada", "English"],
        ["Guatemala", "Español"],
        ["Guyana", "English"],
        ["Haiti", "Français"],
        ["Honduras", "Español"],
        ["Jamaica", "English"],
        ["Mexico", "Español"],
        ["Nicaragua", "Español"],
        ["Panama", "Español"],
        ["Panama", "English"],
        ["Paraguay", "Español"],
        ["Peru", "Español"],
        ["St. Kitts and Nevis", "English"],
        ["St. Lucia", "English"],
        ["St. Vincent and the Grenadines", "English"],
        ["Suriname", "Nederlands"],
        ["Trinidad and Tobago", "English"],
        ["Uruguay", "Español"],
        ["United States", "English"],
        ["United States", "Español"],
        ["Venezuela", "Español"]
    ],
    "AFRICA": [
        ["Algeria", "العربية"],
        ["Algeria", "Français"],
        ["Angola", "Português"],
        ["Benin", "Français"],
        ["Burkina Faso", "Français"],
        ["Burundi", "Français"],
        ["Cameroon", "Français"],
        ["Cameroon", "English"],
        ["Cape Verde", "Português"],
        ["Central African Republic", "Français"],
        ["Chad", "Français"],
        ["Chad", "العربية"],
        ["Comoros", "Français"],
        ["Comoros", "العربية"],
        ["Democratic Republic of the Congo", "Français"],
        ["Republic of Congo", "Français"],
        ["Côte d'Ivoire", "Français"],
        ["Djibouti", "Français"],
        ["Djibouti", "العربية"],
        ["Egypt", "العربية"],
        ["Equatorial Guinea", "Español"],
        ["Eritrea", "العربية"],
        ["Gabon", "Français"],
        ["Gambia", "English"],
        ["Ghana", "English"],
        ["Guinea", "Français"],
        ["Guinea-Bissau", "Português"],
        ["Kenya", "English"],
        ["Lesotho "| "English"],
        ["Liberia", "English"],
        ["Libya", "العربية"],
        ["Madagascar", "Français"],
        ["Mali", "Français"],
        ["Mauritania", "العربية"],
        ["Mauritius", "English"],
        ["Mauritius", "Français"],
        ["Morocco", "العربية"],
        ["Morocco", "Français"],
        ["Mozambique", "Português"],
        ["Namibia", "English"],
        ["Niger", "Français"],
        ["Nigeria", "English"],
        ["Rwanda", "Français"],
        ["Rwanda", "English"],
        ["Sao Tome and Principe", "Português"],
        ["Senegal", "Français"],
        ["Sierra Leone", "English"],
        ["Somalia", "العربية"],
        ["South Africa", "English"],
        ["South Sudan", "English"],
        ["Sudan", "العربية"],
        ["Swaziland", "English"],
        ["Tanzania", "English"],
        ["Togo", "Français"],
        ["Tunisia", "العربية"],
        ["Uganda", "English"]
    ],
    "ASIA PACIFIC": [
        ["Australia", "English"],
        ["Bangladesh", "বাংলা"],
        ["Brunei", "Bahasa Melayu"],
        ["China", "中文"],
        ["Hong Kong SAR", "中文"],
        ["East Timor", "Português"],
        ["Fiji", "English"],
        ["India (English)", "English"],
        ["India (Hindi)", "हिन्"],
        ["Indonesia", "Bahasa Indonesia"],
        ["Japan", "日本語"],
        ["Kiribati", "English"],
        ["South Korea", "한국어"],
        ["Kyrgyzstan", "Русский"],
        ["Malaysia", "Bahasa Melayu"],
        ["Marshall Islands", "English"],
        ["Micronesia", "English"],
        ["New Zealand", "English"],
        ["Palau", "English"],
        ["Philippines", "English"],
        ["Philippines", "Tagalog"],
        ["Samoa", "English"],
        ["Singapore", "English"],
        ["Singapore", "中文"],
        ["Solomon Islands", "English"],
        ["Taiwan", "中文"],
        ["Thailand", "ไทย"],
        ["Tonga", "English"],
        ["Tuvalu", "English"],
        ["Vanuatu", "English"],
        ["Vanuatu", "Français"],
        ["Vietnam", "Tiếng Việt"]
    ],
    "EUROPE": [
        ["Andorra", "Català"],
        ["Andorra", "Français"],
        ["Austria", "Deutsch"],
        ["Belarus", "Русский"],
        ["Belgium", "Dutch"],
        ["Belgium", "Français"],
        ["Bosnia and Herzegovina", "Hrvatski"],
        ["Croatia", "Hrvatski"],
        ["Cyprus", "Ελληνικά"],
        ["Czech Republic", "Čeština"],
        ["Denmark", "Dansk"],
        ["Estonia", "Русский"],
        ["Estonia", "Eesti"],
        ["Finland", "Suomi"],
        ["France", "Français"],
        ["Germany", "Deutsch"],
        ["Greece", "Ελληνικά"],
        ["Hungary", "Magyar"],
        ["Ireland", "English"],
        ["Italy", "Italiano"],
        ["Liechtenstein", "Deutsch"],
        ["Luxembourg", "Français"],
        ["Malta", "English"],
        ["Monaco", "Français"],
        ["Netherlands", "Nederlands"],
        ["Norway", "Norsk"],
        ["Poland", "Polski"],
        ["Portugal", "Português"],
        ["Romania", "Română"],
        ["Russia", "Русский"],
        ["San Marino", "Italiano"],
        ["Slovakia", "Slovenčina"],
        ["Spain", "Español"],
        ["Spain", "Català"],
        ["Sweden", "Svenska"],
        ["Switzerland", "Deutsch"],
        ["Turkey", "Turkçe"],
        ["Ukraine", "Українська"],
        ["United Kingdom", "English"],
        ["State of Vatican City (Holy See)", "Italiano"]
    ],
    "MIDDLE EAST": [
        ["Bahrain", "العربية"],
        ["Iran", "فارسى"],
        ["Iraq", "العربية"],
        ["Israel", "עִבְרִית"],
        ["Jordan", "العربية"],
        ["Kuwait", "العربية"],
        ["Lebanon", "العربية"],
        ["Oman", "العربية"],
        ["Pakistan", "اردو"],
        ["Pakistan", "English"],
        ["Qatar", "العربية"],
        ["Saudi Arabia", "العربية"],
        ["Syria", "العربية"],
        ["United Arab Emirates", "العربية"]
    ]
}

const columns = 3;


function generateOptionsMenu(){
    const menu = document.querySelector("#mainAccordion");
    let text = "";
    for(let region in menuObj){
        text += 
        `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${region.split(" ").join("")}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${region.split(" ").join("")}" aria-expanded="false" aria-controls="flush-collapse${region.split(" ").join("")}">
                    ${region}
                </button>
            </h2>
            <div id="flush-collapse${region.split(" ").join("")}" class="accordion-collapse collapse" aria-labelledby="flush-heading${region.split(" ").join("")}" data-bs-parent="mainAccordion">
                <div class="accordion-body listOfNations">`;
        const extraRows = menuObj[region].length % columns;
        let perColumn = Math.ceil(menuObj[region].length / columns);
        let currentCountry = 0;
        for(let column = 0; column < columns; column++){
            text += `<div class="regionCol">`;
            for(let row = 1; row < perColumn; row++){
                text += `<a class="nationality">${menuObj[region][currentCountry][0]} | ${menuObj[region][currentCountry][1]}</a>`
                currentCountry++;
            }
            if (column < extraRows){
                text += `<a class="nationality">${menuObj[region][currentCountry][0]} | ${menuObj[region][currentCountry][1]}</a>`
                currentCountry++;
            }
            text += `</div>`;
        }
        text += 
            `   </div>
            </div>
        </div>`
    }
    menu.innerHTML = text;
}