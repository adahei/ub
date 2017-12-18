export default {
  methods: {
    friendlyURL (str) {
      var friendly_str = str
        .toLowerCase()
        .replace(/å/g, 'a')
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ /g, '-')
      return friendly_str
    }
  }
}
