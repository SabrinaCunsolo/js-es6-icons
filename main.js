$(document).ready( function() {

    // creare una lista di icone

    const icons = [
        {
            name: 'otter',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'spider',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'leaf',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-md',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-tie',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

    const container = $('.icons');

    const colors = ['#F76060', '#B64E8C', '#564D89'];

    const iconeColorate = coloreIcona(icons, colors);
    console.log(iconeColorate);
    stampaIcone(iconeColorate, container);

    // seleziono il tipo
    const types = getType(icons);
    const select = $('#type');

    genOption(types, select);


    select.change(() => {
        const selected = select.val();
        console.log(selected);

        const iconeFiltrate = filtraIcone(iconeColorate, selected);
        stampaIcone(iconeFiltrate, container);
    });
});

    function stampaIcone (icons, container) {

        container.html('');

        icons.forEach((icon) => {
            const {family, prefix, name, color} = icon;

            const html = `<div class="icon">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`

        container.append(html);

        });
    }

    function coloreIcona(icons, colors) {
        const types = getType(icons);
        console.log(types);

        const iconeColorate = icons.map((icon) => {
            const indexType = types.indexOf(icon.type);

            return {
                ...icon,
                color: colors[indexType]
            }
        });

        return iconeColorate;
    }


    function getType(icons) {
        const types = [];

        icons.forEach((icon) => {
            if (! types.includes(icon.type)) {
                types.push(icon.type);
            }
        });

        return types;
    }


    function genOption(types, select) {
        types.forEach((option) => {
            select.append(`<option value="${option}">${option}</option>`);
        });
    };


    function filtraIcone(iconeColorate, selected) {

        if (selected === 'all') {
            return iconeColorate;
        }

        const filtrate = iconeColorate.filter((icon) => {
            return icon.type === selected;
        });

        return filtrate;
    };
