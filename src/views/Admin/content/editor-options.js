export default {
  debug: 'warn',
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }],
      ],
    }
  },
  placeholder: 'post body ...',
  theme: 'snow'
}
