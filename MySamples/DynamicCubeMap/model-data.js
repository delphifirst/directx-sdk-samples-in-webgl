var ModelCube = {
	// position and normal
	vertices: [
		-1.0, 1.0, 1.0,		0.0, 1.0, 0.0,
		1.0, 1.0, 1.0,		0.0, 1.0, 0.0,
		1.0, 1.0, -1.0,		0.0, 1.0, 0.0,
		-1.0, 1.0, -1.0,	0.0, 1.0, 0.0,

		-1.0, -1.0, 1.0,	0.0, -1.0, 0.0,
		1.0, -1.0, 1.0,		0.0, -1.0, 0.0,
		1.0, -1.0, -1.0,	0.0, -1.0, 0.0,
		-1.0, -1.0, -1.0,	0.0, -1.0, 0.0,

		-1.0, -1.0, -1.0,	-1.0, 0.0, 0.0,
		-1.0, -1.0, 1.0,	-1.0, 0.0, 0.0,
		-1.0, 1.0, 1.0,		-1.0, 0.0, 0.0,
		-1.0, 1.0, -1.0,	-1.0, 0.0, 0.0,

		1.0, -1.0, -1.0,	1.0, 0.0, 0.0,
		1.0, -1.0, 1.0,		1.0, 0.0, 0.0,
		1.0, 1.0, 1.0,		1.0, 0.0, 0.0,
		1.0, 1.0, -1.0,		1.0, 0.0, 0.0,

		-1.0, -1.0, 1.0,	0.0, 0.0, 1.0,
		1.0, -1.0, 1.0,		0.0, 0.0, 1.0,
		1.0, 1.0, 1.0,		0.0, 0.0, 1.0,
		-1.0, 1.0, 1.0,		0.0, 0.0, 1.0,

		-1.0, -1.0, -1.0,	0.0, 0.0, -1.0,
		1.0, -1.0, -1.0,	0.0, 0.0, -1.0,
		1.0, 1.0, -1.0,		0.0, 0.0, -1.0,
		-1.0, 1.0, -1.0,	0.0, 0.0, -1.0,
	],

    indices: [
        3,0,1,		2,3,1,

        6,5,4,		7,6,4,

        11,8,9,		10,11,9,

        14,13,12,	15,14,12,

        19,16,17,	18,19,17,

        22,21,20,	23,22,20
    ]
};
