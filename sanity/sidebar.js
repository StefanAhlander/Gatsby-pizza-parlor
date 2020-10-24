import React from 'react';
import s from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
  return s
    .list()
    .title(`Slick's Slices`)
    .items([
      s
        .listItem()
        .title('Home Page')
        .icon(() => <strong> 🔥</strong>)
        .child(s.editor().schemaType('storeSettings').documentId('downtown')),
      ...s
        .documentTypeListItems()
        .filter((item) => item.getId() !== 'storeSettings'),
    ]);
}
