export default {
  debug: 'warn',
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }],
        ['clean'],
        ['link', 'code-block', 'video'],
      ],
      handlers: {
        'code-block': function (value) {
          if (value) {
            this.quill.format('link', '#kontakt')
            console.log(value)
          } else {
            this.quill.format('link', false)
          }
        },
        'video': function (value) {
          if (value) {
            this.quill.format('link', '#custom-lonesnurra')
            console.log(value)
          } else {
            this.quill.format('link', false)
          }
        }
      }
    }
  },
  placeholder: 'post body ...',
  theme: 'snow'
}
