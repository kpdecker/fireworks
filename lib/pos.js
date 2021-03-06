// Load modules


// Declare internals

var internals = {};


exports.strands = {
    count: 3,
    length: 420
};


exports.mark = {
    launcher: [0, 89],
    burst1: [90, 149],
    burst2: [150, 209],
    tail1: [210, 239],
    tail2: [240, 269],
    curve: [270, 419],
    star: {
        inner: [
            [
                [0, 270, 1],
                [0, 419, -1],
                [0, 113, -1],
                [0, 114, 1]
            ],
            [
                [0, 395, 1],
                [0, 394, -1],
                [2, 174, -1],
                [2, 175, 1]
            ],
            [
                [0, 370, 1],
                [0, 369, -1],
                [2, 113, -1],
                [2, 114, 1]
            ],
            [
                [0, 345, 1],
                [0, 344, -1],
                [1, 174, -1],
                [1, 175, 1]
            ],
            [
                [0, 320, 1],
                [0, 319, -1],
                [1, 113, -1],
                [1, 114, 1]
            ],
            [
                [0, 295, 1],
                [0, 294, -1],
                [0, 174, -1],
                [0, 175, 1]
            ],
        ],
        outter: [
            [
                [1, 270, 1],
                [2, 419, -1],
                [0, 137, -1],
                [0, 136, 1]
            ],
            [
                [2, 395, 1],
                [2, 394, -1],
                [2, 227, -1],
                [2, 226, 1]
            ],
            [
                [2, 370, 1],
                [2, 369, -1],
                [2, 197, -1],
                [2, 196, 1]
            ],
            [
                [2, 345, 1],
                [2, 344, -1],
                [2, 257, -1],
                [2, 256, 1]
            ],
            [
                [2, 320, 1],
                [2, 319, -1],
                [2, 137, -1],
                [2, 136, 1]
            ],
            [
                [2, 295, 1],
                [2, 294, -1],
                [1, 227, -1],
                [1, 226, 1]
            ],
            [
                [1, 419, -1],
                [2, 270, 1],
                [1, 197, -1],
                [1, 196, 1]
            ],
            [
                [1, 395, 1],
                [1, 394, -1],
                [1, 257, -1],
                [1, 256, 1]
            ],
            [
                [1, 370, 1],
                [1, 369, -1],
                [1, 137, -1],
                [1, 136, 1]
            ],
            [
                [1, 345, 1],
                [1, 344, -1],
                [0, 227, -1],
                [0, 226, 1]
            ],
            [
                [1, 320, 1],
                [1, 319, -1],
                [0, 197, -1],
                [0, 196, 1]
            ],
            [
                [1, 295, 1],
                [1, 294, -1],
                [0, 257, -1],
                [0, 256, 1]
            ],
        ]
    }
};
