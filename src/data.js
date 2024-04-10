export const initialData = [
  {
    name: 'Folder 1',
    children: [
      { type: 'file', name: 'hello_world.js' },
      {
        type: 'folder',
        name: 'Folder A',
        children: [
          {
            type: 'folder',
            name: 'Folder B',
            children: [{ type: 'folder', name: 'Folder C', children: [{ type: 'file', name: 'hello_world2.js' }] }]
          }
        ]
      }
    ]
  },
  {
    name: 'Folder 2',
    children: [{ type: 'file', name: 'hello_Im_in_B.js' }]
  }
];

export const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
