function elements() {
    return [    {
        view: 'Button',
        rect: '10px 10px 200px 24px',
        anchors: 'left top',
        text: 'uki is awesome!'
    },
    {
        view: 'Checkbox',
        anchors: 'left top',
        rect: '250px 10px 24px 24px'
    },
    {
        view: 'Label',
        rect: '275px 10px 100px 24px',
        anchors: 'left top',
        text: 'Checkbox 1',
        selectable: false
    },
    {
        view: 'Checkbox',
        rect: '250px 35px 24px 24px',
        anchors: 'left top',
        checked: true
    },
    {
        view: 'Label',
        rect: '275px 35px 100px 24px',
        anchors: 'left top',
        text: 'Checkbox 2',
        selectable: false
    },
    {
        view: 'Input',
        rect: '400 10 100 24',
        anchors: 'left top'
    },
    {
        view: 'Button',
        rect: '510px 10px 200px 24px',
        anchors: 'left top',
        text: 'uki is awesome!'
    },
    {
        view: 'Slider',
        rect: '400 35 310px 24px',
        anchors: 'left top'
    }
    ];
}

uki({
    view: 'Base',
    rect: '0 0 1000px 200px',
    children: [
    {
        view: 'Panel',
        rect: '0 0 1000px 100px',
        anchors: 'top left rigth', autosize: 'width',
        children: elements()
    },
    {
        view: 'Base',
        rect: '0 150px 1000px 100px',
        anchors: 'top left rigth', autosize: 'width',
        children: elements()
    }
    
    ]
}).attachTo( document.getElementById('test') );
