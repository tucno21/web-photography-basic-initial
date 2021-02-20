document.getElementById('gallery') &&
    new Macy({
        container: '#gallery',
        trueOrder: false,
        trueOrder: false,
        waitForImages: false,
        debug:true,
        mobileFirst:true,
        columns: 1,
        margin: {
            x:15,
            y:15
        },
        breakAt: {
            1200: 5,
            940: 3,
            520: 1
        },
    })

