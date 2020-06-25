(function () {
    ///////////////////////////////////////task3
    const listOfCountryCodes = document.querySelector('#country');
    const countryCode = document.querySelector('.countryCode');
    const phoneInput = document.querySelector('#phone');
    const zipCode = document.querySelector('#zipCodeInput');

    const codes = {
        DK: {
            maxlength: 8,
            number: '+45',
            canBeSpaces: false
        },
        NO: {
            maxlength: 8,
            number: '+47',
            canBeSpaces: false
        },
        DE: {
            maxlength: 12,
            number: '+49',
            canBeSpaces: false
        },
        IS: {
            maxlength: 7,
            number: '+354',
            canBeSpaces: false
        },

        //for task2 to check spaces with different country
        BY: {
            maxlength: 7,
            number: '+375',
            canBeSpaces: true
        }
    };

    function createList(object) {
        Object.keys(object).map((value) => {
            const option = document.createElement("option");
            option.setAttribute("value", value);
            option.text = value;
            listOfCountryCodes.appendChild(option);
        })
    }

    function codeChoice({target: {value}}) {
        countryCode.innerText = codes[value].number;
        phoneInput.setAttribute('maxlength', codes[value].maxlength);
        phoneInput.value = '';
        zipCode.value = '';
    }

    function setDefaultPhoneCode() {
        const selectedValue = listOfCountryCodes.value;
        countryCode.innerText = codes[selectedValue].number;
        phoneInput.setAttribute('maxlength', codes[selectedValue].maxlength);
    }

    createList(codes);
    phoneInput.addEventListener('input', e => e.target.value = e.target.value.replace(/\D/g, ''));
    listOfCountryCodes.addEventListener('change', codeChoice);
    setDefaultPhoneCode();

    /////////////////////////////////////task2

    function checkSpaces() {
        const selectedValue = listOfCountryCodes.value;

        if (!codes[selectedValue].canBeSpaces) {
            zipCode.value = zipCode.value.replace(/\s/g, '');
        }
        zipCode.value = zipCode.value.toString().trim();
    }

    zipCode.addEventListener('input', checkSpaces);
})()