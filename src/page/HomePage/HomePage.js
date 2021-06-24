import { StructuredText } from 'vue-datocms';

// @vue/component
export default {
  name: 'HomePage',

  components: {
    'datocms-structured-text': StructuredText,
  },

  data() {
    return {
      content: {
        value: {
          schema: 'dast',
          document: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  { type: 'span', value: 'Lorem ' },
                  {
                    url: 'https://www.google.com',
                    type: 'link',
                    children: [{ type: 'span', value: 'ipsum dolor' }],
                  },
                  {
                    type: 'span',
                    value:
                      ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
                  },
                  { type: 'span', marks: ['highlight'], value: 'magna aliqua' },
                  { type: 'span', value: '. Ut enim ' },
                  { type: 'span', marks: ['strikethrough'], value: 'ad minim' },
                  {
                    type: 'span',
                    value:
                      ' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ',
                  },
                  { type: 'span', marks: ['emphasis'], value: 'voluptate velit' },
                  { type: 'span', value: ' esse ' },
                  { type: 'span', marks: ['underline'], value: 'cillum dolore' },
                  {
                    type: 'span',
                    value: ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ',
                  },
                  { type: 'span', marks: ['strong'], value: 'non proident' },
                  {
                    type: 'span',
                    value: ', sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  },
                ],
              },
              { type: 'paragraph', children: [{ type: 'span', value: '' }] },
            ],
          },
        },
      },
    };
  },
};
