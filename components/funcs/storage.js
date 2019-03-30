class Storage {

   profiles = [
      'foo',
      'bar',
      'biz'
   ]

   get_profiles() {
      return this.profiles;
   }

   add_profile(profile) {
      this.profiles = [...this.profiles, profile]
   }
}

export default new Storage();