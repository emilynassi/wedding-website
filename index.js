
Vue.component('home', {
  name: 'home',
  template: '#home'
});

Vue.component('accomodations', {
  name: 'accomodations',
  template: '#accomodations'
}); 

Vue.component('weddingInfo', {
  name: 'weddingInfo',
  template: '#weddingInfo'

}); 

let app = new Vue({
  el: "#app",
  data: {
    theComponent: 'home',  // this is the 'name' of the current component
    info: {
      date: 'September 14, 2019',
      venue: 'Porta Asbury Park'
    },
    title : 'Emily & Alex',
    countdown: `${(Math.abs(new Date() - new Date("September 14, 2019")) /1000/60/60/24).toFixed(0)} days to go!`,
    registry : [
      {
        label: "Crate & Barrel", link: 'https://www.crateandbarrel.com/gift-registry/registrant-list/5952949#'
    },
    {
      label: "Bed Bath & Beyond", link: 'https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/546735137?wcref=yes&wcsid=729501235'

    }
  ]
  },
  methods: {
    goHome: function() {
    	this.theComponent = 'home';
    },
    goWeddingInfo: function() {
    	this.theComponent = 'weddingInfo';
    },
    goAccomodations : function() {
    	this.theComponent = 'accomodations';
    },
  },

})


